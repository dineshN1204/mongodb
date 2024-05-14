const mongoose = require("mongoose") //it's a default class in 
const staffSchema = new mongoose.Schema({
    name:String,
    age:Number,
    salary:Number,
    role:String,
    location:String
})
const staffmodel = mongoose.model('staffs',staffSchema)
module.exports = staffmodel