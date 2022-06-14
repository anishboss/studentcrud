const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type: String,required:true,trim:true
    },
    grade:{
        type: String,required:true
    },
    address:{
        type:String,required:true
    }
});

const StudentModel = mongoose.model('student',studentSchema);

module.exports = StudentModel