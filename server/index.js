const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

const cors=require('cors');

require("dotenv").config() 
const PORT = process.env.PORT || 6000;

app.use(cookieParser ()) 
app.use(express.json())  

app.use(cors())
app.use('/admin', require('./Routes/AdminRoutes'));
app.use('/post', require('./Routes/PostRoutes'));
app.use('/mail', require('./Routes/Mail'))


const connectToDb= require("./config/db");
const { application } = require("express");
connectToDb() 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
