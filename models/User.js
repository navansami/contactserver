const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:       String,
        required:   true,
        unique:     false
    },
    email: {
        type:       String,
        required:   true,
        unique:     true
    },
    password: {
        type:       String,
        required:   true,
        unique:     false,
        default:    "password01"
    },
    role: {
        type:       String,
        required:   true,
        unique:     false,
        default:    "staff"
    }
    },{
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
})

module.exports = mongoose.model("user", userSchema)