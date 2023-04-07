//Creating property model
const mongoose = require('mongoose')

//defining new Schema for the properties

const propertySchema = new mongoose.Schema({
  category: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  carpet_area: { type: Number, required: true },
  rent: { type: Number, required: true },
  lease_terms: { type: String, required: true },
  furnishing: { type: String, required: true },
  address: {
    province:{type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  move_in_date: { type: Date, required: true },
  tags: [{ type: String, required: true }],
  imgs: [{ type: String, required: true }],
  feature_img: { type: String, required: true },
  landlord_user_id: { type: Number, required: true },

},{timestamps:true});

module.exports = mongoose.model('Property', propertySchema); //it automatically builds a Propeties collection in database

