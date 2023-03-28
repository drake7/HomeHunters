const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    property_id: { type: Number, required: true },
    category: { type: Number, required: true },
    bed: { type: Number, required: true },
    bath: { type: Number, required: true },
    address: {
      city: { type: String, required: true },
      street: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
    furnishing: { type: Number, required: true },
    carpet_area_sqm: { type: Number, required: true },
    move_in_date: { type: Date, required: true },
    tags: [{ type: Number, required: true }],
    landlord_user_id: { type: Number, required: true },
    lease_terms: { type: String, required: true },
    imgs: [{ type: String, required: true }],
    feature_img: { type: String, required: true },
    rent_price: { type: Number, required: true },
  });

module.exports = mongoose.model('Property', PropertySchema);
