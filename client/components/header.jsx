import React from 'react';

class Header extends React.Component {
    render() {
  
        return(
            <div className='navbar'>
                <div className='titleContainer ml-5'>
                    <div className='title'><span className='fas fa-dollar-sign mr-2'></span>Wicked Sales</div>
                </div>
                <div className="row text-white">
                  <p>{this.props.cartNumber} item(s)</p>
                  <i className="fas fa-shopping-cart fa-lg text-white ml-2" onClick={() => this.props.setView('cart', {})}></i>
                </div>
            </div>
        )   
    }
}

export default Header;