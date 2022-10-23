const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        maxlength: 100,
        unique: true,
        require: true,
        lowercase: true
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true

    },
    password: {
        type: String,
        maxlength: 50,
        require: true
    }
});

module.exports = mongoose.model("users", userSchema)