const express = require('express');
const UserApplyStore = require('../Modul/UserApplyData');
const app = express();

app.get('/userapplys',(req,res)=>{
    UserApplyStore.find().then(dt=>res.json(dt))

})

app.post('/userapply',async (req,res)=>{
    try{
        const newApply = UserApplyStore({
            name:req.body.name,
            surname:req.body.surname,
            university:req.body.university,
            faculty:req.body.faculty,
            course:req.body.course,
            englishlevel:req.body.englishlevel,
            russianlevel:req.body.russianlevel,
            cv:req.body.cv,
            email:req.body.email,
            hobby:req.body.hobby,
            id:req.body.id

        })
        newApply.save()

    }catch(err){
        console.log(err)
    }
})
app.delete('/deleteapply/:id',(req,res)=>{
    const id = req.params.id;
    UserApplyStore.findByIdAndDelete({_id:id},(err)=>{
        if(!err){
            console.log("deleted")
        }
        else{
            console.log(err)
        }
    })
})

module.exports = app