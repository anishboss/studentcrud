const express = require('express');
const route = express.Router();
const [getStudent,createStudent,editStudent,updateStudent,deleteStudent] = require('../controllers/studentController');

route.get('/',getStudent);
route.post('/',createStudent);
route.get('/edit/:id',editStudent);
route.post('/update/:id',updateStudent);
route.post('/delete/:id',deleteStudent);

module.exports = route