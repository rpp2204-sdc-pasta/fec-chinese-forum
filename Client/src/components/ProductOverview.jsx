import React from 'react';
import OverviewGallery from './ProductOverviewComponents/OverviewGallery.jsx';
import OverviewReviews from './ProductOverviewComponents/OverviewReviews.jsx';
import OverviewPrice from './ProductOverviewComponents/OverviewPrice.jsx';
import OverviewStyleSelect from './ProductOverviewComponents/OverviewStyleSelect.jsx';
import OverviewAddtoCart from './ProductOverviewComponents/OverviewAddtoCart.jsx';
import OverviewDescription from './ProductOverviewComponents/OverviewDescription.jsx';


class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style_id: 444218
    }
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle(style_id) {
    console.log('style selected: ', style_id)
    this.setState({
      style_id: style_id
    });

  }

  render() {

    var product = {
      "id": 71701,
      "campus": "hr-rpp",
      "name": "Heir Force Ones",
      "slogan": "A sneaker dynasty",
      "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
      "category": "Kicks",
      "default_price": "99.00",
      "created_at": "2022-05-11T19:38:15.373Z",
      "updated_at": "2022-05-11T19:38:15.373Z",
      "features": [
        {
            "feature": "Sole",
            "value": "Rubber"
        },
        {
            "feature": "Material",
            "value": "FullControlSkin"
        },
        {
            "feature": "Mid-Sole",
            "value": "ControlSupport Arch Bridge"
        },
        {
            "feature": "Stitching",
            "value": "Double Stitch"
        }
        ],
      "styles" : [
        {
          "style_id": 444218,
          "name": 'Forest Green & Black',
          "original_price": '140.00',
          "sale_price": '100.00',
          'default?': false,
          "photos": [
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
            },
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
            }
          ],
          "skus": {
            '2580652': { quantity: 14, size: '7' },
            '2580653': { quantity: 25, size: '7.5' }
          }
        },
        {
          "style_id": 444219,
          "name": 'Desert Brown & Tan',
          "original_price": '140.00',
          "sale_price": null,
          'default?': true,
          "photos": [
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
            },
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
            },
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
            },
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
            },
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
            },
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
            },
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
            },
            {
              "thumbnail_url": 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              "url": 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
            }
          ],
          "skus": {
            '2580654': { "quantity": 1, "size": '5' },
            '2580655': { "quantity": 25, "size": '5.5' }
          }
        }
      ]
    };
    // console.log('productfeatures', product.features);

    return (
      <div>
        <div className='Overview-Left'>
        <OverviewGallery
            photos={product.styles.find(style=> style.style_id === this.state.style_id).photos}/>
        </div>
        <div className='Overview-Right'>
          <h2 className="Overview-category">{product.category}</h2>
          <h1 className="Overview-title">{product.name}</h1>
          <OverviewPrice
            original_price={product.styles.find(style=> style.style_id === this.state.style_id).original_price}
            sale_price={product.styles.find(style=> style.style_id === this.state.style_id).sale_price}/>
          <OverviewStyleSelect
            name={product.styles.find(style=> style.style_id === this.state.style_id).name}
            styles={product.styles}
            changeStyle={this.changeStyle}/>
          <OverviewAddtoCart
            style_id={this.state.style_id}
            skus={product.styles.find(style=> style.style_id === this.state.style_id).skus}
            key={new Date().getTime()}/>
        </div>
        <div className='Overview-Bottom'>
          <OverviewDescription
            slogan={product.slogan}
            overview={product.description}
            features={product.features}
            />
        </div>
      </div>
    );
  }
}

export default ProductOverview;
