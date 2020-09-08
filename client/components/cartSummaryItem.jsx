import React from 'react'

export default class CartSummaryItem extends React.Component {
    render() {
      const img = (window.screen.width)
        ? {
          height: '200px',
          width: '200px'
        }
        : {
          height: '400px',
          width: '400px'
        }
        return (
          <div className= 'summaryCard'>
            <div className="card-body col-xs-12">
                <img className='card-img' style={img}src={this.props.product.image} alt=""/>
                <h2 className="mt-2">{this.props.product.name}</h2>
                <h5 className='summary-price'>${(this.props.product.price / 100).toFixed(2)}</h5>
                <p>{this.props.product.shortDesc}</p>
            </div>
          </div>
        );
    }
}