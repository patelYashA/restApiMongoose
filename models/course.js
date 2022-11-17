const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'student',
        required: true
    }
})

module.exports = mongoose.model("course", courseSchema)