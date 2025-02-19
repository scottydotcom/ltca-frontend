// sample inputs
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.0;
// calculations
var totalDue = foodCost + tax + tip;
// output

// console.log("The total due is " + totalDue);

console.log("Food cost is " + foodCost + " and tax is " + tax);
// console.log("Tip is " + tip);
console.log("Tip is " + tip.toFixed(2));
console.log("Total Due is " + totalDue);

var tipPercentage = 8;
var findTip = (totalDue * tipPercentage) / 100;

console.log("The tip amount is " + findTip.toFixed(2));
