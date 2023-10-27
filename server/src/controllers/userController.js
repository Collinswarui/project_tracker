const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
import { UserModel } from '../models/User.js'


const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password} = req.body

    if(!username || !email || !password) {
        res.status(400)
        throw new Error('Please input all the fields')
    }

    const user = await UserModel.findOne({email})

    if(user) {
        res.status(400).json({message: 'User already exists'})
    }
})


module.exports = {registerUser}