const express = require('express')
const staffs = require('./routes/staffs')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/staffs')
mongoose.connection.on('connected',()=>{
    console.log('MongoDB is connected successfully');
})

app.get('/',(req,res)=>{
    res.send('Home Page')
})
//routes
app.use('/staffs',staffs)
app.listen('3001',()=>{
    console.log('Server is running in port 3001');
})
















