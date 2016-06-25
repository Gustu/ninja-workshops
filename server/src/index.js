const app = require('express')();

app.get('/', function (req, res) {
  res.json({succes: true});
});

module.exports = app;
