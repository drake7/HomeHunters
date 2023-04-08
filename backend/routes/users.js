// In this file we set all routes for the CRUD operations on the users for our app
const express = require('express');
const router = express.Router(); // getting instance of Router for us
const { createUser, getUsers, deleteUser, updateUser, getUser } = require('../controllers/userController');

// Get all users
router.get('/', getUsers);

// Get a single user
router.get('/:id', getUser);

// Post a new user
router.post('/', createUser);

// Delete a user
router.delete('/:id', deleteUser);

// To update a user, we use patch as it only requires updating specific fields
router.patch('/:id', updateUser);

module.exports = router;