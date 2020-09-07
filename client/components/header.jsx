import React from 'react';

class Header extends React.Component {
    render() {
      const hideOrShow = (this.props.view.name === 'catalog' && this.props.cartNumber === 0)
        ? {
            display: 'none'
        }
        : null
        return(
            <div className='navbar' style={hideOrShow}>
                <div className='titleContainer' onClick={() => this.props.setView('catalog', {})}>
                    <div className='title'><span className='fas fa-dollar-sign mr-2'></span>Wicked Sales</div>
                </div>
                <div className="row text-white pt-3" onClick={() => this.props.setView('cart', {})}>
                  <p>{this.props.cartNumber} item(s)</p>
                  <i className="fas fa-shopping-cart fa-lg text-white ml-2"></i>
                </div>
            </div>
        )   
    }
}

export default Header;