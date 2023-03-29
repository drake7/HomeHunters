const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const { MongoClient } = require('mongodb');
const {Property, User} = require('./schemas.js');
const DB_NAME = "homehunter_db"
const uri = "mongodb+srv://homehunter:csis@cluster0.hcs7q1d.mongodb.net/" + DB_NAME;

// Parse JSON requests
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

// :: PROPERTIES ::
// Get all properties
app.get('/properties', function(req, res) {
    Property.find({}, function(err, properties) {
      if (err) throw err;
      res.send(properties);
    });
});
app.get('/property/:id', function(req, res) {
    Property.findOne({_id: req.params.id}, function(err, propertty) {
      if (err) throw err;
      res.send(propertty);
    });
});

// Create a new property
app.post('/property', function(req, res) {
  const property = new Property({
    property_id: req.body.property_id,
    category: req.body.category,
    bed: req.body.bed,
    bath: req.body.bath,
    address: {
      city: req.body.address.city,
      street: req.body.address.street,
      zipcode: req.body.address.zipcode,
    },
    furnishing: req.body.furnishing,
    carpet_area_sqm: req.body.carpet_area_sqm,
    move_in_date: new Date(req.body.move_in_date),
    tags: req.body.tags,
    landlord_user_id: req.body.landlord_user_id,
    lease_terms: req.body.lease_terms,
    imgs: req.body.imgs,
    feature_img: req.body.feature_img,
    rent_price: req.body.rent_price,
  });

  // Save the property to the database
property.save(function(err) {
    if (err) throw err;
    res.send('Property created!');
  });
});

// Update an existing property
app.put('/property/:id', function(req, res) {
    Property.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, property) {
      if (err) throw err;
      res.send(property);
    });
});

// Delete property
app.delete('/property/:id', (req, res) => {
    Property.findOneAndDelete({_id: req.params.id}, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error deleting property from database');
      }
      else {
        res.send(result);
      }
    });
});

// :: USERS ::
// Get all users
app.get('/users', function(req, res) {
    User.find({}, function(err, users) {
      if (err) throw err;
      res.send(users);
    });
});

// Get a single user by ID
app.get('/user/:id', function(req, res) {
    User.findOne({_id: req.params.id}, function(err, user) {
      if (err) throw err;
      res.send(user);
    });
});

// Create a new user
app.post('/user', function(req, res) {
  const user = new User({
    user_id: req.body.user_id,
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    profile_photo: req.body.profile_photo,
    mobile: req.body.mobile
  });

  // Save the user to the database
  user.save(function(err) {
    if (err) throw err;
    res.send('User created!');
  });
});

// Update an existing user
app.put('/user/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
      if (err) throw err;
      res.send(user);
    });
});

// Delete user
app.delete('/user/:id', (req, res) => {
    User.findOneAndDelete({_id: req.params.id}, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error deleting user from database');
      }
      else {
        res.send(result);
      }
    });
});

// Start the server
const port = 5000;
app.listen(port, function() {
  console.log(`Server is running on port: ${port}`);
});
