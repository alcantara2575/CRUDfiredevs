const express = require('express')
const router = express.Router()
const groupsController =   require('../controllers/groups.controller');
// Retrieve all groups
router.get('/', groupsController.findAll);
// Create a new groups
router.post('/', groupsController.create);
// Retrieve a single groups with id
router.get('/:id', groupsController.findById);
// Update a groups with id
router.put('/:id', groupsController.update);
// Delete a groups with id
router.delete('/:id', groupsController.delete);
module.exports = router