import React from 'react';

class OverviewQuantitySelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleQuantitySelect = this.handleQuantitySelect.bind(this);
  }

  handleQuantitySelect(event){
    this.props.handleQuantitySelect(event.target.value);
  }

  render() {
    let quantitySelect = []
    for(var i = 1; (i < this.props.quantity+1) && (i <= 15); i++) {
      quantitySelect.push(<option value={i}>{i}</option>);
    }
    return (

      <select className="Overview-quantity-select" onChange={this.handleQuantitySelect}>
        <option value="">--Please choose an option--</option>
        {quantitySelect}
      </select>

    );
  }
}

export default OverviewQuantitySelect;