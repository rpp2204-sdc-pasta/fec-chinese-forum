require("dotenv").config();
const axios = require('axios');

exports.getRelated = (req, res) => {
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.id}/related`,
    headers: {
      Authorization: process.env.AUTH
    }
  }
  // console.log(req.params.id);
  return axios(options)
    .then(response => {
      let moreAPICalls = response.data.map(num => {
        let options = {
          method: 'GET',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${num}`,
          headers: {
            Authorization: process.env.AUTH
          }
        };
        let options2 = {
          method: 'GET',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${num}/styles`,
          headers: {
            Authorization: process.env.AUTH
          }
        };
        let options3 = {
          method: 'GET',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=${num}`,
          headers: {
            Authorization: process.env.AUTH
          }
        };
        return Promise.all([axios(options).then(response => response.data),
          axios(options2).then(response => response.data),
          axios(options3).then(response => response.data)]);
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
            let oneStars = value[2].ratings['1'] || 0;
            let twoStars = value[2].ratings['2'] || 0;
            let threeStars = value[2].ratings['3'] || 0;
            let fourStars = value[2].ratings['4'] || 0;
            let fiveStars = value[2].ratings['5'] || 0;
            let total = (1 * oneStars) + (2 * twoStars) + (3 * threeStars) + (4 * fourStars)
            + (5 * fiveStars);
            let totalReviews = Number(oneStars) + Number(twoStars) + Number(threeStars) + Number(fourStars) + Number(fiveStars);
            let overallRating = Math.round(100 * total / totalReviews) / 100;
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

