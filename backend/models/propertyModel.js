//Creating property model
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types;

//defining new Schema for the properties
const propertySchema = new mongoose.Schema({
  category: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  carpet_area: { type: Number, required: true },
  rent: { type: Number, required: true },
  lease_terms: { type: String, },
  furnishing: { type: String, required: true },
  address: {
    province:{type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    zipcode: { type: String, required: true },
    geo:{
      lng: {type: Number},
      lat: {type: Number},
    }
  },
  move_in_date: { type: Date, required: true },
  tags: [{ type: Number }],
  imgs: [{ type: String }],
  feature_img: { type: String },
  landlord_user_id: { type: ObjectId, required: true },
  desc:{type:String, required:true}

},{timestamps:true});

module.exports = mongoose.model('Property', propertySchema); //it automatically builds a Propeties collection in database

