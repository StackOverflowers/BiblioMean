const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');


router.post('/registerBook',bookController.registerBook);
router.get('/listBook',bookController.listBook);


module.exports = router;