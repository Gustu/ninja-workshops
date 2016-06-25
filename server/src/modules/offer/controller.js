const repository = require('./repository');

function all (req, res) {
  repository.all()
    .then(offers => res.json({success: true, data: offers}))
    .catch(err => res.json({succes: false, error: err.message}))
}

function create (req, res) {
  const {title, content} = req.body;

  repository.create({title, content})
    .then(offers => res.json({success: true, data: offers}))
    .catch(err => res.json({succes: false, error: err.message}))
}

module.exports = {
  all,
  create
}
