//* in this simple assignment you are given a number and have to make it negative.
//* But maybe the number is already negative?

function makeNegative(num) {
  if (num >= 0) {
    return num * -1; // Make positive numbers negative
  } else {
    return num; // Keep negative numbers as they are
  }
}