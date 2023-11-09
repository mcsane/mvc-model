const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

// Get All Users
router.get('/', usersController.getAllUsers);

// Get User By Id
router.get('/:id', usersController.getUserById);

// Create User
router.post('/', usersController.createUser);

// Update User
router.put('/:id', usersController.updateUser);

// Delete User
router.delete('/:id', usersController.deleteUser);

module.exports = router;