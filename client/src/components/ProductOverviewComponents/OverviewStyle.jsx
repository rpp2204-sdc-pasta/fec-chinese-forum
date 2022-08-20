import React from 'react';

class OverviewStyle extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <img
				className="Overview-style"
				src={this.props.image}
				onClick={this.props.clickHandle}/>
    );
  }
}

export default OverviewStyle;