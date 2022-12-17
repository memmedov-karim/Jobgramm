const mongoose = require('mongoose');
const JobStore = mongoose.Schema({
    company_name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true

    },
    name:{
        type:String,
        required:true

    },
    salary:{
        type:String,
        required:true

    },
    workinghours:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true

    },
    worktype:{
        type:String,
        required:true

    },
    finishdate:{
        type:String,
        required:true

    },
    image:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true

    },
    count_showing:{
        type:Number,
        required:true
    },
    count_apply:{
        type:Number,
        required:true
    },
    comments:{
        type:Array,
        required:true
    },
    id:{
        type:String,
        required:true

    }
})

module.exports = mongoose.model('JobStore',JobStore)