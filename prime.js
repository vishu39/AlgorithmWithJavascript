// Prime Number
// Problem - Give a natural number 'n', determine if the number is prime or not
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 4*1)

function prime(n) {
  if (n < 2) return false;
  for (i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(prime(0)); //false
console.log(prime(1)); //false
console.log(prime(2)); //true
console.log(prime(3)); //true
console.log(prime(4)); //false
console.log(prime(5)); //true
