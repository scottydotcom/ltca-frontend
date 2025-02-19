// sample inputs
var foodCost = 79.25;
var tax = 6.54;
var totalDue = foodCost + tax;

var tipPercentage = 8;
var findTip = (totalDue * tipPercentage) / 100;

console.log("The tip amount is " + findTip.toFixed(2));
