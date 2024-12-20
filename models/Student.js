const mongoose = require('mongoose');

// Define the schema
const StudentSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format'] // Email format validation
  },
  fatherName: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date,
    required: true,
  },
  doj: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  contact: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Contact number must be 10 digits'] // Validate 10-digit phone number
  },
  schoolOrCollege: {  // Changed from 'School_Collage_Name' to match form field
    type: String,
    required: true,
  }
}, {
  collection: 'student_info', // Specify the collection name
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create the model
const Student = mongoose.model('Student', StudentSchema);

module.exports = { Student };
