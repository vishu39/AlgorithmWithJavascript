// Problem - Give a positive integer 'n', determine if the number is a power of 2 or not
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2x
// isPowerOfTwo(1) = true
// isPowerOfTwo(2) = true
// isPowerOfTwo(5) = false

// function powerOfTwo(n) {
//   if (n < 1) return false;
//   while (n > 1) {
//     if (n % 2 !== 0) return false;
//     n = n / 2;
//   }
//   return true;
// }

// console.log(powerOfTwo(1));
// console.log(powerOfTwo(2));
// console.log(powerOfTwo(3));
// console.log(powerOfTwo(4));
// console.log(powerOfTwo(5));

// n=n/2 reducing the size by half
// O(logn)

function powerOfTwoBitwise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(powerOfTwoBitwise(1));
console.log(powerOfTwoBitwise(2));
console.log(powerOfTwoBitwise(3));
console.log(powerOfTwoBitwise(4));
console.log(powerOfTwoBitwise(5));

// O(1)
