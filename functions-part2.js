// increased_challenges.js

// Challenge 1: Square a Number
// Goal: Create a function that squares a given number.
// Error: Incorrect squared result.
function squareNumber(num) {
    // Your code here (Hint: Use Math.pow(num, 2) or num * num)
    // Example: return num * num;
  }
  // Test Challenge 1
  console.log(squareNumber(4)); // Expected: 16
  
  // Challenge 2: Repeat String 3 Times
  // Goal: Create a function that repeats a string three times using a loop.
  // Error: Incorrect repeated string or incorrect number of repetitions.
  function repeatString(str) {
    // Your code here (Hint: Use a loop to concatenate the string 3 times)
    // Example: let result = ""; for (let i = 0; i < 3; i++) { result += str; } return result;
  }
  // Test Challenge 2
  console.log(repeatString("Hello")); // Expected: "HelloHelloHello"
  
  // Challenge 3: Scoped Variables and String Return
  // Goal: Create a function with scoped variables and return a specific string.
  // Error: Incorrect string returned or scoping issues.
  function scopingData() {
    // Your code here (Hint: Use nested functions or block scope to manage variables)
    // Example: let message = "Hello"; function inner() { return message + " World"; } return inner();
  }
  // Test Challenge 3
  console.log(scopingData()); // Expected: "Hello World"
  
  // Challenge 4: Reverse a String
  // Goal: Create a function that reverses a given string.
  // Error: Incorrect reversed string.
  function reverseString(str) {
    // Your code here (Hint: Use split, reverse, and join methods)
    // Example: return str.split("").reverse().join("");
  }
  // Test Challenge 4
  console.log(reverseString("Hello")); // Expected: "olleH"
  
  // Challenge 5: Random Number Between 1 and 10
  // Goal: Create a function that returns a random number between 1 and 10 (inclusive).
  // Error: Random number outside the 1-10 range or not a number.
  function randomNumber() {
    // Your code here (Hint: Use Math.random() and Math.floor())
    // Example: return Math.floor(Math.random() * 10) + 1;
  }
  // Test Challenge 5
  console.log(randomNumber()); // Expected: A random number between 1 and 10