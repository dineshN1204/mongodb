const express = require('express')
const bodyParser = require('body-parser')
const staffModel = require('../models/staff-model')
const router = express.Router()
router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send('Staffs Page')
})
router.post('/post',(req,res)=>{
    console.log(req.body);
    const newStaff = new staffModel(req.body)
    newStaff.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send('Staffs posting page')
})

router.get('/get',(req,res)=>{
    staffModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})

router.get('/get/:id',(req,res)=>{
    staffModel.findById(req.params.id)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
router.put('/update/:id',(req,res)=>{
    console.log(req.params.id, req.body)
    staffModel.findByIdAndUpdate(req.params.id, req.body)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send('Staffs update page')
})

router.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    staffModel.findByIdAndDelete(req.params.id)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send('Delete page')
})

module.exports = router