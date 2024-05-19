// Import necessary modules
import mongoose from 'mongoose';

// Define Admin Schema
const adminSchema = new mongoose.Schema({
   
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create and export Admin model
const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
