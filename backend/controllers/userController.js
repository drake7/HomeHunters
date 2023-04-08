const User = require('../models/userModel');
const mongoose = require('mongoose');

// Get all users
async function getUsers(req, res) {
  try {
    const users = await User.find({}).sort({createdAt: -1}); // Sorting in descending order based on creation date
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
}

// Get a single user by ID
async function getUser(req, res) {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid user ID"});
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({error: "User not found"});
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
}

// Create a new user
async function createUser(req, res) {
  const {
    user_id,
    email,
    password,
    firstname,
    lastname,
    profile_photo,
    mobile
  } = req.body;
  try {
    const user = await User.create({
      user_id,
      email,
      password,
      firstname,
      lastname,
      profile_photo,
      mobile
    });
    res.status(201).json(user);
  } catch (err) {
    console.error('Error creating new user:', err.message);
    res.status(500).json({error: err.message});
  }
}

// Delete a user
async function deleteUser(req, res) {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid user ID"});
  }
  try {
    const user = await User.findOneAndDelete({_id: id});
    if (!user) {
      return res.status(400).json({error: "User not found"});
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
}

// Update a user
async function updateUser(req, res) {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid user ID"});
  }
  try {
    const user = await User.findOneAndUpdate({_id: id}, {...req.body});
    if (!user) {
      return res.status(400).json({error: "User not found"});
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
};
