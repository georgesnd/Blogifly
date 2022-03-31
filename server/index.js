const express = require("express");
const app = express();
require("dotenv").config() 
const PORT = process.env.PORT || 6000;

app.use(express.json())  
app.use('/admin', require('./Routes/AdminRoutes'));

const connectToDb= require("./config/db")
connectToDb() 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
