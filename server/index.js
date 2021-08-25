const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const {findTrends} = require('../database/index.js')
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());
app.use(morgan('dev'));

app.get('/states', (req, res) => {
  res.send('hello');
})

app.get('/states/:year/:month', (req, res) => {
  console.log('hello');
  findTrends(req.params, (response) => {
    res.send(response);
  });
})

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});