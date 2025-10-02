// models/volunteer.js
// Volunteer Model for handling volunteer registration and information
const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    previousExperience: {
        type: String
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("Volunteer", volunteerSchema);