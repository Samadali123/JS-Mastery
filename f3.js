// Rest Parameters in JavaScript
// - Allows a function to accept any number of arguments as an array
// - Uses the spread operator (...) in function parameters
// - Useful for functions that need variable number of arguments

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // Output: 15




// default paramters when arhuments dont passed these deafult ones used

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet("Samad");  // Output: Samad
greet(); // default value :Guest



// Arguments in fucntions 
function order(drink, size) {
    console.log(`You ordered a ${size} ${drink}.`);
}

order("Coffee", "Large");




// Spread operators in js

// The spread operator (...) is used to "spread" array elements into individual arguments
const numbers = [10, 20, 30];  // Array of 3 numbers

// Function that takes 3 separate parameters
function multiplyThree(a, b, c) {  // Renamed to avoid conflict
    return a * b * c;  // Multiplies all three numbers together
}

// The spread operator expands numbers array into individual arguments:
// multiply(...numbers) is equivalent to multiply(10, 20, 30)
console.log(multiplyThree(...numbers));  // Output: 6000 (10 * 20 * 30)





// Classic or Fucntion statement fucntions
function classicFunction() {
    console.log("I'm a classic function.");
}

classicFunction();




// Nested fucntions fnc inside fucntions
function outer() {
    console.log("Outer function");

    function inner() {
        console.log("Inner function");
    }

    inner();
}

outer();




// IIfe immediatelt invoked fucntion expression call itself 
(function() {
    console.log("IIFE executed!");
})();





// Arrow functions

// Single parameter with implicit return
const square = x => x * x;
console.log(square(5)); // Output: 25

// Multiple parameters with implicit return 
const multiplyTwo = (a, b) => a * b;  // Renamed to avoid conflict
console.log(multiplyTwo(4, 5)); // Output: 20

// Multiple parameters with explicit return
const add = (a, b) => {
    return a + b;
};
console.log(add(3, 4)); // Output: 7




// Anonymous fucntions and fucntion exprsssion and first class fucntions

const greet = function(name) {
    return `Hello, ${name}`;
};

console.log(greet("Samad"));






//Higer order fucntions when fnc acdcept a fnc in parameter or return another fucntions inside it

function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function showMessage() {
    console.log("Welcome to JavaScript!");
}

greetUser("Samad", showMessage);





// Calback fucntions
// A callback function is simply a function that gets passed into another function as an argument
// Here's a simple example:

// This function takes a number and a function as parameters
function process(num, callback) {
    // It then calls the passed function with the number
    return callback(num);
}

// This is a simple function that squares a number
function squareNum(n) {  // Renamed to avoid conflict
    return n * n;
}

// Here we call process() with:
// 1. The number 5
// 2. The square function as the callback
// It will run square(5) which returns 25
console.log(process(5, squareNum));  // Output: 25




 
// first class fucntions
const sayHello = function() {
    return "Hello!";
};

console.log(sayHello()); // Output: Hello!




// pure fucntions 
// A function that always returns the same output for the same input and does not chnage any global value 

function add(a, b) {
    return a + b;
}

console.log(add(3, 3)); // Output: 6



// Impure fucntions 
// A function that modifies external variables or has side effects.


let count = 0;

function increment() {
    count++;
}

increment();
console.log(count);  // Output: 1 (modifies `count`)
