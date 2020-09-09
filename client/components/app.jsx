import React from 'react';
import Header from './header';
import ProductList from './productList'
import ProductDetails from './product-details';
import CartSummary from './cartSummary'
import CheckoutForm from './checkoutForm';
import Modal from './modal'
import Home from './home';
import Disclaimer from './disclaimer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'deets',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
    this.getCartItems()
  }

  setView(names, params) {
    this.setState({
      view: {
        name: names,
        params: params
      }
    })
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => this.setState({ cart: data }))
  }

  viewProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => 
        process.stdout.write(data))
  }

  addToCart(product) {
    fetch('/api/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => { this.setState({ cart: this.state.cart.concat([data]) }) })
  }

  placeOrder(orderInfo) {
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderInfo)
    });
    this.setState({ cart: [], view: {name: 'modal', params: {} } });
    this.removeFromCart();
  }

  removeFromCart() {
    fetch(`/api/cartItems`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(id => {
      this.setState({
        cart: this.state.cart.filter(el => el.cartItemId == id)
      });
    });
}


  render() {
    const changeView = this.state.view.name === 'catalog' 
      ? <ProductList view={this.setView} />
      : this.state.view.name === 'cart'
        ? <CartSummary products={this.state.cart} removeFromCart={this.removeFromCart} setView={this.setView}/>
        : this.state.view.name === 'checkout'
          ? <CheckoutForm products={this.state.cart} placeOrder={this.placeOrder} setView={this.setView}/>
          : this.state.view.name === 'modal'
            ? <Modal setView={this.setView}/>
            : this.state.view.name === 'deets'
              ? <Disclaimer params={this.state.view.params} setView={this.setView}/>
              :<ProductDetails addToCart={this.addToCart} params={this.state.view.params} setView={this.setView}/>
              
    return (
      <div>
        <Header cartNumber={this.state.cart.length} setView={this.setView} view={this.state.view}/>
        <Home name={this.state.view}/>
        {changeView}     
      </div>
   );
  }
}