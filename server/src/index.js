const app = require('express')();
const router = require('./modules/router');
const bodyParser = require('body-parser');

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(router)
  .get('/', function (req, res) {
  res.json({succes: true});
});

module.exports = app;
