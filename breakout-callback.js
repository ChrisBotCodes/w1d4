// callback example
// get all even numbers, and double them

function myFilter(inputArray, callback) {
  var output = [];

  inputArray.forEach(function(element) {
    if (callback(element)) {
      output.push(element);
    }
  })
  return output;
}

var myList = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myFilter(myList, function(input) {
  return input % 2 === 0;
  }).map(function(i) { return i*2}))