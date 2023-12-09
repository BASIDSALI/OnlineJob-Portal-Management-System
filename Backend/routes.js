const express=require('express')
const routes = express.Router()
var bodyParser = require('body-parser')

const customercontrol=require('./customer/customercontrol')
const usercontrol=require('./customer/customercontrol')
const productcontrol=require('./Admin/Addproduct/Productcontrol')
const applycontrol=require('./Applyjob/applycontrol')
const interviewcontrol=require('./Interview/Scheduledcontrol')


routes.post('/customer/reg',customercontrol.upload,customercontrol.reg)
routes.post('/customer/login',customercontrol.login)
routes.post('/customer/profile/:id',customercontrol.viewadress)
routes.post('/customer/updateprofile/:id',customercontrol.upload,customercontrol.profile)
routes.post('/customer/passwordreset',customercontrol.passwordReset)



//jobapply
routes.post('/customer/jobapplied/:jobid',applycontrol.job)
routes.post('/customer/jobapplied/view/:userid',applycontrol.applied)




routes.post('/admin/addjob',productcontrol.reg)
routes.post('/admin/listjob',productcontrol.listjobs)
routes.post('/admin/deletejob/:id',productcontrol.deletejob)
routes.post('/admin/jobdetail/view/:id',productcontrol.viewproduct)
routes.post('/admin/user/view',customercontrol.viewuser)
routes.post('/admin/jobapplied/appointment/:id',applycontrol.jobapproval)
routes.post('/admin/jobapplied/rejected/:id',applycontrol.jobrejected)
routes.post('/admin/viewappliedjob',applycontrol.viewappliedjob)
routes.post('/admin/interview/schedule/:id',interviewcontrol.interview)
routes.post('/admin/add/interview/schedule/:applied_jobs',interviewcontrol.interview)
routes.post('/admin/view/interviewdetail/:applied_jobs',interviewcontrol.interviewdetail)

routes.post('/admin/job/update/:id',productcontrol.jobdetail)
routes.post('/admin/view/appointusers/:applied_jobs',interviewcontrol.appointusers)










module.exports =routes