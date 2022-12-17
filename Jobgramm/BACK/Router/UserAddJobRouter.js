const express = require('express');
const JobStore = require('../Modul/UserAddJob');
const app = express();
app.get('/jobs',(req,res)=>{
    JobStore.find().then(dt=>res.json(dt))
})
app.delete('/deletejobs/:id',(req,res)=>{
    const id = req.params.id;
    JobStore.findByIdAndDelete({_id:id},(err)=>{
        if(!err){
            console.log("deleted")
        }
        else{
            console.log(err)
        }
    })
})
app.put('/showing/:id',async (req,res)=>{
    try {
        console.log(req.params.id)
        await JobStore.findByIdAndUpdate(req.params.id,{$inc:{count_showing:1}})
        console.log("lended")
        
    } catch (error) {
        console.log(error)
        
    }
})
app.put('/applying/:id',async (req,res)=>{
    try {
        console.log(req.params.id)
        await JobStore.findByIdAndUpdate(req.params.id,{$inc:{count_apply:1}})
        console.log("aplyed")
        
    } catch (error) {
        console.log(error)
        
    }
})
app.put('/comment/:id',async (req,res)=>{
  
    // const data = JobStore.find(obj=>obj._id === req.params.id);
    console.log(JobStore)
    console.log(req.body)
    try {
        
               await JobStore.findByIdAndUpdate(req.params.id,{$push:{comments:req.body.comments}})

            }
       
 catch (error) {
        console.log(error)
        
    }
})
app.put('/update/:id',async (req,res)=>{

    try{
        // console.log(req.body)
        await JobStore.findById(req.params.id,(err,updated)=>{
            updated.category=req.body.category,
            updated.name=req.body.name,
            updated.salary=req.body.salary,
            updated.workinghours=req.body.workinghours,
            updated.location=req.body.location,
            updated.worktype=req.body.worktype,
            updated.finishdate=req.body.finishdate,
            updated.image=req.body.image,
            updated.description=req.body.description,
            updated.id=req.body.id,
            updated.save()
        }
            
            )
        

    }catch(err){
        console.log(err)
    }
    
})
app.post('/addjob',async (req,res)=>{
    // console.log(req.body)
    try{
        const newJob = new JobStore({
            company_name:req.body.company_name,
            category:req.body.category,
            name:req.body.name,
            salary:req.body.salary,
            workinghours:req.body.workinghours,
            location:req.body.location,
            worktype:req.body.worktype,
            finishdate:req.body.finishdate,
            image:req.body.image,
            description:req.body.description,
            count_showing:req.body.count_showing,
            count_apply:req.body.count_apply,
            comments:req.body.comments,
            id:req.body.id,
        })
        newJob.save();

    }catch(err){
        console.log(err)
    }
})
module.exports = app