// Insertion Sort

// Problem - Given an array of integers, sort the array.

// const arr = [-6, 20, 8, -2, 4]

// insertionSort(arr) => Should return [-6, -2, 4, 8, 20]

// Pseudocode

// Virtually split the array into a sorted and an unsorted part

// Assume that the first element is already sorted and remaining elements are unsorted

// Select an unsorted element and compare with all elements in the sorted part

// If the elements in the sorted part is smaller than the selected element,
// proceed to the next element in the unsorted part.
// Else, shift larger elements in the sorted part towards the right.

// Insert the selected element at the right index

// Repeat till all the unsorted elements are placed in the right order

const insertionSort = (arr) => {};

const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr);
