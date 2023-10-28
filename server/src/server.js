// import required modules

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// importing user routes
require('./routes/userRoutes')

require('dotenv').config();

const app = express();

// set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

// Setting up api endpoints
app.use('/api', require('./routes/userRoutes')
)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB"))
  .catch(console.error);
  
const port = process.env.PORT  || 5000;

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
