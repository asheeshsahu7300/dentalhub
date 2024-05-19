import { Timestamp } from 'firebase/firestore';
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Assuming you have a User model and want to associate contacts with users
  },
  date:{
    type:Date,
    default: () => new Date().setHours(0, 0, 0, 0),
    require:true
  }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
