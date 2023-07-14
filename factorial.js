// Problem - Given an integer "n", find the factorial of tha integer
// n=4 = 4*3*2*1=24

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

factorial(3); //6
factorial(4); //24
factorial(5); //120
factorial(6); //720

//Big O=O(n)
