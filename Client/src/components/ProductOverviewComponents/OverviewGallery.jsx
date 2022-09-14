import React from 'react';
import OverviewGalleryMain from './OverviewGalleryMain.jsx';
import OverviewGalleryThumbnail from './OverviewGalleryThumbnail.jsx';

class OverviewGallery extends React.Component {
  constructor(props) {
    super(props);

  }




  render() {
    let thumbnails = []
    if (this.props.photos) {
      for (var index = 0; index < this.props.photos.length; index++) {
        thumbnails.push(this.props.photos[index].thumbnail_url);
      };

    };
    let origPhotoUrl = this.props.photos[this.props.mainImageIndex].url;
    let smallerPhotoUrl = origPhotoUrl.slice(0,-4)+'q=10';
    console.log(origPhotoUrl, smallerPhotoUrl);
    return (
      <div className='Overview-gallery'>
        <OverviewGalleryMain
          photo={smallerPhotoUrl}
          scrollLeft={this.props.handleMainImageScrollLeft}
          scrollRight={this.props.handleMainImageScrollRight}
          mainImageIndex={this.props.mainImageIndex}
          thumbnails={thumbnails}
          range={this.props.thumbnailRange}
          changeMainImage={this.props.handleClickThumbnail}
          scrollUp={this.props.handleThumbnailScrollUp}
          scrollDown={this.props.handleThumbnailScrollDown}
          handleExpand={this.props.handleExpand}
        />
      </div>
    );
  }
}

export default OverviewGallery;

