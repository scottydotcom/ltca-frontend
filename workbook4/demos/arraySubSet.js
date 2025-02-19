"use strict";

let menu = [
  { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
  { id: 2, item: "Burger", category: "Meal", price: 7.29 },
  { id: 3, item: "Salad", category: "Meal", price: 8.29 },
  { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
  { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

//create a new array to hold the matching items
let drinks = [];
//loop through the existing array
for (let index = 0; index < menu.length; index++) {
  //put one element/item in the array into a menuItem variable
  const menuItem = menu[index];
  console.log(menuItem);
  //find matching items
  if (menuItem.category == "Drink") {
    //add matching items to the new array
    drinks.push(menuItem);
  }
}

console.log(drinks);