//* You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
//* Note:Returning the pattern is not the same as Printing the pattern.
//* Rule/Note: If n < 1 then it should return "" i.e. empty string. There are no whitespaces in the pattern.
//* example
//* 1
//* 22
//* 333
//* 4444
//* 55555

function pattern(n) {
  if (n < 1) {
    return "";
  }
  var output = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      output += i;
    }
    if (i < n) {
      output += "\n";
    }
  }
  return output;
}