// Problem - Given an array of 'n' elements and a target element 't', find the index of 't' in the array.
// Return -1 if the target element is not found.

// arr = [-5, 2, 10, 4, 6], t = 10 -> Should return 2
// arr = [-5, 2, 10, 4, 6], t = 6 -> Should return 4
// arr = [-5, 2, 10, 4, 6], t = 20 -> Should return -1

function linearSearch(arr, t) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === t) return i;
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1

// Big-O = O(n) Linear Time Complexity
