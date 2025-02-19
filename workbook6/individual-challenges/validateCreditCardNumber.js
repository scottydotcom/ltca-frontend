//* you will implement the Luhn Algorithm, which is used to help validate credit card numbers
//* Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

//* Here is the algorithm:

//* Double every other digit, scanning from right to left, starting from the second digit (from the right).
//* Another way to think about it is: if there are an even number of digits,
//* double every other digit starting with the first; if there are an odd number of digits,
//* double every other digit starting with the second:

//* If a resulting number is greater than 9,
//* replace it with the sum of its own digits (which is the same as subtracting 9 from it):
//* Sum all of the final digits:
//* Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

function validate(n) {
  // Convert the input number to an array of digits
  let digits = n.toString().split("").map(Number);

  // Initialize a variable to store the sum of the digits
  let sum = 0;

  // Iterate through the digits array in reverse order (from right to left)
  for (let i = digits.length - 1; i >= 0; i--) {
    // Get the current digit
    let digit = digits[i];

    // Check if the digit is at an even position from the right (excluding the last digit)
    if ((digits.length - i) % 2 === 0 && i !== digits.length - 1) {
      // Double the digit
      digit *= 2;

      // If the doubled digit is greater than 9, subtract 9 from it
      if (digit > 9) {
        digit -= 9;
      }
    }

    // Add the processed digit to the sum
    sum += digit;
  }

  // Return whether the sum is divisible by 10 (i.e., the credit card number is valid)
  return sum % 10 === 0;
}