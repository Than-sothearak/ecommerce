import mongoose from "mongoose";
var encrypt = require('mongoose-encryption'); 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
       
    },

    password: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.models.User || mongoose.model('User', userSchema);