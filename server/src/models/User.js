const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type:String,
        required: [true, 'Please add a password']
    },
},
{
    timestamps: true
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel