import React from 'react'
import CartSummaryItem from './cartSummaryItem'

export default class CartSummary extends React.Component {
    render() {
        if (this.props.products.length === 0) {
          return (
            <div>
              <div onClick={() => this.setView('catalog', {})}><i className="fas fa-long-arrow-alt-left">Back to Catalog</i></div>
              <h1 className="cart-title">My Cart</h1>
              <div>
                <h1>Your Cart is currently empty...</h1>
              </div>
            </div>
          );
        }
        let cartTotal = 0;
        const currentSummary = this.props.products.map(product => {
          cartTotal += product.price;
          return (<CartSummaryItem key={product.cartItemId} product={product}/>);
        });
        return (<div className="container">
          <div onClick={() => this.props.setView('catalog', {})}><i>&lt; Back to Catalog</i></div>
          <h1 className="cart-title">My Cart</h1>
          <h2>Cart total: ${(cartTotal / 100).toFixed(2)}</h2>
          <div>
            {currentSummary}
          </div>
          <h2>Cart total: ${(cartTotal / 100).toFixed(2)}</h2>
          <button className="btn btn-primary" onClick={() => this.setView('checkout', {})}>Checkout</button>
        </div>
        );
    }
}