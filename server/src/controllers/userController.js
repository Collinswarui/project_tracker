const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/User')

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password} = req.body

    if(!username || !email || !password) {
        res.status(400)
        throw new Error('Please input all the fields')
    }

    const userExists = await UserModel.findOne({email})

    if(userExists) {
        res.status(400).json({message: 'User already exists'})
    }

    const user = await UserModel.create({
        username,
        email,
        password
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email
        })
    } else{
        res.status(400)
        throw new Error('Invalid user credentials')
    }

    
})


module.exports = {registerUser}