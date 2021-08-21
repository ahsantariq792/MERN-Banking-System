const express = require('express')
const mongoose = require("mongoose")
const dotenv=require('dotenv')


const app=express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-with, Content-Type, Accept"
    );
    // res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
  });


dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())
app.use(require('./router/auth'))
const Customer =require('./model/userSchema')


PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})