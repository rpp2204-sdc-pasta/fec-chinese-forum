import React from 'react';
import OverviewGallery from './ProductOverviewComponents/OverviewGallery.jsx';
import OverviewPrice from './ProductOverviewComponents/OverviewPrice.jsx';
import OverviewStyleSelect from './ProductOverviewComponents/OverviewStyleSelect.jsx';
import OverviewAddtoCart from './ProductOverviewComponents/OverviewAddtoCart.jsx';
import OverviewDescription from './ProductOverviewComponents/OverviewDescription.jsx';
import StarRating from './StarRating.jsx';
import axios from 'axios'

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currStyle: 0,
      product: {},
      expanded: false,
      mainImageIndex: 0,
      thumbnailRange: [0, 7]

    }
    this.changeStyle = this.changeStyle.bind(this);
    this.changeExpand = this.changeExpand.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.handleClickThumbnail = this.handleClickThumbnail.bind(this);
    this.handleMainImageScrollLeft = this.handleMainImageScrollLeft.bind(this);
    this.handleMainImageScrollRight = this.handleMainImageScrollRight.bind(this);
    this.handleThumbnailScrollUp = this.handleThumbnailScrollUp.bind(this);
    this.handleThumbnailScrollDown = this.handleThumbnailScrollDown.bind(this);
  }



  changeStyle(style_id) {
    this.setState({
      currStyle: style_id
    });

  }

  changeExpand(event) {
    this.setState({
      expanded: !this.state.expanded
    });

  }

  componentDidMount() {
      this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.fetchData();
      this.setState({
        expanded: false,
        mainImageIndex: 0,
        thumbnailRange: [0, 7]
      });
    }
  }

  fetchData() {
    var options = {
      method: 'get',
      url: `/overview/${this.props.id}`
    }
    axios(options)
      .then((result) => {
        let defaultStyle = result.data.styles[0].style_id;
        if (result.data.styles.find((style) => style['default?'] === true)) {
          defaultStyle = (result.data.styles.find((style) => style['default?'] === true).style_id);
        }

        this.setState({
          product: result.data,
          isLoading: false,
          currStyle: defaultStyle
        });
        this.props.getName(result.data.name);
      })
      .catch(err => {
        console.log(err)
      });


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
    if (upperRange <= this.state.product.styles.find(style => style.style_id === this.state.currStyle).photos.length) {
      this.setState({
        thumbnailRange: [lowerRange, upperRange]
      });
    };
  }

  handleMainImageScrollLeft() {
    console.log('left clicked');
    let targetIndex = parseInt(this.state.mainImageIndex) - 1;
    if (targetIndex >= 0) {
      this.setState({
        mainImageIndex: targetIndex
      });
    };
    if (targetIndex < this.state.thumbnailRange[0]){
      console.log('should scroll up');
      console.log(targetIndex);
      console.log(this.state.thumbnailRange[0]);
      this.handleThumbnailScrollUp();
    };
  }

  handleMainImageScrollRight() {
    console.log('right clicked');
    let targetIndex = parseInt(this.state.mainImageIndex) + 1;
    if (targetIndex <= this.state.product.styles.find(style => style.style_id === this.state.currStyle).photos.length - 1) {
      this.setState({
        mainImageIndex: targetIndex
      });
    };
    if (targetIndex >= this.state.thumbnailRange[1]){
      console.log('should scroll down');
      console.log(targetIndex);
      console.log(this.state.thumbnailRange[1]);
      this.handleThumbnailScrollDown();
    };
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading Overview</div>
    }

    let OverviewRight =
      <div className='Overview-Right'>
        <div className='Overview-star-rating'>
          <StarRating rating={this.state.product.starRating} />
          <button onClick={this.props.handleScrollToReview}>Read All Reviews</button>
        </div>
        <h2 className="Overview-category">{this.state.product.category}</h2>
        <h1 className="Overview-title">{this.state.product.name}</h1>
        <OverviewPrice
          original_price={this.state.product.styles.find(style => style.style_id === this.state.currStyle).original_price}
          sale_price={this.state.product.styles.find(style => style.style_id === this.state.currStyle).sale_price} />
        <OverviewStyleSelect
          name={this.state.product.styles.find(style => style.style_id === this.state.currStyle).name}
          styles={this.state.product.styles}
          changeStyle={this.changeStyle}
          handleClickThumbnail={this.handleClickThumbnail}/>
        <OverviewAddtoCart
          product={this.state.product}
          style_id={this.state.currStyle}
          skus={this.state.product.styles.find(style => style.style_id === this.state.currStyle).skus}
          key={new Date().getTime()}
          setRenderOutfit={this.props.setRenderOutfit} />
      </div>;

    let OverviewLeft =
        <OverviewGallery
          photos={this.state.product.styles.find(style => style.style_id === this.state.currStyle).photos}
          handleExpand={this.changeExpand}
          key={new Date().getTime()}
          mainImageIndex={this.state.mainImageIndex}
          thumbnailRange={this.state.thumbnailRange}
          handleClickThumbnail={this.handleClickThumbnail}
          handleMainImageScrollLeft={this.handleMainImageScrollLeft}
          handleMainImageScrollRight={this.handleMainImageScrollRight}
          handleThumbnailScrollUp={this.handleThumbnailScrollUp}
          handleThumbnailScrollDown={this.handleThumbnailScrollDown}/>

    let isExpanded = this.state.expanded;

    return (
      <div className='Overview-main'>
        <div className='Overview-flexRowOne'>
        {isExpanded
            ? <div className='Overview-LeftExpanded'>
              {OverviewLeft}
            </div>
            : <div className='Overview-LeftDefault'>
              {OverviewLeft}
            </div>
          }
          {OverviewRight}

        </div>
        <div className='Overview-flexRowTwo'>
          <div className='Overview-Bottom'>
            <OverviewDescription
              slogan={this.state.product.slogan}
              overview={this.state.product.description}
              features={this.state.product.features}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
