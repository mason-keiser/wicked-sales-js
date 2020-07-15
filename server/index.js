require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query(`select 'successfully connected' as "message"`)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
  SELECT "productId",
         "name",
         "price",
         "image",
         "shortDescription"
  FROM "products"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const sql = `
  SELECT *
  FROM  "products"
  WHERE "productId" = $1
  `
  const value = [req.params.productId];
  db.query(sql, value)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        next(new ClientError(`Cannot find product with product id ${value}`, 404))
      } else {
        res.json(product)
      }
    })
    .catch(err => next(err))
})

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) {
    return res.status(200).json([])
  }
  const id = [req.session.cartId]
  const cartItems = `
  SELECT "c"."cartItemId",
         "c"."price",
         "p"."productId",
         "p"."image",
         "p"."name",
         "p"."shortDescription"
  FROM "cartItems" AS "c"
  JOIN "products" AS "p" USING ("productId")
  WHERE "c"."cartId" = $1
  `
  db.query(cartItems, id)
    .then(response => res.status(200).json(response.rows))
})


app.post('/api/carts', (req, res, next) => {
  const productId = parseInt(req.body.productId);
  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({ error: 'productId must be a positive integer' });
  }
  const checkForPriceSQL = `
  SELECT "price"
  FROM   "products"
  WHERE  "productId" = $1;
  `;

  db.query(checkForPriceSQL, [productId])
    .then(response => {
      if (!response.rows[0]) {
        throw new ClientError(`a product with ID: ${productId} does not exist`, 404);
      }
      const price = response.rows[0].price;
      const newRowSQL = `
      INSERT INTO "carts" ("cartId", "createdAt")
      VALUES      (default, default)
      RETURNING   "cartId";
      `;
      if (req.session.cartId) {
        const currentInfo = { productPrice: price, cartId: req.session.cartId };
        return currentInfo;
      }
      return db.query(newRowSQL)
        .then(response => {
          const newInfo = { productPrice: price, cartId: response.rows[0].cartId };
          return newInfo;
        });

    })
    .then(newInfo => {
      req.session.cartId = newInfo.cartId;
      const cartItemsSQL = `
      INSERT INTO"cartItems" ("cartId", "productId", "price")
      VALUES                 ($1, $2, $3)
      RETURNING              "cartItemId";`;
      return db.query(cartItemsSQL, [newInfo.cartId, productId, newInfo.productPrice]);
    })
    .then(response => {

      const cartItemInfoSQL = `
      SELECT "c"."cartItemId",
             "c"."price",
             "p"."productId",
             "p"."image",
             "p"."name",
             "p"."shortDescription"
      FROM   "cartItems" as "c"
      JOIN   "products" as "p" using ("productId")
      WHERE  "c"."cartItemId" = $1;
      `;
      return db.query(cartItemInfoSQL, [response.rows[0].cartItemId])
        .then(response => res.status(201).json(response.rows[0]));
    })
    .catch(err => next(err));
});

app.post('/api/orders', (req, res, next) => {
  if(!req.session.cartId) {
    throw new ClientError("there isn't a cart connected to this order", 400)
  } else {
    const sql = `
    INSERT INTO "orders" ("cartId", "name", "creditCard", "shippingAddress")
    VALUES      ($1, $2, $3, $4)
    RETURNING   "creditCard", "name", "shippingAddress", "orderId", "createdAt"
    `
    const params = [req.session.cartId, req.body.name, req.body.creditCard, req.body.shippingAddress];
    return db.query(sql, params)
      .then(result => {
        res.status(201).json(result.rows[0]);
        delete req.session.cartId   
      })
      .catch(err => next(err))
  }
})

app.delete('/api/cartItems/:cartItemId', (req, res, next) => {
  const { cartItemId } = req.params;
  const sql = `
    DELETE FROM "cartItems"
    WHERE       "cartItemId" = $1
    RETURNING *
    `;
  const id = [cartItemId];
  db.query(sql, id)
    .then(result => {
      const returnedCart = result.rows[0];

      if (!returnedCart) {
        return res.status(404).json({ error: `Cannot find cart with "cartItemId" ${cartItemId}` });
      } else {
        return res.status(204).json({ returnedCart: `Successfully deleted ${cartItemId}` });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
})

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});