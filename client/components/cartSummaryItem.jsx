import React from 'react'

export default class CartSummaryItem extends React.Component {
    render() {
        return (
          <div className= 'summaryCard'>
            <div className="card-body">
                <img className='card-img' style={{ height: '450px'}}src={this.props.product.image} alt=""/>
                <h2 className="mt-2">{this.props.product.name}</h2>
                <h5 className='summary-price'>${(this.props.product.price / 100).toFixed(2)}</h5>
                <p>{this.props.product.shortDesc}</p>
            </div>
          </div>
        );
    }
}