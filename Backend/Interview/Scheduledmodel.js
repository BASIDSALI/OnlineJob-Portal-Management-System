const mongoose = require("mongoose");
const interviewscheduled = new mongoose.Schema({

  applied_jobs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "applied_jobs",
    required: true,
  },
 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer_details",
  
  },
  venue: {
    type: String,
  },
  date: {
    type: String
  },
  note: {
    type: String,
  },
  time: {
    type: String
  }
});
module.exports = mongoose.model("interview_scheduled", interviewscheduled);
