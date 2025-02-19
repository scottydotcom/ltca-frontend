var numberOfPeople = 38;
var vanSeats = 15;
var vansNeeded = Math.ceil(numberOfPeople / vanSeats);
console.log("You will need " + vansNeeded + " vans");

var vanCost = 250;
var totalCost = vansNeeded * vanCost;
console.log("The total to rent vans needed per day is " + totalCost);

var costPerPerson = totalCost / numberOfPeople;
console.log("The total cost per person is " + costPerPerson.toFixed(2));
