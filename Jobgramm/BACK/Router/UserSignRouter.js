const { Router } = require('express');
const express = require('express');
const UserStore = require('../Modul/UserSignUp');
const app = express();
app.get('/users',(req,res)=>{
    UserStore.find().then(dt=>res.json(dt))
})
app.post('/signup',async (req,res)=>{
    // console.log(req.body)
    try{
        const newUser = new UserStore({
            email:req.body.email,
            name:req.body.name,
            password:req.body.password
        })
        newUser.save();

    }catch(err){
        console.log(err)
    }
})
module.exports = app