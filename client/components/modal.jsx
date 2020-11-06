import React from 'react'

export default class Modal extends React.Component {
    render() {
      const style = (window.screen.width < 600)
      ? {
        width: '340px',
        marginBottom: '1rem',
        marginTop: '1rem'
      }
      : {
        marginBottom: '1rem',
        marginTop: '1rem'
      }
      const font = (window.screen.width < 600) 
        ? {
          fontSize: '2rem'
        }
        : null
        return (
          <div className='container modalContainer col-xs-12'>
            <div className="modalColumn">
              <h1 style={font}>Thanks for submitting your order with us!</h1>
              <h5>An email will arrive shortly with more information regarding shipping</h5>
                  <img className="gif" style={style} src="https://media.giphy.com/media/94EQmVHkveNck/source.gif" height="300"width="480" frameBorder="0" href="https://giphy.com/gifs/94EQmVHkveNck"/>
              <div className="mt-2 backButton" onClick={() => this.props.setView('catalog', {})}>&lt; back to catalog</div>
            </div>
          </div>
        )
    }
}