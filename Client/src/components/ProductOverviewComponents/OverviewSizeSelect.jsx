import React from 'react';

class OverviewSizeSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleSizeSelect = this.handleSizeSelect.bind(this);
  }

  handleSizeSelect(event){
    this.props.handleSizeSelect(event.target.value);
  }

  render() {
    var options = []
    Object.keys(this.props.skus).map( (key) => {
      options.push(<option value={key}>{this.props.skus[key].size}</option>);
    });


    return (
			//size selector
      //select size dropdown of current selected style available
      <select className='OverviewSizeSelect' onChange={this.handleSizeSelect}>
        <option value='0'>SELECT SIZE</option>
        {options}
      </select>

    );
  }
}

export default OverviewSizeSelect;