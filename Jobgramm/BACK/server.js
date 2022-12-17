const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const UserSignRouter = require('./Router/UserSignRouter');
const UserAddJobRouter = require('./Router/UserAddJobRouter');
const UserApplyRouter = require('./Router/UserApplyRouter')
app.use(bodyParser.json());
app.use(cors());
app.use(UserSignRouter);
app.use(UserAddJobRouter);
app.use(UserApplyRouter);
const DataUrl = 'mongodb+srv://kerim123:20012912Ms@cluster0.pcmjq.mongodb.net/FindJobProject?retryWrites=true&w=majority';
mongoose.connect(DataUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("Connected Databese succesfuly....")
}).catch(err=>{
    console.log(err.message)
})
app.listen(3001,()=>{
    console.log("Server starting...")
})