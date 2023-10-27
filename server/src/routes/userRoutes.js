// Setting up authentication routes
const express =  require('express')


const router = express.Router()

router.post('/register')

router.post('/login')



module.exports =  { router  }