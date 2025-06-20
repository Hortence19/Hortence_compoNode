const express = require('express');
const router = express.Router();

const userCtrl = require('../contollers/user')

router.post('/', userCtrl.createUser);
router.post('/login', userCtrl.Login);

module.exports = router;


