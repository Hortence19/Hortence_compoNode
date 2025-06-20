const express = require('express');
const router = express.Router();

const bookCtrl = require('../contollers/books')

router.post('/', bookCtrl.createBook);
router.get('/', bookCtrl.getBook);
router.get('/:id', bookCtrl.getBookById);
router.put('/:id', bookCtrl.updateBook);
router.delete('/:id', bookCtrl.deleteBook);

module.exports = router;


