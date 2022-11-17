const Course = require("../models/course");
const Student = require("../models/student");

exports.getStudent = (req, res, next) => {
    Student.find()
        .then(students => {
            res.status(200).json(students)
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.getCourse = (req, res, next) => {
    Course.find()
    .populate('student')
        .then(courses => {
            res.status(200).json(courses)
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.createStudent = (req, res, next) => {
    const name = req.body.name
    const course = req.body.course
    const student = new Student({
        name: name,
        course: course
    })
    student.save()
        .then(() => res.json("student added"))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.createCourse = (req, res, next) => {
    const name = req.body.name
    const student = req.body.student
    const course = new Course({
        name: name,
        student: student
    })
    course.save()
        .then(() => res.json("course added"))
        .catch(err => res.status(400).json('Error: ' + err));
}