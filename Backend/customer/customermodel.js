const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
   image:{
    type:Object
   },
    Firstname :{
        type:String,
        required : true
    },
   
    email :{
        type:String,
        required:true
    },
    gender:{
        type:String
    },
    dob:{
        type:Date
    },
    mobno:{
        type:Number
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    educationallevel:{
        type:String,
        required:true
    },
    currentjob:{
        type:String,
        required:true
    },
   
    
    password :{
        type:String,
        required:true
    },
    

    
})
module.exports=mongoose.model("customer_details",userSchema)