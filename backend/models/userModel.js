const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  profile_photo: { type: String, required: true },
  mobile: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
