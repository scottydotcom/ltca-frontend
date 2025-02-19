//* A twin prime is a prime number that is either 2 less or 2 more than another prime number
//* for example, either member of the twin prime pair (41, 43). In other words,
//* a twin prime is a prime that has a prime gap of two

//* Your mission, should you choose to accept it, is to write a function that counts the number of sets
//* of twin primes from 1 to n.

//* If n is wrapped by twin primes (n-1 == prime && n+1 == prime)
//* then that should also count even though n+1 is outside the range.

//* Ex n = 10

//* Twin Primes are (3,5) (5,7) so your function should return 2!

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  let sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function twinPrime(n) {
  let count = 0;
  for (let currentNumber = 2; currentNumber < n; currentNumber++) {
    if (isPrime(currentNumber)) {
      let nextNumber = currentNumber + 2;
      if (nextNumber <= n && isPrime(nextNumber)) {
        count++;
      }
    }
  }
  // Check if n is part of a twin prime pair
  if (isPrime(n - 1) && isPrime(n + 1)) {
    count++;
  }
  return count;
}