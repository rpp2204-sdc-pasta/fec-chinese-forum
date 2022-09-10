import React from 'react';
import ProductOverview from './ProductOverview.jsx';
import QnA from './QnA.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

let withTracker = (WrappedComponent, widgetName) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.clickTracker = this.clickTracker.bind(this);
    }

    clickTracker (e) {
      let options = {
        method: 'POST',
        url: '/interactions',
        data: {
          element: '' + e.target.innerHTML,
          widget: widgetName,
          time: '' + Date.now()
        }
      };
      axios(options)
        // .then((response) => {
        //   console.log(response.data);
        // })
        .catch(err => {
          console.log(err);
        });
    }

    render() {
      return (
        <div onClick={this.clickTracker}>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  };
}

const OverviewWithTracker = withTracker(ProductOverview, "Product Overview");
const RelatedWithTracker = withTracker(RelatedProducts, "Related Products");
const QnAWithTracker = withTracker(QnA, "Questions and Answers");
const ReviewsWithTracker = withTracker(Reviews, "Reviews");

export {
  OverviewWithTracker,
  RelatedWithTracker,
  QnAWithTracker,
  ReviewsWithTracker
};
