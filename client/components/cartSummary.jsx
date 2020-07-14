import React from 'react'
import CartSummaryItem from './cartSummaryItem'

export default class CartSummary extends React.Component {
    render() {
        if (this.props.products.length === 0) {
          return (
            <div className='container modalContainer'>
              <div className="modalColumn">
                <h1 className='ml-5 pl-4'>Your cart is empty!</h1>
                <img className="gif" src="https://media.giphy.com/media/3o6Zt4j96fDG4XzO0w/source.gif" height="300"width="480" frameBorder="0" href="https://giphy.com/gifs/94EQmVHkveNck"/>
                <h5 className="mt-2">Add items to your cart by selecting the add to cart button on each catalog item!</h5>
                <div className="mt-2" onClick={() => this.props.setView('catalog', {})}>&lt; back to catalog</div>
              </div>
            </div>
          );
        }
        let cartTotal = 0;
        const currentSummary = this.props.products.map(product => {
          cartTotal += product.price;
          return (
            <CartSummaryItem 
              key={product.cartItemId}
              product={product} />
            );
        });
        return (
          <div className="container mt-2">
            <div onClick={() => this.props.setView('catalog', {})}>&lt; Back to Catalog</div>
            <div className='checkout'>
              <h2>Cart total: ${(cartTotal / 100).toFixed(2)}</h2>
              <button className="btn addToCart" onClick={() => this.props.setView('checkout', {})}>Checkout</button>
            </div>
            <div className= 'cart-column'>
              <h1 className="cart-title">My Cart</h1>
              {currentSummary}
            </div>
         
          </div>
        );
    }
}