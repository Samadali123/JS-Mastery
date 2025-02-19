// Asynchronous Programming in JavaScript

// 1. Introduction to Asynchrony in JavaScript
console.log("JavaScript is single-threaded and follows a non-blocking I/O model");
console.log("This means it can perform long-running tasks without stopping execution");

// Example of Synchronous vs Asynchronous Code
// Synchronous Code (Blocking)
console.log("Start");
for (let i = 0; i < 1e9; i++) {} // Simulating heavy computation
console.log("End"); // This runs only after the loop finishes

// Asynchronous Code (Non-blocking) 
console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);
console.log("End"); // Executes before setTimeout completes

// 2. Event Loop in JavaScript
// How JavaScript Handles Asynchronous Code
console.log("JavaScript uses an Event Loop to manage tasks efficiently:");
console.log("1. Call Stack - Executes synchronous code");
console.log("2. Web APIs - Handles async tasks (setTimeout, fetch, etc)");
console.log("3. Task Queue - Stores setTimeout, setInterval, etc");
console.log("4. Microtask Queue - Stores Promises, MutationObserver");

// Event Loop Flow Example
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// 3. Callbacks and Problems
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData((data) => {
  console.log(data); // Prints after 2 sec
});

// Example of Callback Hell
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    console.log("Final Step");
  });
});

// 4. Promises
let promise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Success");
    else reject("Error");
  }, 2000);
});

promise
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 5. Promise Methods
// Promise.race()
Promise.race([
  new Promise((res) => setTimeout(() => res("Fast"), 1000)),
  new Promise((res) => setTimeout(() => res("Slow"), 3000)),
]).then(console.log);

// Promise.all()
Promise.all([
  Promise.resolve("Data 1"),
  new Promise((res) => setTimeout(() => res("Data 2"), 2000)),
]).then(console.log);

// Promise.any()
Promise.any([
  new Promise((_, rej) => setTimeout(() => rej("Fail 1"), 1000)),
  new Promise((res) => setTimeout(() => res("Success"), 2000)),
]).then(console.log);

// Promise.allSettled()
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
]).then(console.log);

// 6. Async/Await
function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("Data Loaded"), 2000));
}

async function getData() {
  console.log("Fetching...");
  let data = await fetchData();
  console.log(data);
}

getData();

// 7. setTimeout & setInterval
setTimeout(() => console.log("Hello after 2s"), 2000);

let count = 0;
let interval = setInterval(() => {
  console.log("Interval: " + count++);
  if (count === 5) clearInterval(interval);
}, 1000);

// 8. Web APIs
// Fetch API Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error: ", err));

// Geolocation API Example  
navigator.geolocation.getCurrentPosition(
  (position) => console.log("Latitude:", position.coords.latitude),
  (error) => console.log("Error:", error.message)
);

// Summary
console.log("Mastering asynchronous JavaScript is crucial for:");
console.log("- Working with APIs");
console.log("- Handling UI events"); 
console.log("- Optimizing performance");