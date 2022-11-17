const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String
    },
    course: {
        type: String
    }
})

module.exports = mongoose.model("student", studentSchema)