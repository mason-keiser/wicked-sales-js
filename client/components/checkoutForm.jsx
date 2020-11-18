import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      creditCardValue: '',
      shippingAddressValue: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
    this.handleShippingAddressChange = this.handleShippingAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(callback) {
    event.preventDefault();
    const obj = {
      name: this.state.emailValue,
      creditCard: this.state.creditCardValue,
      shippingAddress: this.state.shippingAddressValue
    };
    if (obj.name === '') {
      document.getElementById('name').style.borderColor = 'red'
      const req = document.getElementById('required')
        req.textContent = '* red fields are required for checkout'
        req.style.color = 'red'
    } if (obj.creditCard === '') {
      document.getElementById('creditCard').style.borderColor = 'red'
      const req = document.getElementById('required')
        req.textContent = '* red fields are required for checkout'
        req.style.color = 'red'
    } if (obj.shippingAddress === '') {
      document.getElementById('shippingAddress').style.borderColor = 'red'
      const req = document.getElementById('required')
        req.textContent = '* red fields are required for checkout'
        req.style.color = 'red'
    } else {
    callback(obj);
    }
  }

  handleEmailChange() {
    this.setState({
      emailValue: event.target.value
    });
  }

  handleCreditCardChange() {
    this.setState({
      creditCardValue: event.target.value
    });
  }

  handleShippingAddressChange() {
    this.setState({
      shippingAddressValue: event.target.value
    });
  }

  calculateTotal() {
    let total = 0;
    for (let index = 0; index < this.props.products.length; index++) {
      total += this.props.products[index].price;
    }
    return (total / 100).toFixed(2);
  }

  render() {
    return (
      <div className="container mt-2">
        <h1>My Cart</h1>
        <h4 className="text-muted">Order Total: {this.calculateTotal()}</h4>
        <div id="required"></div>
        <form onSubmit={() => this.handleSubmit(this.props.placeOrder)}>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="text" className="form-control" name="name" id="name" value={this.state.emailValue} onChange={this.handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="creditCard">Credit Card</label>
            <input type="text" className="form-control" name="creditCard" id="creditCard" value={this.state.creditCardValue} onChange={this.handleCreditCardChange} />
          </div>
          <div className="form-group">
            <label htmlFor="shippingAddress">Shipping Address</label>
            <textarea className="form-control" id="shippingAddress" rows="3" value={this.state.shippingAddressValue} onChange={this.handleShippingAddressChange}></textarea>
            <div className='mt-2'>
              <input type="checkbox"/><span className='ml-3'>I acknowledge that this is purely for demonstration purposes and no real emails, addresses, or credit card information should be used for the purposes of this app</span>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <p onClick={() => this.props.setView('catalog', {})}>&lt; Continue Shopping</p>
            <button type="submit" className="btn addToCart mt-5 ml-2">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}