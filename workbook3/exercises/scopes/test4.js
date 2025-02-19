"use strict";
// whats the output
let a = 4;
function test4() {
  let a = 7;
  console.log("a = " + a);
}
test4();
console.log("a = " + a);
// returns error because let a = 4; is global and let a = 7 is local