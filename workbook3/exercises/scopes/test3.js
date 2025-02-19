"use strict";
// whats the output
let a = 4;
function test3() {
  a = 3;
  console.log("a = " + a);
}
test3();
console.log("a = " + a);
// returns error because a is not defined as a variable in the function
//let a = 3; but will still output 4