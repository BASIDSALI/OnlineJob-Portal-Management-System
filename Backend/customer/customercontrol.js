const userSchema=require('./customermodel')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('image')

const reg = (req, res) => {
    let registration = new userSchema({
        image:req.file,
        Firstname: req.body.Firstname,
        dob:req.body.dob,
        email: req.body.email,
        mobno:req.body.mobno,
        gender:req.body.gender,
        country:req.body.country,
        state:req.body.state,
        district:req.body.district,
        pincode:req.body.pincode,
        educationallevel:req.body.educationallevel,
        currentjob:req.body.currentjob,
        password:req.body.password
      
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

  //login
  const login = ((req,res)=>{
    userSchema.findOne({email:req.body.email}).exec().then((data)=>{
        if(!data){
            res.json({
                status:400,
               
                msg:"user not found"
            })
        }
        else if(data.password!==req.body.password){
            res.json({
                status:400,
                msg:"Password Incorrect"
            })
        }
        else{
            res.json({
                status:200,
                 data:data,
                msg:"successfully Login"
            })
        }
    }).catch((err)=>{
       res.json({
        status:500,
        err:err,
        msg:"Error occurred"
       })
        

    })
  })

  //profile
  const viewadress = ((req, res) => {
    userSchema.findById(req.params.id).exec().then((value) => {
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

//profileupdate
const profile = (req, res) => {
    const profilevalue = {
        image: req.file,  
        Firstname: req.body.Firstname,
        email: req.body.email,
        mobno: req.body.mobno,
        gender: req.body.gender,
        country: req.body.country,
        state: req.body.state,
        district: req.body.district,
        pincode: req.body.pincode,
        educationallevel: req.body.educationallevel,
        currentjob: req.body.currentjob,
        password: req.body.password
    }

    userSchema.findByIdAndUpdate({_id:req.params.id},profilevalue,{new:true}).exec()
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

//userview
const viewuser = (req, res) => {
    userSchema
      .find()
      .exec()
      .then((data) => {
        res.json({
          status: 200,
          msg: "User listed successfully",
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

///reset password
const passwordReset = ((req, res) => {
    userSchema.findOne({email: req.body.email}).exec().then((data) => {
        console.log(data);
        if (data) {
            userSchema.updateOne({password: req.body.password}).exec().then((data) => {
                res.json({
                    msg: "password updated success",
                    status: 200,
                    data: data
                })
            }).catch((err) => {
                res.json({
                    msg: "not updated",
                    status: 401,
                    error: err
                })

            })
        }
        else {
            res.json({
                msg: "user not found",
                status: 401
            })
        }
    }).catch((err) => {
        res.json({
            satus: 400,
            msg: "error",
            error: err
        })
    })

})
  module.exports = {reg,login,upload,viewadress,profile,viewuser,passwordReset}
