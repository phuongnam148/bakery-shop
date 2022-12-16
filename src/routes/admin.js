const express = require('express');

const router = express.Router();

const adminController = require('../app/controllers/AdminController');


router.get('/delete/:slug', adminController.deleteProd)
router.get('/listProd/:slug', adminController.listProd)
router.get('/listProd', adminController.listProd)
router.get('/addProd', adminController.addProd)
router.get('/update/:slug', adminController.updateProd)
router.get('/home', adminController.index)
router.get('/:slug', adminController.index)

router.post('/post-product', adminController.post_product)
router.post('/post-update-product/:slug', adminController.post_update_product)




module.exports = router;