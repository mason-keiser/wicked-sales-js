import React from 'react';
import Header from './header';
import Productitem from './productItem';
import ProductList from './productList'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  viewProducts() {
    fetch('api/products')
      .then(res => res.json())
      .then(data => 
        process.stdout.write(data))
  }

  render() {
   return (
    <div>
      <Header/>
      <div>
        <ProductList/>
      </div>
    </div>
   );
  }
}