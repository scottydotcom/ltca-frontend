// exercise 1
function displayMailingLabel(name, address, city, state, zip) {
  console.log(`
  ${name}
  ${address}
  ${city}, ${state} ${zip}`);
}
displayMailingLabel("Scotty", "999 Hamster St", "Boogie Town", "NYC", "99999");

//exercise 
function displayMailingLabel(name, address, city, state, zip) {
  let mailingAddress = "Address " + "\n" + name + "\n" + address + "\n" + city + ", " + state + " " + zip; 
  console.log(mailingAddress);
}
let someName = "scott";
let someAddress = "999 hamster St";
let someCity = "boogie town";
let someState = "ny";
let someZip = '99999';

let otherName = "bob";
let otherAddress = "grassland";
let otherCity = "lumby";
let otherState = "rs";
let otherZip = '00009';
displayMailingLabel(someName, someAddress, someCity, someState, someZip);
displayMailingLabel(otherName, otherAddress, otherCity, otherState, otherZip);

console.log();

//exercise 2
function addNumbers (num1, num2){
  let sum = num1 + num2;
    console.log(sum)
}

let x = 100;
let y = 72;

addNumbers(x, y)
addNumbers(99, 100)

console.log();

// exercise 3
function displayReceipt(totalDue, amountPaid) {
  let changeDue = amountPaid - totalDue;
  if (amountPaid < totalDue) {
    console.log(`Total Due: $${totalDue}\nAmount Paid: $${amountPaid}\nYou need to pay an additional $${totalDue - amountPaid}.`);
  } else {
    console.log(`Total Due: $${totalDue}\nAmount Paid: $${amountPaid}\nChange Due: $${changeDue}`);

  }
}
let bill = 550;
let pay = 550;
displayReceipt(100, 90);
console.log();
displayReceipt(100, 110)
console.log();
displayReceipt(bill, pay);