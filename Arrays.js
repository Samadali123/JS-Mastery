// Arrays in js
// Arrays are used to store multiple values in a single variable


const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);


const cars = ["BMW", "Tesla", "Audi"];
console.log(cars[0]);  // Output: BMW
console.log(cars[2]);  // Output: Audi


// fucntions on Arrays

// push to add element at the last
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);  // Output: [1, 2, 3, 4]


// pop remove last element
nums.pop();
console.log(nums);  // Output: [1, 2, 3]


// remove first element
nums.shift();
console.log(nums);  // Output: [2, 3]


// add element at the first
nums.unshift(1);
console.log(nums);  // Output: [1, 2, 3]


// find index of element of array and retruns -1 if not find!
console.log(nums.indexOf(2));  // Output: 1




// array destructuring - Extract values from arrays in tge form of vairables
const [first, second] = ["Red", "Green", "Blue"];
console.log(first);  // Output: Red
console.log(second); // Output: Green



// ✅ filter() - Returns elements that match a condition

const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2]



// ✅ some() - Checks if at least one element satisfies a condition
console.log(nums.some(num => num > 2)); // Output: true



// map() - Creates a new array by transforming elements
const doubled = nums.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6]


// ✅ reduce() - Reduces an array to a single value
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 6


// ✅ spread operator (...) - Expands an array
const newArr = [...nums, 4, 5];
console.log(newArr);  // Output: [1, 2, 3, 4, 5]


// slice() - Extracts part of an array
console.log(nums.slice(1, 3));  // Output: [2, 3]


// ✅ reverse() - Reverses an array
console.log(nums.reverse());  // Output: [3, 2, 1]


// sort() - Sorts an array
const unsorted = [5, 2, 9, 1];
console.log(unsorted.sort());  // Output: [1, 2, 5, 9]


// ✅ join() - Converts array to string
console.log(nums.join("-"));  // Output: "1-2-3"


// toString() - Converts array to string
console.log(nums.toString());  // Output: "1,2,3"
