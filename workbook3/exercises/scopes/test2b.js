"use strict";
// whats the output
function test2B() {
  if (1 == 1) {
    let a = 5;
  }
  console.log("a = " + a);
}
test2B();
// returns error because console.log is not declared within the if statement
// move console.log into if statement within the function