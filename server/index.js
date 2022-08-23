require("dotenv").config();
const path = require('path');
const express = require('express');
const app = express();
const reviews =require('./reviews.js')
const port = process.env.PORT || 3000;
const axios = require('axios').default;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json())




app.get('/product', (req,res)=>{
  reviews.getProductcount()
    .then((response)=>{
      res.status(200).send(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
})

app.post('/reviews', (req,res)=>{
  reviews.getMorereviews(req.body.count)
    .then((response)=>{
      res.status(200).send(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


axios({
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/71701/styles',
  headers: {Authorization: process.env.AUTH}
})
  .then(function (response) {
    console.log(response.data.results[1].photos);
  });