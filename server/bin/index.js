const app = require('../src');
const logger = require('winston');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  logger.info(`server listening on ${PORT}`);
});

module.exports = app;
