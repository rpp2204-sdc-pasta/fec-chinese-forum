require("dotenv").config();
const axios = require('axios');

let getRelated = (id) => {
  return getRelatedProductID(id)
    .then(response => {
      response.data.push()
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
            if (product["style_id"] === undefined) {
              product = {
                style_id: value[1].results[0].style_id,
                original_price: value[1].results[0].original_price,
                sale_price: value[1].results[0].sale_price,
                photos: value[1].results[0].photos
              }
            }
            if (!product["photos"][0]["thumbnail_url"]) {
              product["photos"][0]["thumbnail_url"] = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
            }
            let overallRating = getOverAllRating(value[2].ratings);
            product = {
              ...product,
              id: value[0].id,
              name: value[0].name,
              category: value[0].category,
              features: value[0].features,
              overallRating
            }
            return product;
          });
          return results;
        });
    });
}

let getCurrent = (id) => {
  return Promise.all([getProductInfo(id).then(response => response.data),
          getProductStyles(id).then(response => response.data),
          getProductReviewRating(id).then(response => response.data)])
        .then(value => {
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
          if (product["style_id"] === undefined) {
            product = {
              style_id: value[1].results[0].style_id,
              original_price: value[1].results[0].original_price,
              sale_price: value[1].results[0].sale_price,
              photos: value[1].results[0].photos
            }
          }
          if (!product["photos"][0]["thumbnail_url"]) {
            product["photos"][0]["thumbnail_url"] = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
          }
          let overallRating = getOverAllRating(value[2].ratings);
          product = {
            ...product,
            id: value[0].id,
            name: value[0].name,
            category: value[0].category,
            features: value[0].features,
            overallRating
          }
          return product;
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
  return overallRating;
}


module.exports.getRelated = getRelated;
module.exports.getCurrent = getCurrent;
module.exports.getRelatedProductID = getRelatedProductID;
module.exports.getProductInfo = getProductInfo;
module.exports.getProductStyles = getProductStyles;
module.exports.getProductReviewRating = getProductReviewRating;
module.exports.getOverAllRating = getOverAllRating;