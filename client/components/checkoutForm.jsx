import React from 'react';

function Modal(props) {
    if (props.modal === 'hidden') {
        return (
          null
        )
    } else {
      return (
        <div className='container modalContainer'>
          <div className="modalColumn">
            <h1>Thanks for submitting your order with us!</h1>
            <h5>An email will arrive shortly with more information regarding shipping</h5>
                <img className="gif" src="https://media.giphy.com/media/94EQmVHkveNck/source.gif" height="300"width="480" frameBorder="0" href="https://giphy.com/gifs/94EQmVHkveNck"/>
            <div className="mt-2" onClick={() => this.props.setView('catalog', {})}>&lt; back to catalog</div>
          </div>
        </div>
      );
    }
}

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      creditCardValue: '',
      shippingAddressValue: '',
      modal: 'hidden'
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
    this.handleShippingAddressChange = this.handleShippingAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleSubmit(callback) {
    event.preventDefault();
    const obj = {
      name: this.state.nameValue,
      creditCard: this.state.creditCardValue,
      shippingAddress: this.state.shippingAddressValue
    };
    callback(obj);
    this.showModal('ordered')
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

  showModal(string) {
    string === 'ordered'
      ? this.setState({ modal: 'ordered'})
      : string === 'hidden'
        ? this.setState({ modal: 'hidden'})
        : null
  }

  render() {
    return (
      <div className="container mt-2">
        <h1>My Cart</h1>
        <h4 className="text-muted">Order Total: {this.calculateTotal()}</h4>
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
          </div>
          <div className="d-flex justify-content-between">
            <p onClick={() => this.props.setView('catalog', {})}>&lt; Continue Shopping</p>
            <button onClick={() => this.showModal('ordered')} type="submit" className="btn addToCart ml-2">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}