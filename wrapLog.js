// Create a function called wrapLog() that takes in a function
// (callback) and a string (name) and returns a function that
// does the same thing as callback but also logs the name,
// input parameters, and return value of the callback function.

var wrapLog = function (callback, name) {
  return function(a,b) {
    console.log(name + "(" + a + "," + b + ") ==> " + callback(a,b))
  }
};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5