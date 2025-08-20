const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,   
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  emp_id: {
    type: String,
    required: true,
    unique: true    
  }
}, { timestamps: true }); 

const user = mongoose.model('User', userSchema);

module.exports = user;
