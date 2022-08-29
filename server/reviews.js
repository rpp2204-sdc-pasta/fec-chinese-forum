const axios = require('axios');
require("dotenv").config();


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

const avgStar = (data) =>{
  var sum = 0;
  var length = data.length;
  data.forEach((item)=>{
    sum += item.rating
  })
  return parseFloat(sum/length).toFixed(1)
}

const percentRecommend = (data) =>{
  var length = data.length
  var count = 0
  data.forEach((item)=>{
    if(item.recommend === true){
      count++
    }
  })
  return parseFloat(count/length*100).toFixed(0)
}

const breakdownScore = (data) =>{
  var total = data.length;
  var result = {1:0,
                2:0,
                3:0,
                4:0,
                5:0};
  data.forEach((item)=>{
    result[item.rating]=(result[item.rating]|| 0)+1
  })
  const sorted = Object.keys(result)
                    .sort()
                    .reduce(
                      (acc,key)=>({
                        ...acc,
                        [key]: parseFloat(result[key]/total*100).toFixed(0)
                        ,}),{});

return sorted
}

module.exports ={
  getProductcount,
  addHelpful,
  avgStar,
  percentRecommend,
  breakdownScore

}