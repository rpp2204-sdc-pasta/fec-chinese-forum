const axios = require('axios');


const apiurl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=71701&sort=relevant`
const getProductcount =(sort)=>{
  sort = 'helpful' || 'relevant'
  var option = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=71701&sort=${sort}`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(option)
    .catch((err)=>{
      console.log(err)
    })
}

const getMorereviews = (num) =>{
  num = num || 2;
  var option = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=71701&sort=relevant&count=${num}`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(option)
    .catch((err)=>{
      console.log(err)
    })

}



module.exports ={
  getProductcount,
  getMorereviews
}