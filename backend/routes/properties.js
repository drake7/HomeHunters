//In this file we going to set all routes for the crud operations on the properties for our app 
const express = require('express');
const router = express.Router();               //getting instance of Router for us
const {createProperty,
        getProperties,
        deleteProperty,
        updateProperty,
        getProperty} = require('../controllers/propertyController')
        
//Get all properties
router.get('/',getProperties)

//Get a single prop
router.get('/:id',getProperty)

//Post a new porperty
router.post('/',createProperty )

//delete a property
router.delete('/:id',deleteProperty)

//To update a property  we using patch as its 
router.patch('/:id',updateProperty)

module.exports = router;