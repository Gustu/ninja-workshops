const {Router} = require('express');
const router = Router();
const offer = require('../offer');

router.get('/api/offers', offer.controller.all)

module.exports = router;
