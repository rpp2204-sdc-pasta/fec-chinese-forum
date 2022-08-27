import React from 'react';


class OverviewGalleryMain extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div className='Overview-galleryMain'>
        <a className='left' onClick={this.props.scrollLeft}/>
        <a className='right' onClick={this.props.scrollRight}/>
        <img
          src={this.props.photo}/>
      </div>
      );
    }
}

export default OverviewGalleryMain;


