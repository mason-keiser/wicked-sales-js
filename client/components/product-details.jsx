import React, { Component } from 'react'

export default class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
        this.setView = props.setView
    }

    componentDidMount() {
        fetch(`/api/products/${this.props.params.productId}`)
            .then( res => res.json())
            .then( data => {
                this.setState({
                    product: data
                })
            })
    }

    render() {
      const align = (window.screen.width < 600)
      ? {
        textAlign: 'center'
      }
      : null
        return this.state.product 
        ? (
          <div className="container mt-5 mb-5">
            <div className="detailsCard" style={align}>
              <div className='back' onClick={() => this.setView('catalog', {})}>&lt; Back to Catalog</div>
              <div className="row row-cols-1 row-cols-md-1">
                <div className="col-lg-5 col-xs-12">
                  <img className="detailsImg col-12 mb-3" src={this.state.product.image} alt="" />
                </div>
                <div className="col-lg-7 col-xs-12">
                  <h3 className="card-title">{this.state.product.name}</h3>
                  <h5 className="card-text">{`$${(this.state.product.price / 100).toFixed(2)}`}</h5>
                  <p className="card-text">{this.state.product.shortDescription}</p>
                  <button className='btn addToCart' onClick={() => this.props.addToCart(this.state.product) && this.props.setView('catalog', {})}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          ) 
          : null
        }
}