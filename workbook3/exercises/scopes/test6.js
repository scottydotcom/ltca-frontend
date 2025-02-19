"use strict";
// whats the output
let a = 4;
function test6() {
  let a = 7;
  function again() {
    let a = 8;
    console.log("a = " + a);
  }
  again();
  console.log("a = " + a);
}
test6();
console.log("a = " + a);
// a = 4 is the global variable
// test6() is called and has a local variable a = 7
// again() is called with a = 8
// console.log is called with variable of a = 4