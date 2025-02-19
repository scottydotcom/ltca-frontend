let globalVariable = 1; //across all functions and in the outside world

function test1() {
  let functionVariable = 2;
  console.log(functionVariable);
}

function test2() {
  let functionVariable = 2;
  if (1 === 1) {
    let blockVariable = 3;
    console.log(blockVariable);
  }
  //   console.log(blockVariable); not defined
  console.log(functionVariable);
}

test1();
test2();
console.log(globalVariable);
// console.log(functionVariable); not defined
// console.log(blockVariable); not defined