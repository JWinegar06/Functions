// array_challenges.js

// Array Challenges 1-5

// Challenge 1: Find Largest Number
// Goal: Find the largest number in an array.
// Error: Incorrect largest number returned.
function findLargestNumber(arr) {
    // Your code here (Hint: Use Math.max(...arr))
    // Example: return Math.max(...arr);
  }
  
  console.log(findLargestNumber([3, 6, 2, 8, 4])); // Expected: 8
  
  // Challenge 2: Remove Duplicates
  // Goal: Remove duplicate elements from an array.
  // Error: Array with duplicates or incorrect unique elements.
  function removeDuplicates(arr) {
    // Your code here (Hint: Use Set to remove duplicates)
    // Example: return Array.from(new Set(arr));
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]
  
  // Challenge 3: Filter Even Numbers
  // Goal: Filter an array to include only even numbers.
  // Error: Array with incorrect even numbers or missing even numbers.
  function filterEvenNumbers(arr) {
    // Your code here (Hint: Use the filter method)
    // Example: return arr.filter(num => num % 2 === 0);
  }
  
  console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Expected: [2, 4]
  
  // Challenge 4 (Optional): Filter Array with Steps (Circular Shift)
  // Goal: Shift the array by a given number of steps, wrapping around.
  // Error: Incorrect shifted array.
  function filterArray(arr, steps) {
    // Your code here (Hint: Use slice and concat methods)
      // Example: return arr.slice(steps).concat(arr.slice(0, steps));
  }
  
  console.log(filterArray([1, 2, 3, 4, 5], 2)); // Expected: [3, 4, 5, 1, 2]
  
  // Challenge 5 (Optional): Rotate Array (Circular Shift in Opposite Direction)
  // Goal: Rotate the array by a given number of steps, wrapping around in the opposite direction.
  // Error: Incorrect rotated array.
  function rotateArray(arr, steps) {
    // Your code here (Hint: Use slice and concat methods)
    // Example: return arr.slice(arr.length - steps).concat(arr.slice(0, arr.length - steps));
  }
  console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Expected: [4, 5, 1, 2, 3]