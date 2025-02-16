// JavaScript Data Types

/*
Data types in JavaScript can be divided into two categories:

1. Primitive Data Types
   - Stored directly in memory
   - Passed by value (copying the actual value)
   - Examples: number, string, boolean, undefined, null, symbol

2. Reference Data Types
   - Stored by reference (pointer to location in memory)
   - Passed by reference (copying the reference/address)
   - Examples: object, array, function
*/

// Primitive Data Types:

// 1. Number - Both integers and floating-point numbers
let age = 25;            // Integer
let price = 99.99;       // Floating-point

// 2. String - Text data
let name = "John";       // Double quotes
let message = 'Hello';   // Single quotes
let template = `Value: ${price}`; // Template literal

// 3. Boolean - true or false
let isActive = true;
let isLoggedIn = false;

// 4. Undefined - Variable declared but not assigned a value
let undefinedVar;

// 5. Null - Intentional absence of any object value
let emptyValue = null;

// 8. Symbol - Unique identifier
let symbol = Symbol("description");

// Reference Data Types:

// 6. Object - Collection of key-value pairs
let person = {
    name: "John",
    age: 25,
    isStudent: true
};

// 7. Array - Ordered collection of values (actually an object)
let colors = ["red", "green", "blue"];

// Demonstrating primitive vs reference behavior
let num1 = 10;
let num2 = num1;    // Primitive: creates a new copy
num1 = 20;          // num2 remains 10

let obj1 = { value: 10 };
let obj2 = obj1;    // Reference: points to same object
obj1.value = 20;    // obj2.value is also 20

// Check types using typeof operator
console.log(typeof age);        // "number"
console.log(typeof name);       // "string"
console.log(typeof isActive);   // "boolean"
console.log(typeof person);     // "object"
console.log(typeof colors);     // "object" (arrays are objects)
console.log(typeof undefinedVar); // "undefined"
console.log(typeof null);       // "object" (this is a known JavaScript quirk)
console.log(typeof symbol);     // "symbol"
