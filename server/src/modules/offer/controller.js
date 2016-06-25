const repository = require('./repository');

module.exports = {
  all: (req, res) => {
    repository.all()
      .then(offers => res.json({success: true, data: offers}))
      .catch(err => res.json({succes: false, error: err.message}))
  }
}
