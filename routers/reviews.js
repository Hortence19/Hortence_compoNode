const express = require('express');
const router = express.Router();

const reviewCtrl = require('../contollers/reviews')

router.post('/',reviewCtrl.addReviews);

module.exports = router;

