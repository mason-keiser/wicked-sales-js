import React from 'react'

export default class Modal extends React.Component {
    render() {
        return (
          <div className='container modalContainer'>
            <div className="modalColumn">
              <h1>Thanks for submitting your order with us!</h1>
              <h5>An email will arrive shortly with more information regarding shipping</h5>
                  <img className="gif" src="https://media.giphy.com/media/94EQmVHkveNck/source.gif" height="300"width="480" frameBorder="0" href="https://giphy.com/gifs/94EQmVHkveNck"/>
              <div className="mt-2" onClick={() => this.props.setView('catalog', {})}>&lt; back to catalog</div>
            </div>
          </div>
        )
    }
}