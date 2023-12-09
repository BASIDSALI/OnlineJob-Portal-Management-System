const interviewscheduled=require('./Scheduledmodel')

const interview = (req, res) => {
    let registration = new interviewscheduled({
      applied_jobs:req.params.applied_jobs,
    
     
      userId:req.body.userid,
        venue:req.body.venue,
        date:req.body.date,
        note:req.body.note,
        time:req.body.time,
      
      
    })
    registration.save().then((data)=>{
        res.json({
          msg:"Success",
          status:200,
          data:data
        })
    }).catch((err)=>{
      res.json({
          msg:"error occured",
          err:err
      })
    })
  };

  const interviewdetail = (req, res) => {
    interviewscheduled.findOne({applied_jobs:req.params.applied_jobs})
      .populate('applied_jobs')
     
      
      .then((data) => {
     
        res.status(200).json(data); 
      })
      .catch((err) => {
      
        res.status(500).json({ error: err.message });
  });
};

const appointusers = (req, res) => {
  interviewscheduled.find()
    
    .populate('applied_jobs').populate('userId')
    
    
    
    .then((data) => {
   
      res.status(200).json(data); 
    })
    .catch((err) => {
    
      res.status(500).json({ error: err.message });
});
};
  
   
  module.exports={interview,interviewdetail,appointusers}