// const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/User')
const expressAsyncHandler = require('express-async-handler')


// @desc Register new user 
// @route POST /api/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password} = req.body

    // Check if the user has filled in all 
    // the fields before submitting the form
    if(!username || !email || !password) {
        res.status(400)
        throw new Error('Please input all the fields')
    }

    // Check if user exists in the system
    const userExists = await UserModel.findOne({email})

    if(userExists) {
        res.status(400).json({message: 'User already exists'})
    }


    // Hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    // Create new user
    const user = await UserModel.create({
        username,
        email,
        password:hashedPassword
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


// @desc Login user 
// @route POST /api/login
// @access public
const loginUser = expressAsyncHandler(async (req, res) => {
    const {email, password} = req.body

    // check for user email
    const user = await UserModel.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.username,
            email: user.email,
            // token: genarateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error('User does not exist')
    }
    
})

module.exports = {registerUser, loginUser}