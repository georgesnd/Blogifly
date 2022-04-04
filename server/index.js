const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

require("dotenv").config() 
const PORT = process.env.PORT || 6000;

app.use(cookieParser ()) 
app.use(express.json())  
app.use('/admin', require('./Routes/AdminRoutes'));
app.use('/post', require('./Routes/PostRoutes'));


const connectToDb= require("./config/db")
connectToDb() 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
