import React from 'react';


class OverviewGalleryThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.changeMainImage(event.target.id);
    // console.log('clicked',event.target.id)
  }

  render() {
    // let thumbnails = []
    //   if(this.props.photos) {
    //     for(var index = this.state.thumbnailRange[0];
    //         index < this.state.thumbnailRange[1] && index < this.props.photos.length;
    //         index++) {
    //           thumbnails.push(
    //           <OverviewImageGallaryThumbnail
    //             thumbnailURL={this.props.photos[index].thumbnail_url}
    //             index={index}
    //             changeMainImage={this.handleClickThumbnail}/>);
    //     };
    //   };
    // console.log('rangeMin', this.props);
    let thumbnails = this.props.thumbnails.slice(this.props.range[0],this.props.range[1])
      .map( (thumbnail, index) => {
        console.log('thumbnail,index',thumbnail,index);
        return (
          <div>
            <img className='Overview-galleryThumbnail'
              src={thumbnail}
              id={index}
              onClick={this.handleClick}/>
          </div>
        )
      });

    return (
      <div className='Overview-galleryThumbnails'>
        <a className='up' onClick={this.props.scrollUp}/>
        {thumbnails}
        <a className='down' onClick={this.props.scrollDown}/>
      </div>
      );
    }
}

export default OverviewGalleryThumbnail;


