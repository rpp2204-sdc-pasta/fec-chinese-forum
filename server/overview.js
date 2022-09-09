require("dotenv").config();
const axios = require('axios');

let getOverview = (id) => {
  let getProductInfo = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`,
    headers: {Authorization: process.env.AUTH}
  };
  let getProductStyles = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`,
    headers: {Authorization: process.env.AUTH}
  };

  let getReviews = {

    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${id}`,
    headers: {Authorization: process.env.AUTH}
  }

  return Promise.all([
    axios(getProductInfo),
    axios(getProductStyles),
    axios(getReviews)])
  .then( (responses) => {
      var overviewData;
      overviewData=responses[0].data;
      overviewData.styles=responses[1].data.results;

      let sum = 0;
      let count = 0;
      let reviewsMeta = responses[2].data.ratings;
      Object.entries(reviewsMeta).map((rating) => {
        sum += parseInt(rating[0])* parseInt(rating[1]);
        count += parseInt(rating[1]);
      });
      overviewData.starRating =  parseFloat(sum/count).toFixed(2);
<<<<<<< HEAD
      overviewData.reviewCount = count;
=======
>>>>>>> main
      return overviewData;
    })
    .catch((err)=>{
      console.log(err)
    })
};

let addToCart = (sku, count) => {
  let getProductInfo = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart`,
    body: {
      'sku_id': sku,
      'count': count
    },
    headers: {Authorization: process.env.AUTH}
  };
  axios(getProductInfo)
  .then(res => {
    return res;
  })
  .catch(err => {
    console.log(err);
  });
};

module.exports.addToCart = addToCart;
<<<<<<< HEAD
module.exports.getOverview = getOverview;
=======
module.exports.getOverview = getOverview;
>>>>>>> main
