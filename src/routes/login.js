const express = require('express');

const router = express.Router();

const loginController = require('../app/controllers/LoginController');
router.get('/changepass/:slug', loginController.changepass)
router.get('/logout', loginController.logout)
router.get('/:slug', loginController.login)
router.get('/', loginController.login)

router.post('/postAddUser', loginController.postAddUser)

router.post('/postLogin',loginController.postLogin)
router.post('/Users',loginController.p_changepass)
module.exports = router;