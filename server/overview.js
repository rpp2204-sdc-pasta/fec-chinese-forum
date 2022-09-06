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

  return Promise.all([axios(getProductInfo),axios(getProductStyles)])
  .then( (responses) => {
      var overviewData;
      overviewData=responses[0].data;
      overviewData.styles=responses[1].data.results;
      return overviewData;
    })
    .catch((err)=>{
      console.log(err)
    })
};


module.exports.getOverview = getOverview;