import React from 'react'
import Disclaimer from './disclaimer'

export default class Home extends React.Component {
    render() {
    const height = (window.screen.width < 600)
      ? {
        height: '725px',
        width: '100%'
      }
      : {
        height: '900px',
        width: '100%'
      }
    const hideHome = (this.props.name.name !== 'catalog')
      ? {
        display: 'none'
      }
      : null
    const backgroundImg = (window.screen.width < 600)
        ? <img src="images/Moble.jpg" alt="homePage" style={height} />
        :    <img src="images/mountain.jpg" alt="homePage" style={height} />
    const stylin = (window.screen.width < 600)
      ? {
          fontSize: '3rem',
          color: 'white'
      }
      : {
        color: 'white',
        fontSize: '5rem',
        paddingBottom: '2rem'
      }
        return (
            <div style={hideHome}>
                <div id="buttonDiv" style={hideHome}>
                    <h1 id= "title" className="text-white"style={stylin}>Wicked Sales</h1>
                    <button id='homePageButton' onClick={() => {
                        const element = document.getElementById('productList').scrollIntoView()
                    }}>View Products</button>
                </div>
                {backgroundImg}
            </div>
        );
    }
}