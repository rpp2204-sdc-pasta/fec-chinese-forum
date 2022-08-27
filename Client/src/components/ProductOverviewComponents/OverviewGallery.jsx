import React from 'react';
import OverviewGalleryMain from './OverviewGalleryMain.jsx';
import OverviewGalleryThumbnail from './OverviewGalleryThumbnail.jsx';

class OverviewGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImageIndex: 0,
      thumbnailRange: [0,7]
    }
    this.handleClickThumbnail = this.handleClickThumbnail.bind(this);
    this.handleMainImageScrollLeft = this.handleMainImageScrollLeft.bind(this);
    this.handleMainImageScrollRight = this.handleMainImageScrollRight.bind(this);
    this.handleThumbnailScrollUp = this.handleThumbnailScrollUp.bind(this);
    this.handleThumbnailScrollDown = this.handleThumbnailScrollDown.bind(this);

  }
  handleClickThumbnail(index) {
    this.setState({
      mainImageIndex: index
    });
  }

  handleThumbnailScrollUp(){
    if((this.state.thumbnailRange[0] > 0) && (this.state.thumbnailRange[1] > 7)) {
      this.setState({
        thumbnailRange: [this.state.thumbnailRange[0]--, this.state.thumbnailRange[1]--]
      });
    };
  }

  handleThumbnailScrollDown(){
    if((this.state.thumbnailRange[1]+1 < this.props.photos.length)) {
      this.setState({
        thumbnailRange: [this.state.thumbnailRange[0]++, this.state.thumbnailRange[1]++]
      });
    }
  }

  handleMainImageScrollLeft(){
    if(this.state.mainImageIndex-1 > 0) {
      this.setState({
        mainImageIndex: this.state.mainImageIndex-1
      });
    };
  }

  handleMainImageScrollRight(){
    if(this.state.mainImageIndex+1 < this.props.photos.length) {
      this.setState({
        mainImageIndex: this.state.mainImageIndex+1
      });

    };
  }



  render() {
    let thumbnails = []
    if(this.props.photos) {
      for(var index = 0; index < this.props.photos.length; index++) {
            thumbnails.push(this.props.photos[index].thumbnail_url);
      };
    };
    return (
      <div className='Overview-gallery'>
        <OverviewGalleryMain
          photo={this.props.photos[this.state.mainImageIndex].url}
          scrollLeft={this.handleMainImageScrollLeft}
          scrollRight={this.handleMainImageScrollRight}
        />
        <OverviewGalleryThumbnail
          thumbnails={thumbnails}
          range={this.state.thumbnailRange}
          changeMainImage={this.handleClickThumbnail}
          scrollUp={this.handleThumbnailScrollUp}
          scrollDown={this.handleThumbnailScrollDown}
        />
      </div>
    );
  }
}

export default OverviewGallery;

