import React from 'react'

export default class CartSummaryItem extends React.Component {
    render() {
        return (
          <div className= 'summaryCard'>
            <div className="card-body">
              <div className="col-7">
                <img className='card-img-top'src={this.props.product.image} alt=""/>
              </div>
              <div className="d-flex flex-column justify-content-center ml-5">
                <h2 className="mt-2">{this.props.product.name}</h2>
                <h5 className='summary-price pl-5'>${(this.props.product.price / 100).toFixed(2)}</h5>
                <p>{this.props.product.shortDesc}</p>
              </div>
            </div>
          </div>
        );
    }
}