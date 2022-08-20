import React from 'react';

class OverviewPrice extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if(this.props.sale_price !== null){
      price = <div className='Overview-originalPriceSale'>{this.props.original_price}</div>;
    } else if {
      price = <div className='Overview-originalPrice'>{this.props.original_price}</div>;
    }
    return (
      <div className='Overview-price'>
        {price}
        {this.props.sale_price ? this.props.sale_price : null}
      </div>
    );
  }
}

export default OverviewPrice;