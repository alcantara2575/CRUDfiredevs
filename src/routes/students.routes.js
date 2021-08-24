const express = require('express')
const router = express.Router()
const studentsController =   require('../controllers/students.controller');
// Retrieve all student
router.get('/', studentsController.findAll);
// Create a new student
router.post('/', studentsController.create);
// Retrieve a single student with id
router.get('/:id', studentsController.findById);
// Update a student with id
router.put('/:id', studentsController.update);
// Delete a student with id
router.delete('/:id', studentsController.delete);
module.exports = router