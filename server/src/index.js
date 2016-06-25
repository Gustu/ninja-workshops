const app = require('express')();
const router = require('./modules/router');
app
  .use(router)
  .get('/', function (req, res) {
  res.json({succes: true});
});

module.exports = app;
