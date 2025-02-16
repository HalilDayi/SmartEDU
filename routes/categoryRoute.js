const express = require('express');

const categoryController = require('../controllers/categoryController.js');

const router = express.Router();

router.route('/').post(categoryController.createCategory); // http://localhost:3000/categories


module.exports = router;