require("dotenv").config();
const axios = require('axios');
const { getProductInfo, getProductStyles, getProductReviewRating, getOverAllRating } = require('./related');

let getOverview = (id) => {
  try {
    return Promise.all([getProductInfo(id), getProductStyles(id), getProductReviewRating(id)])
      .then( (responses) => {
        var overviewData;
        overviewData=responses[0].data;
        overviewData.styles=responses[1].data.results;

        let sum = 0;
        let count = 0;
        let reviewsMeta = responses[2].data.ratings;
        [overviewData.starRating, overviewData.reviewCount] = getOverAllRating(reviewsMeta);
        return overviewData;
      })
  } catch {
    console.log('error getting overview')
  }

};

let addToCart = (sku, quantity) => {
  try {
    let option = {
      method: 'POST',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart`,
      data: {
        "sku_id": sku,
        "count": quantity
      },
      headers: {Authorization: process.env.AUTH}
    };
    return axios(option)
      .then(res => {
        // console.log(res.data);
        return res.data;
      })
  } catch {
    console.log('error add to cart');
  }
};

module.exports.addToCart = addToCart;
module.exports.getOverview = getOverview;