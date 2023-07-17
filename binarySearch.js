// Binary Search
// Problem - Given a sorted array of 'n' elements and a target element 't', find the index of '4' in the array.
// Return -1 if the target element is not found.
// arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
// arr = [-5, 2, 4, 6, 10], t = 6 -> Should return 3
// arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1
// Pseudocode
// If the array is empty, return -1 as the element cannot be found.
// If the array has elements, find the middle element in the array,
// If target is equal to the middle element, return the middle element index.
// If target is less than the middle element, binary search left half of the array.
// If target is greater than middle element, binary search right half of the array.

const binarySearch = (arr, t) => {
  let lIndex = 0;
  let rIndex = arr.length - 1;

  while (lIndex <= rIndex) {
    let mIndex = Math.floor((lIndex + rIndex) / 2);
    if (t === arr[mIndex]) return mIndex;
    if (t < arr[mIndex]) rIndex = mIndex - 1;
    else lIndex = mIndex + 1;
  }
  return -1;
};

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 2)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big-O O(logn)
