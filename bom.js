// Browser Object Model (BOM) and Web APIs

// ========================================
// 1. Browser Object Model (BOM)
// ========================================
// BOM allows JavaScript to interact with browser window components
// Main objects: window, navigator, history, location, document

// -----------------------------------------
// 1.1 Window Object
// -----------------------------------------
// The window object represents browser window and provides core functionality

console.log(window)
// Examples of window object usage:
console.log(window.innerWidth);  // Get window width
console.log(window.innerHeight); // Get window height
window.alert("Hello!");// Show alert message

// -----------------------------------------
// 1.2 Navigator Object  
// -----------------------------------------
// Provides information about the browser environment

console.log(navigator)
// Examples of navigator object:
console.log(navigator.userAgent);   // Get browser details
console.log(navigator.language);    // Get browser language
console.log(navigator.onLine);      // Check if browser is online

// -----------------------------------------
// 1.3 History Object
// -----------------------------------------
// Allows navigation through browser history

// Examples of history navigation:
console.log(window.history.back());     // Go back one page
console.log(window.history.forward());  // Go forward one page

// -----------------------------------------
// 1.4 Location Object
// -----------------------------------------
// Manages URL and navigation

console.log(window.location)
// Examples of location usage:
console.log(window.location.href);      // Get current URL
console.log(window.location.hostname);  // Get domain name
console.log(window.location.pathname);  // Get URL path

// Redirect example (commented to prevent accidental navigation):
// window.location.href = "https://www.google.com";

// -----------------------------------------
// 1.5 Document Object
// -----------------------------------------
// Part of DOM - allows HTML manipulation

// Examples of document manipulation:
console.log(document.body.style.backgroundColor = "lightblue"); // Change page background
console.log(document.title);  // Get page title

// ========================================
// 2. Storage APIs
// ========================================

// -----------------------------------------
// 2.1 Local Storage
// -----------------------------------------
// Permanent storage until manually cleared

console.log(localStorage)
// Local Storage examples:
console.log(localStorage.setItem("username", "JohnDoe"));    // Save data
console.log(localStorage.getItem("username"));               // Get data
console.log(localStorage.removeItem("username"));            // Remove item
console.log(localStorage.clear());                          // Clear all data

// -----------------------------------------
// 2.2 Session Storage
// -----------------------------------------
// Temporary storage (cleared when browser closes)

console.log(sessionStorage)
// Session Storage examples:
console.log(sessionStorage.setItem("sessionKey", "12345"));  // Save data
console.log(sessionStorage.getItem("sessionKey"));           // Get data
console.log(sessionStorage.removeItem("sessionKey"));        // Remove item
console.log(sessionStorage.clear());                         // Clear all data

// -----------------------------------------
// 2.3 Cookies
// -----------------------------------------
// Small data pieces with expiration dates

// Cookie examples:
// Set cookie with expiration
document.cookie = "user=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT";

// Read all cookies
document.cookie;  // Returns all cookies as string

// ========================================
// 3. Web APIs
// ========================================

// -----------------------------------------
// 3.1 Fetch API
// -----------------------------------------
// Modern way to make HTTP requests

// Fetch example:
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())         // Parse JSON response
    .then(data => console.log(data))          // Use the data
    .catch(error => console.log("Error:", error));

// -----------------------------------------
// 3.2 Geolocation API
// -----------------------------------------
// Get user's location (requires permission)
console.log(navigator.geolocation)
// Geolocation example:
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
    });
} else {
    console.log("Geolocation not supported");
}

// ========================================
// Summary of Key Concepts:
// ========================================
// 1. BOM - Browser interaction (window, navigator, history, etc.)
// 2. Storage - localStorage, sessionStorage, cookies
// 3. Web APIs - Fetch, Geolocation, etc.
// 
// Note: Some examples are commented to prevent accidental execution
// Use carefully in production code
