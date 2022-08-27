require("dotenv").config();
const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();
const reviews =require('./reviews.js')
const qna =require('./qna.js')
const port = process.env.PORT || 3000;
const { getRelated } = require('./related');
const { Outfit } = require('../db/index.js');

app.use(express.static(path.join(__dirname, '../Client/dist')));
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
  Outfit.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("some err happened");
    });
});

app.post('/outfit', (req, res) => {
  const { id, category, name, original_price, sale_price, img_url, overallRating } = req.body;
  const obj = { id, category, name, original_price, sale_price, img_url, overallRating };
  Outfit.updateOne({id: id}, obj, {upsert: true}, function(err) {
    if (err) {
      console.log(err)
      res.status(400);
    } else {
      res.status(201);
    }
  });
});

app.delete('/outfit', (req, res) => {
  const { id } = req.body;
  Outfit.deleteOne({id: id}, function(err) {
    if (err) {
      console.log(err)
      res.status(406);
    } else {
      res.status(204);
    }
  })
});
//===========================================
// QnA api
app.get('/qs', (req,res)=>{
  qna.getQuestions(req.body.productId).then((response) => {
    console.log(response);
    res.send(response);
  }).catch((err) => {
    console.log(err)
  })
})

app.get('/ans', (req,res)=>{
  qna.getAnswers(req.body.qsId).then((response) => {
    console.log(response);
    res.send(response);
  }).catch((err) => {
    console.log(err)
  })
})

app.post('/qs', (req,res)=>{
  console.log(req.body);
  qna.postQuestion(req.body).then((response) => {
    console.log(response);
    res.send(response);
  }).catch((err) => {
    console.log(err)
  })
})

app.post('/ans', (req,res)=>{
  qna.postAnswer(req.body.questionId, req.body.options).then((response) => {
    console.log(response);
    res.send(response);
  }).catch((err) => {
    console.log(err)
  })
})

app.put('/qshelpful', (req,res)=>{
  console.log(req.body);
  qna.markQSHelpful(req.body.questionId).then((response) => {
    console.log(response);
    res.send(response);
  }).catch((err) => {
    console.log(err)
  })
})

app.put('/anshelpful', (req,res)=>{
  console.log(req.body);
  qna.markAnsHelpful(req.body.ansId).then((response) => {
    console.log(response);
    res.send(response);
  }).catch((err) => {
    console.log(err)
  })
})

app.put('/reportas', (req,res)=>{
  console.log(req.body);
  qna.reportQS(req.body.questionId).then((response) => {
    console.log(response);
    res.send(response);
  }).catch((err) => {
    console.log(err)
  })
})

app.put('/reportans', (req,res)=>{
  console.log(req.body);
  qna.reportAns(req.body.ansId).then((response) => {
    console.log(response);
    res.send(response);
  }).catch((err) => {
    console.log(err)
  })
})
// getQuestions,
// getAnswers,
// postQuestion,
// postAnswer,
// reportQS,
// reportAns,
// markQSHelpful,
// markAnsHelpful


//=================================================
//===========================================
// reviews api
app.post('/reviews', (req,res)=>{
  reviews.getProductcount(req.body.sort, req.body.productId)
    .then((response)=>{
      let avg = reviews.avgStar(response.data.results)
      res.status(200).send({reviews:response.data, avg:avg})
    })
    .catch((err)=>{
      console.log(err)
    })
})

app.put('/reviews/:id', (req, res)=>{
  // console.log(req.params.id)
  reviews.addHelpful(req.params.id)
  .then((resonose)=>{
    res.status(200).send('Helpful')
  })
  .catch((err)=>{
    console.log(err)
  })
})

//=================================================
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
