const addjobSchemma=require('./applyjobmodel')

const job = (req, res) => {
    let registration = new addjobSchemma({
        jobId:req.params.jobid,
        userId:req.body.userid,
        
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
  //applied jobs
  const applied = ((req, res) => {
    let arr=[]
    addjobSchemma.find({userId:req.params.userid}).populate('jobId').exec().then((value) => {
        
        res.json({
            msg: "user address",
            status: 200,
            datas: value

        })
    }).catch((err) => {
        res.json({
            msg: "error",
            error: err
        })
    })
})

//jobapproval
const jobapproval = (req, res) => {
    const { id } = req.params;
   



    addjobSchemma
        .findByIdAndUpdate(id, { status: "approved" }, { new: true })
        .exec()
        .then((data) => {
            if (!data) {
                return res.status(404).json({
                    msg: 'User not found',
                });
            }

            res.status(200).json({
                msg: 'Application approved',
                data: data,
            });
        })
        .catch((err) => {
            console.error('Error:', err);
            res.status(500).json({
                msg: 'Error occurred while updating the application status',
                error: err,
            });
        });
};
//
const jobrejected = (req, res) => {
  const { id } = req.params;
 



  addjobSchemma
      .findByIdAndUpdate(id, { status: "Rejected" }, { new: true })
      .exec()
      .then((data) => {
          if (!data) {
              return res.status(404).json({
                  msg: 'User not found',
              });
          }

          res.status(200).json({
              msg: 'Application rejected',
              data: data,
          });
      })
      .catch((err) => {
          console.error('Error:', err);
          res.status(500).json({
              msg: 'Error occurred while updating the application status',
              error: err,
          });
      });
};
//job view
const viewappliedjob = (req, res) => {
    addjobSchemma
      .find().populate('userId').populate('jobId')
      .exec()
      .then((data) => {
        res.json({
          status: 200,
          msg: "Job listed successfully",
          datas: data,
        });
      })
      .catch((err) => {
        res.json({
          msg: "error occurred",
          status: 400,
          error: err,
        });
      });
  };



module.exports={job,applied,jobapproval,viewappliedjob,jobrejected}