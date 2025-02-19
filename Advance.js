// Advanced JavaScript Concepts
// ==========================

// 1. Error Handling with Async-Await Array Pattern
// ----------------------------------------------
// Modern approach to handle errors in async operations using array destructuring
// Returns [error, data] pair instead of using try-catch blocks

async function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => [null, data])    // Success case: [null, responseData]
    .catch(err => [err, null]);    // Error case: [error, null]
}

// Example Usage:
async function getData() {
  const [error, data] = await fetchData('https://api.example.com/data');
  
  if (error) {
    console.error('Error fetching data:', error.message);
    return;
  }
  
  console.log('Data retrieved:', data);
}

// 2. Performance Optimization Techniques
// -----------------------------------

// A. Throttling
// Limits function execution to once per specified time interval
function throttle(callback, limit) {
  let waiting = false;
  return function(...args) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// Example:
const throttledScroll = throttle(() => {
  console.log('Scroll event throttled');
}, 1000);

// B. Debouncing
// Delays function execution until after a period of inactivity
function debounce(callback, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

// Example:
const debouncedSearch = debounce((searchTerm) => {
  console.log('Searching for:', searchTerm);
}, 500);

// 3. JSON Operations
// ----------------

// A. JSON Parsing (String to Object)
const jsonToObject = () => {
  const jsonString = '{"name": "John", "age": 30}';
  try {
    const obj = JSON.parse(jsonString);
    console.log('Parsed object:', obj.name); // John
  } catch (error) {
    console.error('Invalid JSON string:', error.message);
  }
};

// B. JSON Stringification (Object to String)
const objectToJson = () => {
  const user = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music'],
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  const jsonString = JSON.stringify(user, null, 2); // Pretty print with 2 spaces
  console.log('Stringified JSON:', jsonString);
};

// Best Practices Summary:
// 1. Use array pattern for cleaner async error handling
// 2. Implement throttling for high-frequency events
// 3. Use debouncing for input-dependent operations
// 4. Always handle JSON parsing errors
// 5. Format JSON strings for readability when debugging

// Note: These patterns help create more maintainable and performant applications