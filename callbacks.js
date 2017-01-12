// var name = "some name";
// const name = ''; "constatnt". doesnt let you change 'name'

// array:
// const prices = [];
// prices.push(5); works
// prices.splice(0,1); works
// prices = [5,6]; doesn't work

// objects:
// const person = {};
// person.name = "chris"; works

const calculateTotal = function(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
  total += prices[i];
  }
  return total
}

const calculateTotalWithTax = function(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
  total += prices[i];
  }
  return total + total*0.13;
}

const cartTotal = function(callback){
  const prices = [5, 12, 18];
  return callback(prices);
}

const withoutTax = cartTotal(calculateTotal);
const withTax = cartTotal(calculateTotalWithTax);