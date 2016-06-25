const app = require('../src');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});

module.exports = app;
