import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className='navbar'>
                <div className='titleContainer ml-5'>
                    <div className='title'><span className='fas fa-dollar-sign mr-2'></span>Wicked Sales</div>
                </div>
            </div>
        )   
    }
}

export default Header;