"use strict";
// whats the output
let a = 4;
function test5() {
  a = 7;
  function again() {
    let a = 8;
    console.log("a = " + a);
  }
  again();
  console.log("a = " + a);
}
test5();
console.log("a = " + a);
// declares 4 as a global viarable and modifies global variable 'a' to 7 within the function
// 8 becomes the local variable
// output will be 8 then 7 then 7