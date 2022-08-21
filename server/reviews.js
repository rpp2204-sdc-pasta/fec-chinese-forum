const axios = require('axios');


const apiurl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=71701&sort=relevant`
const getProductcount =(sort, productId)=>{
  var options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}&sort=${sort}&count=500`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
    .catch((err)=>{
      console.log(err)
    })
}

const addHelpful = (id) =>{
  var options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${id}/helpful`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
  .catch((err=>{
    console.log(err)
  }))
}

module.exports ={
  getProductcount,
  addHelpful
}