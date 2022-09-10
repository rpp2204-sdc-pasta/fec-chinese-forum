import React from 'react';

class OverviewPrice extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if(this.props.sale_price !== null){
      var price = <div className='Overview-originalPriceSale'>{this.props.original_price}</div>;
    } else {
      var price = <div className='Overview-originalPrice'>{this.props.original_price}</div>;
    };

    return (
      <div className='Overview-price'>
        {price}
        {this.props.sale_price ? <div className='Overview-salePrice'>{this.props.sale_price}</div> : null}
      </div>
    );
  }
}

export default OverviewPrice;