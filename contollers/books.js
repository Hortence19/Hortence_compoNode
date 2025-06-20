
const validate = require("mongoose-validator");
const Book = require("../schemas/books.js");

const saltRound = 10;

exports.createBook = (req, res) => {
    const book = new Book({
        ...req.body
    })


    book.save()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.json(error))
};


exports.getBook = (req, res) => {
    Book.find()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.json(error))
};


exports.getBookById = (req, res) => {
    Book.findOne({
        _id: req.params.id
    })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.json(error))
};


exports.updateBook = (req, res) => {
    Book.updateOne({
        _id: req.params.id
    },
    {
        _id: req.params.id,
        ...req.body
    }
)
    .then(() => res.status(200).json({message:"le livre  a ete modifier"}))
    .catch((error) => res.json(error))
};



exports.deleteBook = (req, res) => {
    Book.deleteOne({
        _id: req.params.id
    })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.json(error))

};
