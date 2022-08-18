require("dotenv").config();
const path = require('path');
const express = require('express');
const app = express();
const reviews =require('./reviews.js')
const port = process.env.PORT || 3000;

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