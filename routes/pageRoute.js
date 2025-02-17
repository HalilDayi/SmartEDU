const express = require('express');
const pageContoller = require('../controllers/pageController.js');
const redirectMiddleware = require('../middlewares/redirectMiddleware.js');

const router = express.Router();

router.route('/').get(pageContoller.getIndexPage);
router.route('/about').get(pageContoller.getAboutPage);
router.route('/register').get(redirectMiddleware, pageContoller.getRegisterPage);
router.route('/login').get(redirectMiddleware, pageContoller.getLoginPage);

module.exports = router;