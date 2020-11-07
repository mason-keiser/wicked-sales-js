import React from 'react'

export default class Disclaimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: true
        }
        this.hideModal = this.hideModal.bind(this)
    }
    
    hideModal(){
        this.setState({ show: false });
    };

    render() {
        const height = (window.screen.width < 600)
        ? {
          height: '100vh',
          width: '100%',
          opacity: '90%'
        }
        : {
          height: '100vh',
          width: '100%',
          opacity: '90%'
        }
        const backgroundImg = (window.screen.width < 600)
        ? <img src="images/Moble.jpg" alt="homePage" style={height} />
        :    <img src="images/mountain.jpg" alt="homePage" style={height} />
        return (

            <div className=' col-xs-12'>
                 {backgroundImg}
              <div className="" id='disclaimer' >
                <h1 className='mb-3' style={{ color: 'white'}}>This site was made for demonstration purposes only!</h1>
                <h5 className="mt-2" style={{ color: 'white'}}>Please do not enter any personal information as any orders placed are void since the site is just a demo. By clicking the button below you acknowledge these terms.</h5>
                <button className="mt-2 addToCart" onClick={() => this.props.setView('catalog', {})}>I consent</button>
              </div>
             
            </div>
        );
    }
}