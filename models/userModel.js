const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    }
});

// method to log in User
userSchema.statics.login = async function(username, password){
    const user = await this.findOne({username});
    if(user){
        const auth = await compare(password, user.password)
        if(auth){
            return user
        }
        throw Error("incorrect password")
    }
    throw Error('Incorrect username')
}

module.exports = mongoose.model("users", userSchema)