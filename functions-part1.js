const fox = "The quick brown fox jumps";
function jumpOverFence(fox) {
    return `${fox} over the lazy dog`
}
jumpOverFence()

console.log(jumpOverFence (fox)); // Expected: "The quick brown fox jumps over the lazy dog"

/////////////////////////////////////////////////

const isEvenorOdd = num => num % 2 === 0;
function isEvenOrOdd(num) {
    return num % 2 === 0;
}

console.log(isEvenOrOdd(10)); // Expected: true
console.log(isEvenOrOdd(5));  // Expected: false

//////////////////////////////////////////////////

function celsiusToFahrenheit(celsiusNumber) {
    const fahrenheit = celsiusNumber * 9/5 + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(30)); // Expected: 86
console.log(celsiusToFahrenheit(0));  // Expected: 32

////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];
function findMaxNumber(arr) {
    return Math.max(...arr);
}

console.log(Math.max(...arr));
console.log(findMaxNumber([1, 2, 3, 4, 5])); // Expected: 5

/////////////////////////////////////////////////

setTimeout(() => console.log("Hello World"), 2000);
function sayHelloWorld() {
}
console.log()

sayHelloWorld(); // Expected: "Hello World" logged after 2 seconds