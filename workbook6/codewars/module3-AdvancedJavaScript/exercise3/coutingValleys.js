//* You need count how many valleys you will pass. Start is always from zero level.
//* Every time you go down below 0 level counts as an entry of a valley,
//* and as you go up to 0 level from valley counts as an exit of a valley
//* One passed valley is equal one entry and one exit of a valley.

function countingValleys(path) {
  let level = 0;
  let valleys = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      level++;
      if (level === 0) {
        valleys++;
      }
    } else if (path[i] === "D") {
      level--;
    }
  }
  return valleys;
}