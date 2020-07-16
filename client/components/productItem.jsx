import React from 'react'

export default class ProductItem extends React.Component {
    render() {
        const product = this.props.product;
        const price = Number(product.price)
        return (
          <div className="product my-4 col-4 pb-3" id={product.productId}>
            <div className="card" onClick={() => this.props.view('details', { productId: this.props.product.productId})}>
              <img src={product.image} className="card-img-top h-50 cardImg" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-price font-weight-bold">{`$${(this.props.product.price / 100).toFixed(2)}`}</p>
                <p className="card-text">{product.shortDescription}</p>
              </div>
            </div>
          </div>
        )
    }
}