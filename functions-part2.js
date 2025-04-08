function squared(num){
    return num * num
}

  console.log(squareNumber(4)); // Expected: 16

  ///////////////////////////////////////////////
  
function repeatString(str) {
    let repeatedString = "";
    for (let i = 0; i < 3; i++) {
      repeatedString += str;
    }
    return repeatedString;
}

  console.log(repeatString("Hello")); // Expected: "HelloHelloHello"

  ////////////////////////////////////////////////
  
function scopingData() {
    let hello = "Hello";
      function world() {
      return `${hello} World`;
    }
      return world();
}
  
  console.log(scopingData()); // Expected: "Hello World"

  //////////////////////////////////////////////////
  
function reverseString(str) {
    return str.split("").reverse().join("");
}

  console.log(reverseString("Hello")); // Expected: "olleH"

  //////////////////////////////////////////////////
  
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

  console.log(randomNumber()); // Expected: A random number between 1 and 10