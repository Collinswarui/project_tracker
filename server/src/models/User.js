const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: treu
    },
    password: {
        type:String,
        required: true
    }
})

export const UserModel = mongoose.model('users', UserSchema)