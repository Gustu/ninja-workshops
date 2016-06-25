const {Offer} = require('../../models');

module.exports = {
  all: () => Offer.findAll(),
  create: offer => Offer.create(offer)
}
