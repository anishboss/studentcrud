const StudentModel = require('../models/Student');


// it will give student form and students lists
const getStudent = async (req,res)=>{
    try{
        const students = await StudentModel.find();
        const context = {students: students};
        // console.log(students);
        res.render("index",context);

    }
    catch(err){
        console.log(err);
        res.send("error occured")
    }
};


// it will create student
const createStudent = async (req,res)=>{
    const {name,grade,address} = req.body;
    const student = new StudentModel({name:name,grade:grade,address:address});
    await student.save();
    res.redirect("/")
};

// it will edit student
const editStudent = async (req,res)=>{
    console.log(req.params.id)
    const student = await StudentModel.findById({_id:req.params.id});
    console.log(student)
    res.render("edit",{student:student});
};

// it will update student
const updateStudent = async (req,res)=>{
    try{
        const student = await StudentModel.findByIdAndUpdate(req.params.id,req.body);
        console.log(student);
        res.redirect("/");
    }catch(err){
        console.log(err);
    }
};

// it will delete student

const deleteStudent = async (req,res)=>{
    try{
        // console.log(req.params.id)
        // res.send("delete")
        const id = req.params.id
        console.log(id);
        const student = await StudentModel.findByIdAndDelete({_id:id});
        res.redirect("/");
    }catch(err){
        console.log(err);
    }
};



module.exports = [getStudent,createStudent,editStudent,updateStudent,deleteStudent]