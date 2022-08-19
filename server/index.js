require("dotenv").config();
const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();
const reviews =require('./reviews.js')
const port = process.env.PORT || 3000;
const { getRelated } = require('./related');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp

app.get('/related/:id', (req, res) => {
  getRelated(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("some err happened");
    });
});

app.get('/outfit', (req, res) => {

});



app.post('/reviews', (req,res)=>{
  reviews.getProductcount(req.body.sort, req.body.productId)
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