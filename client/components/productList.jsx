import React from 'react';
import ProductItem from './productItem'

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data
        });
      })
      .catch( err => console.error(err))
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return(
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 product-container ">
          {this.state.products.map(product => {
            return (
              <ProductItem
                key={product.productId}
                product={product}
                view={this.props.view}/>
            );
          })}
        </div>
      </div>

    )
  }
}