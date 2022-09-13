require("dotenv").config();
const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();
const reviews = require('./reviews.js')
const qna = require('./qna.js')
const port = process.env.PORT || 3000;
const { getOverview, addToCart } = require('./overview.js');
const { getRelated, getCurrent } = require('./related');
const { Outfit } = require('../db/index.js');


app.use(express.json());
app.use(express.static(path.join(__dirname, '../Client/dist')));


//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp
//===========================================
// Overview api

app.get('/overview/:id', (req, res) => {
  getOverview(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      // console.log(err);
      res.status(500).send(err);
    });
});

app.post('/overview/cart', (req, res) => {
  // console.log(req.body.sku_id);
  // console.log(req.body.quantity);
  addToCart(req.body.sku_id, req.body.quantity)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      // console.log(err);
      res.status(500).send("some err happened");
    });
});

//===========================================
// log interaction
app.post('/interactions', (req, res) => {
  let options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions`,
    data: req.body,
    headers: {
      Authorization: process.env.AUTH
    }
  };
  return axios(options)
    .then(response => {
      // console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(err => {
      // console.log(err);
      res.status(500).send("failed to log click");
    });
});

//===========================================
// related products api

app.get('/current/:id', (req, res) => {
  getCurrent(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      // console.log(err);
      res.status(500).send(err);
    });
});

app.get('/related/:id', (req, res) => {
  getRelated(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      // console.log(err);
      res.status(500).send(err);
    });
});

app.get('/outfit', (req, res) => {
  Outfit.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      // console.log(err);
      res.status(500).send(err);
    });
});

app.post('/outfit', (req, res) => {
  const { id, category, name, original_price, sale_price, img_url, overallRating, reviewCount } = req.body;
  const obj = { id, category, name, original_price, sale_price, img_url, overallRating, reviewCount };
  Outfit.updateOne({ id: id }, obj, { upsert: true }, function (err) {
    if (err) {
      // console.log(err)
      res.status(400).send(err);
    } else {
      res.status(201).end();
    }
  });
});

app.delete('/outfit', (req, res) => {
  const { id } = req.body;
  Outfit.deleteOne({ id: id }, function (err) {
    if (err) {
      // console.log(err)
      res.status(406).send(err);
    } else {
      res.status(204).end();
    }
  })
});
//===========================================
// QnA api
app.get('/qs/:id', (req, res) => {
  //console.log(req.params, "THIS IS GETTING HERE");
  qna.getQuestions(req.params.id).then((response) => {
    //console.log(response.data.results);
    res.send(response.data.results);
  }).catch((err) => {
    //console.log(err)
    res.status(500).send(err);
  })
})

app.get('/ans', (req, res) => {
  qna.getAnswers(req.body.qsId).then((response) => {
    // console.log(response.data);
    res.send(response.data);
  }).catch((err) => {
    // console.log(err)
    res.status(500).send(err);
  })
})

app.post('/qs', (req, res) => {
  //console.log(req.body);
  // {
  //   body: "",
  //   name: "",
  //   email: "",
  //   product_id: integer
  // }
  req.body.product_id = parseInt(req.body.product_id);
  qna.postQuestion(req.body).then((response) => {
    //console.log(response.data);
    res.send(response.data);
  }).catch((err) => {
    // console.log(err);
    res.status(500).send(err);
  })
})

app.post('/ans', (req, res) => {
  // {
  //   body: "",
  //   name: "",
  //   email: "",
  //   photos: ""
  // }
  //req.body.questionId = parseInt(req.body.questionId);
  // console.log(req.body);
  qna.postAnswer(req.body.questionId, req.body.opt).then((response) => {
    //console.log(response.data);
    res.send(response.data);
  }).catch((err) => {
    // console.log(err)
    res.status(500).send(err);
  })
})

app.put('/qshelpful', (req, res) => {
  //console.log(req.body);
  qna.markQSHelpful(req.body.questionId).then((response) => {
    //console.log(response);
    res.sendStatus(200);
  }).catch((err) => {
    // console.log(err)
    res.status(500).send(err);
  })
})

app.put('/anshelpful', (req, res) => {
  //console.log(req.body);
  qna.markAnsHelpful(req.body.ansId).then((response) => {
    //console.log(response);
    res.sendStatus(200);
  }).catch((err) => {
    // console.log(err)
    res.status(500).send(err);
  })
})

app.put('/reportQs', (req, res) => {
  //console.log(req.body);
  qna.reportQS(req.body.questionId).then((response) => {
    //console.log(response);
    res.sendStatus(200);
  }).catch((err) => {
    // console.log(err)
    res.status(500).send(err);
  })
})

app.put('/reportAns', (req, res) => {
  // console.log(req.body);
  qna.reportAns(req.body.ansId).then((response) => {
    // console.log(response);
    res.sendStatus(200);
  }).catch((err) => {
    // console.log(err)
    res.status(500).send(err);
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
app.post('/reviews', (req, res) => {
  reviews.getProductcount(req.body.sort, req.body.productId)
    .then((response) => {
      res.status(200).send({
        reviews: response.data
      })
    })
    .catch((err)=>{
      // console.log(err)
      res.status(500).send(err);
    })
})

app.put('/reviews/:id', (req, res) => {
  reviews.addHelpful(req.params.id)
    .then((resonose) => {
      res.status(200).send('Helpful')
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})

app.get('/reviews/meta', (req, res) => {
  reviews.getMeta(req.query.product_id)
    .then((response) => {
      let percent = reviews.percentRecommend(response.data.recommended)
      let avg = reviews.avgStar(response.data.ratings)
      let breakdownScore = reviews.breakdownScore(response.data.ratings)
      res.status(200).send({
        avg,
        percent,
        breakdownScore,
        characteristics: response.data.characteristics,
      })
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})

app.post('/submit', (req, res)=>{
  reviews.postReview(req.body)
  .then((response)=>{
    // console.log(response, 'submit response  line 265555555555')
    res.status(200).send(true)
  })
  .catch((err)=>{
    res.status(500).send(false)
  })

})
// app.post('/image', upload.array('image'), (req, res)=>{
//   reviews.getImage(req.file)
//     .then((response)=>{
//       console.log(response)
//       res.status(200).send(response)
//     })
//     .catch((err)=>{
//       res.status(500).send(err)
//     })

// })

//=================================================
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
})

//=================================================
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
