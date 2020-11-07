import React from 'react'
import Disclaimer from './disclaimer'

export default class Home extends React.Component {
    render() {
    const hideHome = (this.props.name.name !== 'catalog')
      ? {
        display: 'none'
      }
      : null
    const backgroundImg = (window.screen.width < 600)
        ? <img src="images/Moble.jpg" alt="homePage" className='homeBack'/>
        :    <img src="images/mountain.jpg" alt="homePage" className='homeBack'/>
        return (
            <div className='home'style={hideHome}>
                <div id="buttonDiv">
                    <h1 id= "title" className="text-white">Wicked Sales</h1>
                    <button id='homePageButton' onClick={() => {
                        const element = document.getElementById('productList').scrollIntoView()
                    }}>View Products</button>
                </div>
                {backgroundImg}
            </div>
        );
    }
}