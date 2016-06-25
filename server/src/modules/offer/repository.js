const {Offer} = require('../../models');

module.exports = {
  all: () => Offer.findAll()
}
