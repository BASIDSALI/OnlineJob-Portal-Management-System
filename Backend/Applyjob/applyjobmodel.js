const mongoose = require("mongoose");
const addjobSchemma = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "job_details",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer_details",
    required: true,
  },
  status: {
    type: String,
    default: "Application Pending",
  }
  
});
module.exports = mongoose.model("applied_jobs", addjobSchemma);
