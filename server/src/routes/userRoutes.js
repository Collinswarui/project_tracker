// Setting up authentication routes

const express =  require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const router = express.Router()

router.post('/register')

router.post('/login')



export { router as userRouter }