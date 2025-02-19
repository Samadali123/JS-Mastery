// Error Handling in JavaScript
// A guide to handling errors properly in your code

// What is Error Handling?
// Error handling helps prevent crashes and unexpected behavior in your programs.
// It makes your code more reliable and helps you find bugs.


// 1. Types of Errors in JavaScript
// Synatx Errors,RUntimeerros,TypeErros,Reference Erros,,Logic Erros
// A. Syntax Errors
// These happen when your code has incorrect syntax
console.log("Hello" // Wrong - missing closing parenthesis
console.log("Hello"); // Correct

// B. Runtime Errors 
// These happen when your code runs

// Example 1: Reference Error
console.log(myVar); // Error: myVar doesn't exist

// Example 2: Type Error
let num = 5;
num.toUpperCase(); // Error: numbers don't have this method

// C. Logic Errors
// When your code runs but gives wrong results
let total = 10;
let discount = 5;
// Wrong: adds instead of subtracts
let finalPrice = total + discount; // Gets 15 instead of 5

// 2. How to Handle Errors

// Basic try-catch
try {
  // Put code that might fail here
  let result = 10 / 0;
} catch (error) {
  // Handle the error here
  console.log("Something went wrong:", error.message);
}

// try-catch with finally
try {
  // Try to do something
  let data = JSON.parse("bad data");
} catch (error) {
  // Handle any errors
  console.log("Error:", error.message);
} finally {
  // This always runs
  console.log("Done!");
}

// 3. Creating Your Own Errors

// Simple way
function divide(a, b) {
  if (b === 0) {
    throw new Error("Can't divide by zero!");
  }
  return a / b;
}

// Custom error type
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}

// 4. Handling Async Errors

// With promises
fetch("some-url")
  .then(response => response.json())
  .catch(error => console.log("Failed:", error.message));

// With async/await
async function getData() {
  try {
    let response = await fetch("some-url");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed:", error.message);
  }
}

// Key Points to Remember:
// 1. Always use try-catch for code that might fail
// 2. Give helpful error messages
// 3. Don't ignore errors - handle them properly
// 4. Use finally for cleanup code
// 5. Be extra careful with async code

// Need help with debugging? Let me know!