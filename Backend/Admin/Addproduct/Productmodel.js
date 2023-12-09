const mongoose = require("mongoose")
const adminSchema = new mongoose.Schema({
     category:{
        type:String,
        required:true
    },
        jobname:{
        type:String,
        required : true
    },
    companyname :{
         type:String,
         required:true
    },
    experience:{
        type:String,
        required:true
    },
    
    salary :{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true

    },
    note:{
        type:String,
        
    },
    jobdiscription:{
        type:String,
        required:true
    },
    keyskills:{
        type:String,
        required:true
    },
    Qualifications:{
        type:String,
        required:true
    }
    

    
})
module.exports=mongoose.model("job_details",adminSchema)