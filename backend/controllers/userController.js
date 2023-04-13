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
async function getUserById(req, res) {
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

async function getUserByEmail(req, res) {
    if(req.params){
        const {email} = req.params;
    }else{
        email = req
    }
    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({error: "User not found"});
        }
        res.status(200).json(user);
        return user;
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

async function initLogin(req,res){
    console.log('[init login]')
    console.log(req.body)
    const {email} = req.body;
    try{
        const user = await User.findOne({ email });;
        if(user.password == req.body.password){
            console.log('success')
            res.status(200).json({
                status: "SUCCESS",
                user: user
            })
        }else{
            console.log('invalid')
            res.status(400).json({
                status: "ERROR: Password did not match",
                email: req.body.email
            })
        }
    } catch (err){
        // res.status(400).json({error: err.message});
        res.status(400).json({
            status: "ERROR: Exception error",
            email: req.body.email,
            error: err.message
        })
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
  console.log(req.body)
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
  getUserById,
  getUserByEmail,
  initLogin,
  createUser,
  deleteUser,
  updateUser
};
