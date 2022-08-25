import React from 'react';

class OverviewStyle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(this.props.style.style_id);
  }

  render() {
    return (
      <div>
        <img
        className='Overview-styleThumbnail'
        src={this.props.style.photos[0].thumbnail_url}
        onClick={this.handleClick}/>
      </div>
    );
  }
}

export default OverviewStyle;