import React from 'react';

class OverviewStyle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.style.style_id);
  }

  render() {
    return (
      <div className='Overview-styleThumbnail'>
        {this.props.select
          ? <div className='selectedCheckmark'>&#10003;</div>
          : null}
        <img
          className='Overview-styleThumbnailImg'
          src={this.props.style.photos[0].thumbnail_url}
          onClick={this.handleClick}
          alt={this.props.style.name}/>
      </div>
    );
  }
}

export default OverviewStyle;