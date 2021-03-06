const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema ({
  userName: String,
  testName: String,
  complexity: String,
  elapsedTime: Number,
  numberOfCases: Number,
  score: Number,
  testId: {type: Schema.Types.ObjectId, ref: "Test"},  
  answers: Array
},
{
  timestamps: true
});


const Result = mongoose.model("Result", resultSchema);

module.exports = Result;