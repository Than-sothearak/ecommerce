import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
       
    },

    passoword: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema);