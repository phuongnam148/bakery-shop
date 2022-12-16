const express = require('express');

const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/cat/:slug', productController.category)
router.get('/cat', productController.category)
router.get('/:slug', productController.index)


module.exports = router;