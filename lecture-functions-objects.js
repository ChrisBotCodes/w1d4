var calculateTotal = function() {
  var total = 0;
  for (var i = 0; i < this.prices.length; i++) {
  total += this.prices[i];
  }
  return total
}

var calculateTotalWithTax = function() {
  var total = 0;
  for (var i = 0; i < this.prices.length; i++) {
  total += this.prices[i];
  }
  return total + total*0.13;
}

var cart = {
  prices: [24, 125.12, 62],
  calculate: calculateTotal //doesnt run the function and get its value, just refers/points to it
};

var total = cart.calculate();
cart.calculate = calculateTotalWithTax //changes the reference value that key "calculate" points to
var totalWithTax = cart.calculate()
console.log(total, totalWithTax);