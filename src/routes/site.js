const express = require('express');

const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/cart', siteController.cart)
router.get('/:slug', siteController.home)
router.get('/', siteController.home)

module.exports = router