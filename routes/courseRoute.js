const express = require('express');
const courseController = require('../controllers/courseController.js');
const roleMiddleware = require('../middlewares/roleMiddleware.js');

const router = express.Router();

router.route('/').post(roleMiddleware(["teacher", "admin"]), courseController.createCourse); //http://localhost:3000/courses
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);

module.exports = router;