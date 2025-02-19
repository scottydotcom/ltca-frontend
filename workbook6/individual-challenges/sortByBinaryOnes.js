//*  implement a function that sort a list of integers based on it's binary representation.
//* sort the list based on the amount of 1's in the binary representation of each number.
//* if two numbers have the same amount of 1's, the shorter string goes first. (ex: "11" goes before "101" when sorting 3 and 5 respectively)
//* if the strings have the same length, lower decimal number goes first. (ex: 21 = "10101" and 25 = "11001", then 21 goes first as is lower)

function sortByBinaryOnes(list) {
  let binaryOnes = (n) => {
    let binary = n.toString(2);
    return binary.split("1").length - 1;
  };

  return list.sort((a, b) => binaryOnes(b) - binaryOnes(a));
}