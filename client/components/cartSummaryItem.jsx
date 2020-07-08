import React from 'react'

export default class CartSummaryItem extends React.Component {
    render() {
        return (
          <div className= 'summaryCard'>
            <div className="d-flex card-body">
              <div className="col-4">
                <img className='card-img-top'src={this.props.product.image} alt=""/>
              </div>
              <div className="col-8 d-flex flex-column justify-content-center">
                <h2>{this.props.product.name}</h2>
                <h3 className='summary-price'>${(this.props.product.price / 100).toFixed(2)}</h3>
                <p>{this.props.product.shortDesc}</p>
              </div>
            </div>
          </div>
        );
    }
}