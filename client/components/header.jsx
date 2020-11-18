import React from 'react';

class Header extends React.Component {
    render() {
      const hideOrShow = (this.props.view.name === 'catalog' && this.props.cartNumber === 0 || this.props.view.name === 'deets')
        ? {
            display: 'none'
        }
        : null
        return(
            <div className='navbar' style={hideOrShow}>
                <div className='titleContainer' onClick={() => this.props.setView('catalog', {})}>
                    <div className='title'>Nomadic</div>
                </div>
                <div className="row text-white pt-3 cartRow" onClick={() => this.props.setView('cart', {})}>
                  <p>{this.props.cartNumber} item(s)</p>
                  <i className="fas fa-shopping-cart fa-lg text-white ml-2 mt-1"></i>
                </div>
            </div>
        )   
    }
}

export default Header;