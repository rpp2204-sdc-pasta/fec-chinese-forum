import React from 'react';
import OverviewGallery from './ProductOverviewComponents/OverviewGallery.jsx';
import OverviewReviews from './ProductOverviewComponents/OverviewReviews.jsx';
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
      expanded: false
    }
    this.changeStyle = this.changeStyle.bind(this);
    this.changeExpand = this.changeExpand.bind(this);
    this.fetchData = this.fetchData.bind(this);
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
    }
  }

  fetchData() {
    var options = {
      method:'get',
      url:  `/overview/${this.props.id}`
    }
    axios(options)
    .then((result)=>{
      let defaultStyle = result.data.styles[0].style_id;
      if (result.data.styles.find((style)=>style['default?']===true)) {
        defaultStyle = (result.data.styles.find((style)=>style['default?']===true).style_id);
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

  render() {
    if (this.state.isLoading) {
      return <div>Loading Overview</div>
    }

    let OverviewRight =
      <div className='Overview-Right'>
        <div className='Overview-star-rating'>
          <StarRating rating={this.state.product.starRating}/>
          <button onClick={this.props.handleScrollToReview}>Read All Reviews</button>
        </div>
        <h2 className="Overview-category">{this.state.product.category}</h2>
        <h1 className="Overview-title">{this.state.product.name}</h1>
        <OverviewPrice
          original_price={this.state.product.styles.find(style=> style.style_id === this.state.currStyle).original_price}
          sale_price={this.state.product.styles.find(style=> style.style_id === this.state.currStyle).sale_price}/>
        <OverviewStyleSelect
          name={this.state.product.styles.find(style=> style.style_id === this.state.currStyle).name}
          styles={this.state.product.styles}
          changeStyle={this.changeStyle}/>
        <OverviewAddtoCart
          product={this.state.product}
          style_id={this.state.currStyle}
          skus={this.state.product.styles.find(style=> style.style_id === this.state.currStyle).skus}
          key={new Date().getTime()}
          setRenderOutfit={this.props.setRenderOutfit}/>
      </div>;

    let isExpanded = this.state.expanded;

    return (
      <div className='Overview-main'>
        <div className='Overview-flexRowOne'>
          <div className='Overview-Left'>
          <OverviewGallery
              photos={this.state.product.styles.find(style=> style.style_id === this.state.currStyle).photos}
              handleExpand={this.changeExpand}
              key={new Date().getTime()}/>
          </div>
          {isExpanded
            ? null
            : OverviewRight
          }
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
