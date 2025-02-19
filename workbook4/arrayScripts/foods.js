let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];
let subtotal = 0;
for (let i = 0; i < lunch.length; i++){
    subtotal += lunch[i].price
}
let tax = 0.08;
let tip = 0.18;

let taxTotal = subtotal * tax;
let tipTotal = subtotal * tip;
let totalDue = subtotal + tax + tip; 
console.log(`Tax amount: ${taxTotal.toFixed(2)}`);
console.log(`Tip amount: ${tipTotal.toFixed(2)}`);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Total amount: ${totalDue.toFixed(2)}`);