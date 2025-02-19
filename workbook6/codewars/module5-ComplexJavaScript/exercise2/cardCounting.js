//* You will write a card counting function. It will receive a card parameter and increment or decrement
//*  the local count variable according to the card's value (see table). 
//* The function will then return a string with the current count and the string "Bet" if the count is positive
//* or "Hold" if the count is zero or negative. The current count and the player's decision
//*  ("Bet" or "Hold") should be separated by a single space.
//* Example:
//* output: "-3 Hold" | "5 Bet"

let count = 0;

function cc(card) {
  if (card < 2 || card > 9) {
    return count + " Hold"; // Handle invalid inputs
  }

  if (card >= 2 && card <= 6) {
    count++;
  } else if ((card === 10) || (card >= 11 && card <= 14)) {
    count--;
  }

  return count > 0? count + " Bet" : count + " Hold";
}