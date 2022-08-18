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
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${num}/styles`,
          headers: {
            Authorization: process.env.AUTH
          }
        }
        return axios(options);
      })
      return Promise.all(moreAPICalls)
        .then(values => {
          let result = values.map(value => {
            // console.log(value.data.results[0].name);
            let product = {};
            value.data.results.forEach(style => {
              if (style['default?']) {
                // console.log(style.name);
                product = {
                  product_id: value.data.product_id,
                  style_id: style.style_id,
                  original_price: style.original_price,
                  sale_price: style.sale_price,
                  photos: style.photos
                }
              }
            });
            return product;
          })
          // console.log(result);
          return result;
        });
    });
}
