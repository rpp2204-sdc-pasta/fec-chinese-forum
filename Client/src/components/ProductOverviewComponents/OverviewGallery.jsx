import React from 'react';
import OverviewGalleryMain from './OverviewGalleryMain.jsx';
import OverviewGalleryThumbnail from './OverviewGalleryThumbnail.jsx';

class OverviewGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImageIndex: 0,
      thumbnailRange: [0, 7]
    }
    this.handleClickThumbnail = this.handleClickThumbnail.bind(this);
    this.handleMainImageScrollLeft = this.handleMainImageScrollLeft.bind(this);
    this.handleMainImageScrollRight = this.handleMainImageScrollRight.bind(this);
    this.handleThumbnailScrollUp = this.handleThumbnailScrollUp.bind(this);
    this.handleThumbnailScrollDown = this.handleThumbnailScrollDown.bind(this);

  }
  handleClickThumbnail(index) {
    let targetIndex = parseInt(index) + parseInt(this.state.thumbnailRange[0]);
    this.setState({
      mainImageIndex: targetIndex
    });
  }

  handleThumbnailScrollUp() {
    let lowerRange = parseInt(this.state.thumbnailRange[0]) - 1;
    let upperRange = parseInt(this.state.thumbnailRange[1]) - 1;
    if ((lowerRange >= 0) && (upperRange >= 7)) {
      this.setState({
        thumbnailRange: [lowerRange, upperRange]
      });
    };
  }

  handleThumbnailScrollDown() {
    let lowerRange = parseInt(this.state.thumbnailRange[0]) + 1;
    let upperRange = parseInt(this.state.thumbnailRange[1]) + 1;
    if (upperRange <= this.props.photos.length) {
      this.setState({
        thumbnailRange: [lowerRange, upperRange]
      });
    };
  }

  handleMainImageScrollLeft() {
    let targetIndex = parseInt(this.state.mainImageIndex) - 1;
    if (targetIndex >= 0) {
      this.setState({
        mainImageIndex: targetIndex
      });
    };
  }

  handleMainImageScrollRight() {
    let targetIndex = parseInt(this.state.mainImageIndex) + 1;
    if (targetIndex <= this.props.photos.length - 1) {
      this.setState({
        mainImageIndex: targetIndex
      });
    };
  }



  render() {
    let thumbnails = []
    if (this.props.photos) {
      for (var index = 0; index < this.props.photos.length; index++) {
        thumbnails.push(this.props.photos[index].thumbnail_url);
      };

    };
    return (
      <div className='Overview-gallery'>
        <OverviewGalleryMain
          photo={this.props.photos[this.state.mainImageIndex].url}
          scrollLeft={this.handleMainImageScrollLeft}
          scrollRight={this.handleMainImageScrollRight}
          mainImageIndex={this.state.mainImageIndex}
          thumbnails={thumbnails}
          range={this.state.thumbnailRange}
          changeMainImage={this.handleClickThumbnail}
          scrollUp={this.handleThumbnailScrollUp}
          scrollDown={this.handleThumbnailScrollDown}
          handleExpand={this.props.handleExpand}
        />
      </div>
    );
  }
}

export default OverviewGallery;

