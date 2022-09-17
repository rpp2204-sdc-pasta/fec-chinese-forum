import React from 'react';


class OverviewGalleryThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index) {
    this.props.changeMainImage(index);
  }

  render() {
    let thumbnails = this.props.thumbnails.slice(this.props.range[0], this.props.range[1])
      .map((thumbnail, index) => {
        if (index === this.props.mainImageIndex - this.props.range[0]) {
          return (
            <div key={index}
              onClick={() => this.handleClick(index)}>
              <img className='Overview-galleryThumbnailSelected'
                src={thumbnail}
                alt={'thumbnail#'+index}/>
            </div>
          )

        }
        return (
          <div key={index}
            onClick={() => this.handleClick(index)}>
            <img className='Overview-galleryThumbnail'
              src={thumbnail}
              alt={'thumbnail#'+index}/>
          </div>
        )

      });

    let scrollUp = null;
    if (parseInt(this.props.range[0]) > 0) {
      scrollUp = <a className='up' onClick={this.props.scrollUp}>&#708;</a>;
    }
    let scrollDown = null;
    if (parseInt(this.props.range[1]) < (this.props.thumbnails.length)) {
      scrollDown = <a className='down' onClick={this.props.scrollDown}>&#x02c5;</a>;
    }

    return (
      <div className='Overview-galleryThumbnails'>
        {scrollUp}
        {thumbnails}
        {scrollDown}
      </div>
    );
  }
}

export default OverviewGalleryThumbnail;


