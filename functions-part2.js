// Challenge 1: Square a Number
// Goal: Create a function that squares a given number.
// Error: Incorrect squared result.
function squared(num){
    return num * num
}
  
  // Test Challenge 1
  console.log(squareNumber(4)); // Expected: 16

  ///////////////////////////////////////////////
  
  // Challenge 2: Repeat String 3 Times
  // Goal: Create a function that repeats a string three times using a loop.
  // Error: Incorrect repeated string or incorrect number of repetitions.
  function repeatString(str) {
    let repeatedString = "";
    for (let i = 0; i < 3; i++) {
      repeatedString += str;
    }
    return repeatedString;
}

  // Test Challenge 2
  console.log(repeatString("Hello")); // Expected: "HelloHelloHello"

  ////////////////////////////////////////////////
  
  // Challenge 3: Scoped Variables and String Return
  // Goal: Create a function with scoped variables and return a specific string.
  // Error: Incorrect string returned or scoping issues.
  function scopingData() {
    let hello = "Hello";
      function world() {
      return `${hello} World`;
    }
      return world();
}
  
  // Test Challenge 3
  console.log(scopingData()); // Expected: "Hello World"

  //////////////////////////////////////////////////
  
  // Challenge 4: Reverse a String
  // Goal: Create a function that reverses a given string.
  // Error: Incorrect reversed string.
  function reverseString(str) {
    return str.split("").reverse().join("");
}

  // Test Challenge 4
  console.log(reverseString("Hello")); // Expected: "olleH"

  //////////////////////////////////////////////////
  
  // Challenge 5: Random Number Between 1 and 10
  // Goal: Create a function that returns a random number between 1 and 10 (inclusive).
  // Error: Random number outside the 1-10 range or not a number.
  function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

  // Test Challenge 5
  console.log(randomNumber()); // Expected: A random number between 1 and 10