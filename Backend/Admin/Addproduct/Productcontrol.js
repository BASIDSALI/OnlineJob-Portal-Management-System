const adminSchema = require("./Productmodel");
//AddJob
const reg = (req, res) => {
  let registration = new adminSchema({
    category:req.body.category,
    jobname: req.body.jobname,
    companyname: req.body.companyname,
    experience: req.body.experience,
    salary: req.body.salary,
    location: req.body.location,
    note: req.body.note,
    jobdiscription: req.body.jobdiscription,
    keyskills: req.body.keyskills,
    Qualifications: req.body.Qualifications,
  });
  registration
    .save()
    .then((data) => {
      res.json({
        msg: "Success",
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        msg: "error occured",
        err: err,
      });
    });
};


//ListJob
const listjobs = (req, res) => {
  adminSchema
    .find()
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


//ViewJob
const viewproduct = ((req, res) => {
  adminSchema.findById(req.params.id).exec().then((data) => {
      console.log(data);
      res.json({
          status: 200,
          product: data,
          msg: "success"
      })
  }).catch((err) => {
      console.log(err);
      res.json({
          status: 400,
          error: err,
          msg: "error occurred"
      })
  })
})

//delete job
const deletejob = ((req, res) => {
  adminSchema.findByIdAndDelete({ _id: req.params.id }).exec().then((data) => {
      res.json({
          msg: "product deleted",
          status: 200,
          data: data
      }
      )


  }).catch((err) => {
      res.json({
          status: 200,
          msg: "error",
          err: err

      })
  })

})

//jobupdate
const jobdetail = (req, res) => {
    const jobs = {
      category:req.body.category,
      jobname: req.body.jobname,
      companyname: req.body.companyname,
      experience: req.body.experience,
      salary: req.body.salary,
      location: req.body.location,
      note: req.body.note,
      jobdiscription: req.body.jobdiscription,
      keyskills: req.body.keyskills,
      Qualifications: req.body.Qualifications,
    }

    adminSchema.findByIdAndUpdate({_id:req.params.id},jobs,{new:true}).exec()
        .then(data => {
           res.status(200).json({
                data: data,
                msg: "Updated successfully"
            });
        })
        .catch(err => {
            return res.status(500).json({
                err: err,
                msg: "Error occurred"
            });
        });
}


module.exports = { reg ,listjobs,viewproduct,deletejob,jobdetail};
