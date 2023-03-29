const express = require('express');

const router = express.Router();

const APIController = require('../app/controllers/APIController');

// router.get('/:slug', APIController.home)
router.get('/categories', APIController.getAllCat)
router.get('/getMostBuyProd', APIController.getMostBuyProd)
router.get('/getNewestProd', APIController.getNewestProd)
router.get('/getMostViewProd', APIController.getMostViewProd)
router.get('/products', APIController.getAllProd)
router.get('/getProdById/:slug', APIController.getProdById)

router.get('/products/category/:slug', APIController.getProdByCatID)


module.exports = router;