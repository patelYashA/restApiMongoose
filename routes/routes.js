const router = require("express").Router()
const controller = require("../controllers/controller")

router.get('/student', controller.getStudent)
router.get('/course', controller.getCourse)
router.post('/student', controller.createStudent)
router.post('/course', controller.createCourse)

module.exports = router