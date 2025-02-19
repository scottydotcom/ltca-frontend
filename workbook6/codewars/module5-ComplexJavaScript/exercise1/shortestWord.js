//* Simple, given a string of words, return the length of the shortest word(s).

function findShort(s) {
  let words = s.split(" ");
  let shortestWordLength = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWordLength) {
      shortestWordLength = words[i].length;
    }
  }
  return shortestWordLength;
}