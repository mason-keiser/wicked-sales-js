import React from 'react'
import CartSummaryItem from './cartSummaryItem'

export default class CartSummary extends React.Component {
    render() {
      const style = (window.screen.width < 600)
        ? {
          width: '340px',
          marginBottom: '1rem',
          marginTop: '1rem'
        }
        : {
          marginBottom: '1rem',
          marginTop: '1rem'
        }
        if (this.props.products.length === 0) {
          return (
            <div className='container modalContainer col-xs-12'>
              <div className="modalColumn">
                <h1 className='' style={{ fontSize: '2rem', width: '10'}}>Your cart is empty!</h1>
                <img className="gif" style={style} src="https://media.giphy.com/media/3o6Zt4j96fDG4XzO0w/source.gif" height="300"width="480" frameBorder="0" href="https://giphy.com/gifs/94EQmVHkveNck"/>
                <h5 className="mt-2">hint: Add items to your cart by selecting the add to cart button on each catalog item!</h5>
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
              product={product}
              removeFromCart={this.props.removeFromCart} />
            );
        });
        return (
          <div className="container mt-2 col-xs-12">
            <div onClick={() => this.props.setView('catalog', {})}>&lt; Back to Catalog</div>
            <div className='mt-5' style={{ textAlign: "center"}}>
              <h2>Cart total: ${(cartTotal / 100).toFixed(2)}</h2>
              <div className='buttonCont'>
                <button className="btn addToCart" style={{textAlign: 'center'}} onClick={() => this.props.setView('checkout', {})}>Checkout</button>
                <button type="button" className="close" style={{textAlign: 'center'}} aria-label="Close" onClick={this.props.removeFromCart}>Clear Cart</button>
              </div>
            </div>
            <hr/>
            <div className= 'cart-column'>
              <h1 className="cart-title mt-2">My Cart</h1>
              {currentSummary}
            </div>
         
          </div>
        );
    }
}