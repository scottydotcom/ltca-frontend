// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// console.log(isLeapYear(1900));

// console.log(isLeapYear(1950));

// console.log(isLeapYear(1999));

// console.log(isLeapYear(2000));

// console.log(isLeapYear(2012));

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
console.log(isLeapYear(1900));

console.log(isLeapYear(1950));

console.log(isLeapYear(1999));

console.log(isLeapYear(2000));

console.log(isLeapYear(2012));

