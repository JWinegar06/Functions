let fox = "Jumped Over The Lazy Dog";

// Challenge 1: String Interpolation
// README: [Link to Challenge 1]
// Goal: Create a function that adds "Over The Fence" to the end of the input string.
// Error: The function should return "Jumped Over The Lazy Dog Over The Fence".
function jumpOverFence(fox) {
  // Your code here (Hint: Use string interpolation to append "Over The Fence")
  // Example: return `${fox} Over The Fence`;
}

// Test Challenge 1
console.log(jumpOverFence(fox)); // Expected: "Jumped Over The Lazy Dog Over The Fence"

// Challenge 2: Even or Odd
// Goal: Create a function that returns true if a number is even, false if odd.
// Error: Incorrect true/false return value based on even/odd check.
function isEvenOrOdd(num) {
  // Your code here (Hint: Use the modulus operator % to check for remainder when divided by 2)
  // Example: return num % 2 === 0;
}

// Test Challenge 2
console.log(isEvenOrOdd(10)); // Expected: true
console.log(isEvenOrOdd(5));  // Expected: false

// Challenge 3: Celsius to Fahrenheit Conversion
// Goal: Convert Celsius to Fahrenheit using the formula (C * 9/5) + 32.
// Error: Incorrect Fahrenheit conversion result.
function celsiusToFahrenheit(celsiusNumber) {
  // Your code here (Hint: Apply the formula (C * 9/5) + 32)
  // Example: return (celsiusNumber * 9/5) + 32;
}

// Test Challenge 3
console.log(celsiusToFahrenheit(30)); // Expected: 86
console.log(celsiusToFahrenheit(0));  // Expected: 32

// Challenge 4: Find Maximum Number in Array
// Goal: Find the largest number in an array.
// Error: Incorrect maximum number returned.
function findMaxNumber(arr) {
  // Your code here (Hint: Use Math.max(...arr))
  // Example: return Math.max(...arr);
}

// Test Challenge 4
console.log(findMaxNumber([1, 2, 3, 4, 5])); // Expected: 5

// Challenge 5: Asynchronous "Hello World"
// Goal: Log "Hello World" to the console after 2 seconds.
// Error: "Hello World" not logged or logged immediately, not after 2 seconds.
function sayHelloWorld() {
  // Your code here (Hint: Use setTimeout to delay the console.log)
  // Example: setTimeout(() => console.log("Hello World"), 2000);
}

// Test Challenge 5
sayHelloWorld(); // Expected: "Hello World" logged after 2 seconds