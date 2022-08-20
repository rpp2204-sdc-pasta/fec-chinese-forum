import React from 'react';
import OverviewImages from './ProductOverviewComponents/OverviewImages.jsx';
import OverviewReviews from './ProductOverviewComponents/OverviewReviews.jsx';

import OverviewPrice from './ProductOverviewComponents/OverviewPrice.jsx';
import OverviewStyleSelect from './ProductOverviewComponents/OverviewStyleSelect.jsx';
import OverviewAddtoCart from './ProductOverviewComponents/OverviewAddtoCart.jsx';
import OverviewDescription from './ProductOverviewComponents/OverviewDescription.jsx';


class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> {/* ProductOverview*/}
        <div>  {/*left*/}
          <OverviewImages
            photos={this.props.style.photos}/>
        </div> {/*left*/}
        <div>  {/*right*/}
          <div>  {/* reviews, category, title, price*/}
            <OverviewReviews
              starRating={this.props.starRating}
              onClick={/*function that will scroll page
              to Ratings&Reviews Module*/}/>
            <h2 className="Overview-category">{this.props.category}</h2>
            <h1 className="Overview-title">{this.props.title}</h1>
            <OverviewPrice
              original_price={this.state.styles.original_original_price}
              sale_price={this.state.styles.original_sale_price}/>
          </div> {/* reviews, category, title, price*/}
          <div>  {/* style select*/}
            <OverviewStyleSelect
              style={this.props.styles}/>
          </div> {/* style select*/}
          <div>  {/* size, quantity, addToBag, addToOutfit*/}
            <OverviewAddtoCart
              skus={this.state.styles.skus}
              addToCart={this.addToCart}/>
          </div> {/* size, quantity, addToBag, addToOutfit*/}
        </div> {/*right*/}
        <div> {/*bottom*/}
          <OverviewDescription
            slogan={this.props.product.slogan}
            overview={this.props.product.description}
            features={this.props.product.features}/>
        </div>{/*bottom*/}
      </div> {/* ProductOverview*/}
    );
  }
}

export default ProductOverview;

/*
need to pass down as props:

product
  {name, slogan, description, category, features}
style
  [{name, original_price, sale_price, photos, skus}]