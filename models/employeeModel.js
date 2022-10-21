const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        maxLength: 100,
        require: true
    },
    last_name: {
        type: String,
        maxLength: 50,
        require: true
    },
    email: {
        type: String,
        maxLength: 50,
        unique: true,
        require: true
    },
    gender: {
        type: String,
        maxLength: 25,
        enum: ['Male', 'Female']
    },
    salary: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("employees", employeeSchema);