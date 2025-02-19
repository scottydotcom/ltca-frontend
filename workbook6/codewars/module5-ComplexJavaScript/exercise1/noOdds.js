//* Write a small function that returns the values of an array that are not odd.

function noOdds(values) {
  return values.filter(function (val) {
    return val % 2 === 0;
  });
}