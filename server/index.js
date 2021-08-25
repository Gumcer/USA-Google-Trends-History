const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const {findTrends} = require('../database/index.js')
const port = 3000;

app.use(express.static(path.join(__dirname, '..')));
app.use(parser.json());
app.use(morgan('dev'));

app.get('/:year/:month', (req, res) => {
  findTrends(req.params, (response) => {
    res.send(response).status(200);
  });
})

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});