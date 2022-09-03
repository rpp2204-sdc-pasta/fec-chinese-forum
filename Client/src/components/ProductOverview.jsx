import React from 'react';
import OverviewGallery from './ProductOverviewComponents/OverviewGallery.jsx';
import OverviewReviews from './ProductOverviewComponents/OverviewReviews.jsx';
import OverviewPrice from './ProductOverviewComponents/OverviewPrice.jsx';
import OverviewStyleSelect from './ProductOverviewComponents/OverviewStyleSelect.jsx';
import OverviewAddtoCart from './ProductOverviewComponents/OverviewAddtoCart.jsx';
import OverviewDescription from './ProductOverviewComponents/OverviewDescription.jsx';
import axios from 'axios'

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currStyle: 0,
      product: {}
    }
    this.changeStyle = this.changeStyle.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  changeStyle(style_id) {
    console.log('style selected: ', style_id)
    this.setState({
      currStyle: style_id
    });

  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log('this.props.id', this.props.id);
    var options = {
      method:'get',
      url:  `http://localhost:1234/overview/${this.props.id}`
    }
    axios(options)
    .then((result)=>{
      console.log(result.data);
      let defaultStyle = result.data.styles.find((style)=>style['default?']===true).style_id || result.data.styles[0].style_id
      this.setState({
        product: result.data,
        isLoading: false,
        currStyle: result.data.styles.find((style)=>style['default?']===true).style_id
      })
    })
    .catch(err => {
      console.log(err)
    });


  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading Overview</div>
    }
    return (
      // <div>testing</div>

      <div className='Overview-main'>
        <div className='Overview-flexRowOne'>
          <div className='Overview-Left'>
          <OverviewGallery
              photos={this.state.product.styles.find(style=> style.style_id === this.state.currStyle).photos}
              key={new Date().getTime()}/>
          </div>
          <div className='Overview-Right'>
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
              style_id={this.state.currStyle}
              skus={this.state.product.styles.find(style=> style.style_id === this.state.currStyle).skus}
              key={new Date().getTime()}/>
          </div>
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
