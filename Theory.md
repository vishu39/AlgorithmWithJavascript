<!-- (Part 1) Topics:- -->

1. Algoriths
2. Measuring Performance
3. Time and Space Complexity
4. Big O Notation
5. Math Algo
6. Sort
7. Search
8. Misc Algo and problem solving

<!-- (Part 2) What is algorithm? -->

An algorithm is a set of well-defined instruction to solve a particular problem

-> Algorithm to add two numbers 1) Input i.e. 2 numbers x & y. 2) Algorithm 2.1) Add numbers using +
2.2) Return value 3) sum of x and y

Characteristics:-
Well defined input and output
Each step should be clear and unambigous
Language independent

Why Algorithms?
Learn different techniques to solve the problem efficiently
one problem can solve in different ways using different algo's

<!-- (Part 3) Time and Space complexity -->

We evaluate the performance of an algorithm in terms of an inputs types

Two types of complexity are:-

Time complexity:- Amount of time taken by an algorithm to solve the problem as a fraction of input size is called time complexity

Space Complexity:- Amount of memory taken by an algorithm to run as a fraction of input size

By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.

How to represent time and space complexity?
using Asymptotic Notation:- are mathematical tool to represent time and space complexity

1. Big-O Notation (O-notation) - Worst case complexity
2. Omega Notation (Ω-notation) - Best case complexity
3. Theta Notation (θ-notation) - Average case complexity

<!-- (Part 4) Big-O Notation -->

The worst case complexity of an algorith to represent the Big-O notation
o(n)-Linear Complexity-Fair
o(1)-Constant - Good
O(n2)-Qaudratic-Horrible
3n2+5n+1
O(n3)-cubic
O(logn)-Logrithmic - Good

<!-- (Part 5) Big-O Objects And Array -->

Objects:- It is a collection of a key value pair

Insert-O(1)
Remove-O(1)
Access-O(1)
Search-O(1)
Object.keys-O(n)-returns the array of all the keys
Object.values-O(n) return the array of values
Object.entries-O(n)

Array:- An array is an ordered collection of values const odd=[1,3,5,7,9]
Insert/remove at end-O(1)
Insert/remove at start-O(n) - index has to be reset for every remaining element of the array
Access-O(1)
search-O(n) - as the element can be the last one in the array
Push/pop - O(1)
Shift/Unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

<!-- (Part 6) Big-O Math Algorithm -->

Fibonacci sequence
Factorial of a number
Prime number
Power of two
Recursion
Fibonacci sequence with recursion
Factorial of a number with recursion

<!-- (Part 11) Recursion-->

Recursion is a problem solving technique where the solution is depends on solutions to smaller the instance of the same problem

When a function calls itself

Why?
A great technique to simplify your solution If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful

A few points about recursion
Every recursive solution needs to have a base case - a condition to terminate the recursion. Recursion might simplify solving a problem but it does not always translate to a faster solution. A recursive solution may be far worse compared to an iterative solution

<!-- (Part 14) Search Algorithm-->

Linear Search
Binary Search
Recursive Binary Search
