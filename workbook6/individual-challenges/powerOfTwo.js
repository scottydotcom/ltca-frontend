//* Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language)
//* that determines if a given non-negative integer is a power of two.

function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return n & (n - 1 === 0);
}