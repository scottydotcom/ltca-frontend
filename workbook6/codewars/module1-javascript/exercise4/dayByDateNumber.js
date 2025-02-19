//* Write a function that will help you determine the date
//* if you know the number of the day in the year, as well as whether the year is a leap year or not.
//* The function accepts the day number and a boolean value isLeap as arguments,
//* and returns the corresponding date of the year as a string "Month, day".

function getDay(day, isLeap) {
    const daysInMonth = [31, isLeap? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let month = 0;
  while (day > daysInMonth[month]) {
    day -= daysInMonth[month];
    month++;
  }

  return `${monthNames[month]}, ${day}`;
}

console.log(getDay(28, true)); 
console.log(getDay(60, false)); 
