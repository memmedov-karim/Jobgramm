const mongoose = require('mongoose');
const UserApplyStore = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    englishlevel:{
        type:Number,
        required:true
    },
    russianlevel:{
        type:Number

    },
    cv:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    hobby:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    }
},{timestampt:true})

module.exports = mongoose.model('UserApplyStore',UserApplyStore)

