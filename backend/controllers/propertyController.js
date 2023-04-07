const Property = require('../models/propertyModel')
const mongoose =require('mongoose')
//In this file we going to create all the crud functions and db logic so that our routes file will be clean 

//get all properties
const getProperties = async(req,res)=>{
    try{
        const properties = await Property.find({}).sort({createdAt: -1})  //sorting acc to timestamp in desc order
        res.status(200).json(properties)}
    catch(err){
        res.status(400).json({ error: err.message })
    }
}

//get single property by id 
const getProperty =  async(req,res)=>{
    
        const {id}= req.params
        
        if(!mongoose.Types.ObjectId.isValid(id)){  //verifies given id is valid mongo type id which is 12bytes or 24hex
            return res.status(404).json({ error: "No such property" })
        }
        const property = await Property.findById(id)
        if(!property){
            return res.status(404).json({ error: "No such property" })
        }
        res.status(200).json(property);       
    
}

//create a new property 
const createProperty= async (req,res)=>{

    const {
        category,
        bedrooms,
        bathrooms,
        address,
        furnishing,
        carpet_area,
        move_in_date,
        tags,
        landlord_user_id,
        lease_terms,
        imgs,
        feature_img,
        rent, 
      } = req.body; 
     //destructured all the fields and got them individually
    try{
          const property = await Property.create({
            category,
            bedrooms,
            bathrooms,
            address,
            furnishing,
            carpet_area,
            move_in_date,
            tags,
            landlord_user_id,
            lease_terms,
            imgs,
            feature_img,
            rent, 
          })
          res.status(201).json(property)
    }
    catch(err) {
        console.error('Error creating new property:', err.message);
        res.status(500).json({ error: err.message });
      }
}


//delete a property
const deleteProperty = async (req,res)=>{
    const {id}= req.params
        
        if(!mongoose.Types.ObjectId.isValid(id)){  
            return res.status(404).json({ error: "No such property" })
        }
        const property = await Property.findOneAndDelete({_id:id})
        if(!property){
            return res.status(400).json({ error: "No such property" })
        }
        res.status(200).json(property);       

}
//update a property
const updateProperty = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){  
        return res.status(404).json({ error: "No such property" })
    }
    const property = await Property.findOneAndUpdate({_id:id},{...req.body}) //can have all or some fields 
    if(!property){
        return res.status(400).json({ error: "No such property" })
    }
    res.status(200).json(property);       

}

module.exports= {
    getProperties,
    getProperty,
    deleteProperty,
    updateProperty,
    createProperty
}