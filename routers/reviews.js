const express = require('express');
const router = express.Router();

const reviewCtrl = require('../contollers/reviews')

router.post('/',reviewCtrl.addReviews);
router.get('/:id', reviewCtrl.getReviewById);


module.exports = router;

