// import required modules

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// importing user routes
const userRouter = require('./routes/userRoutes')

require('dotenv').config();

const app = express();

// set up middleware
app.use(express.json());
app.use(cors());

// Setting up api endpoints
app.use('/auth', userRouter)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB"))
  .catch(console.error);
  
const port = process.env.PORT  || 3001;

app.listen(() => {
    console.log(`Server started at port ${port}`)
})
