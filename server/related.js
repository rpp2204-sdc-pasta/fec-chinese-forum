require("dotenv").config();
const axios = require('axios');

let getRelated = (id) => {

  return getRelatedProductID(id)
    .then(response => {
      let moreAPICalls = response.data.map(num => {
        return Promise.all([getProductInfo(num).then(response => response.data),
          getProductStyles(num).then(response => response.data),
          getProductReviewRating(num).then(response => response.data)]);
      });
      return Promise.all(moreAPICalls)
        .then(values => {
          let results = values.map(value => {
            let product = {};
            value[1].results.forEach(style => {
              if (style['default?']) {
                product = {
                  style_id: style.style_id,
                  original_price: style.original_price,
                  sale_price: style.sale_price,
                  photos: style.photos
                }
              }
            });
            let overallRating = getOverAllRating(value[2].ratings);
            product = {
              ...product,
              id: value[0].id,
              name: value[0].name,
              category: value[0].category,
              overallRating
            }
            return product;
          });
          return results;
        });
    });
}

let getRelatedProductID = (id) => {
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`,
    headers: {
      Authorization: process.env.AUTH
    }
  };
  return axios(options);
}

let getProductInfo = (id) => {
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`,
    headers: {
      Authorization: process.env.AUTH
    }
  };
  return axios(options);
}

let getProductStyles = (id) => {
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`,
    headers: {
      Authorization: process.env.AUTH
    }
  };
  return axios(options);
}

let getProductReviewRating = (id) => {
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=${id}`,
    headers: {
      Authorization: process.env.AUTH
    }
  };
  return axios(options);
}

let getOverAllRating = (ratings) => {
  let oneStars = ratings['1'] || 0;
  let twoStars = ratings['2'] || 0;
  let threeStars = ratings['3'] || 0;
  let fourStars = ratings['4'] || 0;
  let fiveStars = ratings['5'] || 0;
  let total = (1 * oneStars) + (2 * twoStars) + (3 * threeStars) + (4 * fourStars)
  + (5 * fiveStars);
  let totalReviews = Number(oneStars) + Number(twoStars) + Number(threeStars) + Number(fourStars) + Number(fiveStars);
  let overallRating = Math.round(100 * total / totalReviews) / 100;
}


module.exports.getRelated = getRelated;
module.exports.getRelatedProductID = getRelatedProductID;
module.exports.getProductInfo = getProductInfo;
module.exports.getProductStyles = getProductStyles;
module.exports.getProductReviewRating = getProductReviewRating;
module.exports.getOverAllRating = getOverAllRating;