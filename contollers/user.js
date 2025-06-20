require('dotenv').config();

const validate = require("mongoose-validator");
const User = require("../schemas/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRound = 10;
exports.createUser = (req, res) => {
    const user = new User({
        ...req.body
    })


    user.save()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.json(error))
};

exports.Login = (req, res) => {
    console.log("Login")
}