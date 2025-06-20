const validate = require("mongoose-validator");
const Review = require("../schemas/reviews");

const saltRound = 10;

exports.addReviews = (req, res) => {
    const review = new Review({
        ...req.body
    })


    review.save()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.json(error))
};

