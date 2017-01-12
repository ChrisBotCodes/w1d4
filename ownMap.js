var words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const mappedValues = [];
  for (let i = 0; i < array.length; i ++) {
    const current = array[i];
    const result = callback(current);
    mappedValues.push(result);
  }
  return mappedValues;
}

console.log(map(words, function(word) {
  return word.length;
}));