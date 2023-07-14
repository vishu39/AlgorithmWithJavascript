// Fibonacci sequence

// Problem - Give a number 'n', find the first 'n' elements of the Fibonacci sequence.

// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

// The first two numbers in the sequence are 0 and 1.

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
}

fibonacci(2);
fibonacci(3);
fibonacci(7);

// Calculation not dependent on input size - O(1)
// 1 loop - O(n)
// 2 nested loop - O(n2)
// Input size reduced by half-O(logn)
