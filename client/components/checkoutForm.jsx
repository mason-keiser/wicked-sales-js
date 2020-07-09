import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      creditCardValue: '',
      shippingAddressValue: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
    this.handleShippingAddressChange = this.handleShippingAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(callback) {
    event.preventDefault();
    const obj = {
      name: this.state.nameValue,
      creditCard: this.state.creditCardValue,
      shippingAddress: this.state.shippingAddressValue
    };
    callback(obj);
  }

  handleNameChange() {
    this.setState({
      nameValue: event.target.value
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
        <form onSubmit={() => this.handleSubmit(this.props.placeOrder)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" id="name" value={this.state.nameValue} onChange={this.handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="creditCard">Credit Card</label>
            <input type="text" className="form-control" name="creditCard" id="creditCard" value={this.state.creditCardValue} onChange={this.handleCreditCardChange} />
          </div>
          <div className="form-group">
            <label htmlFor="shippingAddress">Shipping Address</label>
            <textarea className="form-control" id="shippingAddress" rows="3" value={this.state.shippingAddressValue} onChange={this.handleShippingAddressChange}></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <p onClick={() => this.props.setView('catalog', {})}>&lt; Continue Shopping</p>
            <button onSubmit={this.props.placeOrder} type="submit" className="btn addToCart ml-2">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}