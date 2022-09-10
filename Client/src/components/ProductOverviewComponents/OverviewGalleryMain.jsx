import React from 'react';
import OverviewGalleryThumbnail from './OverviewGalleryThumbnail.jsx';

class OverviewGalleryMain extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let scrollLeft = null;
    if (parseInt(this.props.mainImageIndex) !== 0) {
      scrollLeft = <a className='left' onClick={this.props.scrollLeft}>&#x2039;</a>;
    }
    let scrollRight = null;
    if ((parseInt(this.props.mainImageIndex) !== parseInt(this.props.thumbnails.length - 1))) {
      scrollRight = <a className='right' onClick={this.props.scrollRight}>&#x203a;</a>;
    }
    return (
      <div className='Overview-galleryMain'>
        {scrollLeft}
        {scrollRight}
        <div
          className='Overview-mainImgDiv'
          onClick={this.props.handleExpand}>
          <img className='Overview-mainImg'
            src={this.props.photo}
          />
        </div>
        <OverviewGalleryThumbnail
          thumbnails={this.props.thumbnails}
          mainImageIndex={this.props.mainImageIndex}
          range={this.props.range}
          changeMainImage={this.props.changeMainImage}
          scrollUp={this.props.scrollUp}
          scrollDown={this.props.scrollDown}
        />
      </div>
    );
  }
}

export default OverviewGalleryMain;


