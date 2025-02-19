function twinPrime(n) {
  let count = 0;
  let num = 2;
  let result = [];

  while (count < n) {
    if (isPrime(num) && isPrime(num + 2)) {
      result.push([num, num + 2]);
      count++;
    }
    num++;
  }
  return result;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
const n = 5; // Desired number of twin prime pairs
const twinPrimes = twinPrime(n);
console.log(`Twin primes: [${twinPrimes}]`);