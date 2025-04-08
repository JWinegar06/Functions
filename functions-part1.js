// Challenge 1: String Interpolation
// Goal: Create a function that adds "over the lazy dog" to the end of the input string.
// Error: The function should return "The quick brown fox jumps over the lazy dog".
const fox = "The quick brown fox jumps";
function jumpOverFence(fox) {
    return `${fox} over the lazy dog`
}
jumpOverFence()

// Test Challenge 1
console.log(jumpOverFence (fox)); // Expected: "The quick brown fox jumps over the lazy dog"

/////////////////////////////////////////////////

// Challenge 2: Even or Odd
// Goal: Create a function that returns true if a number is even, false if odd.
// Error: Incorrect true/false return value based on even/odd check.
const isEvenorOdd = num => num % 2 === 0;
function isEvenOrOdd(num) {
    return num % 2 === 0;
}

// Test Challenge 2
console.log(isEvenOrOdd(10)); // Expected: true
console.log(isEvenOrOdd(5));  // Expected: false

//////////////////////////////////////////////////

// Challenge 3: Celsius to Fahrenheit Conversion
// Goal: Convert Celsius to Fahrenheit using the formula (C * 9/5) + 32.
// Error: Incorrect Fahrenheit conversion result.
function celsiusToFahrenheit(celsiusNumber) {
    const fahrenheit = celsiusNumber * 9/5 + 32;
    return fahrenheit;
}

// Test Challenge 3
console.log(celsiusToFahrenheit(30)); // Expected: 86
console.log(celsiusToFahrenheit(0));  // Expected: 32



// Challenge 4: Find Maximum Number in Array
// Goal: Find the largest number in an array.
// Error: Incorrect maximum number returned.
const arr = [1, 2, 3, 4, 5];
function findMaxNumber(arr) {
    return Math.max(...arr);
}
console.log(Math.max(...arr));

// Test Challenge 4
console.log(findMaxNumber([1, 2, 3, 4, 5])); // Expected: 5

/////////////////////////////////////////////////

// Challenge 5: Asynchronous "Hello World"
// Goal: Log "Hello World" to the console after 2 seconds.
// Error: "Hello World" not logged or logged immediately, not after 2 seconds.
setTimeout(() => console.log("Hello World"), 2000);
function sayHelloWorld() {
  }
console.log()

// Test Challenge 5
sayHelloWorld(); // Expected: "Hello World" logged after 2 seconds