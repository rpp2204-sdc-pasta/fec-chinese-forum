require("dotenv").config();
const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { getRelated } = require('./related');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/related/:id', (req, res) => {
  getRelated(req, res);
});

app.get('/outfit', (req, res) => {

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})