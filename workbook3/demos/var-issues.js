//there are many issues with using var
//so use let or const instead

// 1. You can redeclare a variable with the same name
var i = 5;
var i = 100;
console.log(i);

let i = 5;
let i = 100;
console.log(i);

//2. variables declared with var are hoisted (which is bad and confusing)
firstName = "Nathaniel"; //assignment to variable
console.log(firstName); //use variable
var firstName = "Joe"; //create/declare variable, it gets hoisted up to the top of the file or function

//variables declared with let are not hoisted
firstName = "Nathaniel"; //assignment to variable
console.log(firstName); //use variable
let firstName; //create/declare variable, it DOES NOT get hoisted up to the top of the file or function

//the declaration var firstName; gets hoisted
//the assignment   = "Nathiel" does not get hoisted

//3. you get block scope instead of function scope
//var provides function scope
//let and const provide block scope
//a block is defined using { }
//variable defined using let or const cannot be accessed the block it was declared in