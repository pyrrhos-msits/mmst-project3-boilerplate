const numOfCases = 1;          //number of cases in the test
const complexity = "Medium";     //Low, Medium, or High

//const maxCaseComplexity = 3;    

const mongoose = require('mongoose');
const TestCase = require('../models/testCases');
const Test = require('../models/tests');

const dbName = 'IQTTY';
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let test = {   
  testName: "",    
  complexity: "",
  cases: []
};

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//Count tests

//var numberOfTests = Test.countDocuments({}, function (err, count) {
//  console.log("Number of tests stored in DB: " + count);
//});

//Get max testName from DB
let maxTestName = 0;
Test 
.findOne({})
.sort('-testName')   //getting max
.exec(function (err, testMax) {
  maxTestName = (testMax === null) ? 0 : testMax.testName;
  //console.log("TestName: " + maxTestName+1);

  //Get all test cases from DB with the given complexity
  TestCase.find({complexity: complexity})
  .then (docs => {

    //Generate one test 
    createTest(docs);

      //Write it to the DB
      Test.create(test)
      .then(() => {
        mongoose.connection.close();
      });  

  });
});   


function createTest(cases) {
  test.cases = [];
  console.log("Number of cases in DB: " + cases.length);  

  while (test.cases.length < numOfCases) {
    n = Math.floor(Math.random() * cases.length);
    caseId = cases[n]._id;
    cx = cases[n].complexity;
    //validation
    if (test.cases.includes(caseId))
        //|| (maxCaseComplexity === 1 && cx !== "Low")
        //|| (maxCaseComplexity === 2 && cx === "High")) 
        continue;
    test.cases.push(caseId);
  }
 
  test.complexity = complexity; //(maxCaseComplexity === 1) ? "Low" : (maxCaseComplexity === 2) ? "Medium" : "High"; 
  test.testName = maxTestName + 1;
  console.log("Test " + test.testName + " created with " + test.cases.length + " cases");

}

