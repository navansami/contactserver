const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    firstName: {
        type:       String,
        required:   true,
        unique:     false
    },
    lastName: {
        type:       String,
        required:   true,
        unique:     false,
    },
    email: {
        type:       String,
        required:   true,
        unique:     false
    },
    landline: {
        type:       String,
        required:   false,
        unique:     false
    },
    mobile: {
        type:       String,
        required:   false,
        unique:     false
    },
    company: {
        type:       String,
        required:   false,
        unique:     false
    },
    department: {
        type:       String,
        required:   false,
        unique:     false
    },
    designation: {
        type:       String,
        required:   false,
        unique:     false
    },
    comments: {
        type:       String,
        required:   false,
        unique:     false
    },
    [tags]: {
        type:       String,
        required:   false,
        unique:     false
    },
    active: {
        type:       Boolean,
        required:   true,
        unique:     false,
        default:    false
    },
    clicks: {
        type:       Number,
        required:   false,
        unique:     false,
        default:    0
    },
})

module.exports = mongoose.model("contact", contactSchema)