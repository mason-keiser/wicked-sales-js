import React from 'react'

export default class Home extends React.Component {
    render() {
    const height = (window.screen.width < 600)
      ? {
        height: '700px',
        width: '100%'
      }
      : {
        height: '800px',
        width: '100%'
      }
      const hideHome = (this.props.name.name !== 'catalog')
      ? {
        display: 'none'
      }
      : null
        return (
            <div style={hideHome}>
                <div id="buttonDiv" style={hideHome}>
                    <button id='homePageButton' onClick={() => {
                        const element = document.getElementById('productList').scrollIntoView()
                    }}> Click Here</button>
                </div>
                <img src="images/dark.jpg" alt="homePage" style={height} />
            </div>
        );
    }
}