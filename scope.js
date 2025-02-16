// ✅ Global Scope
// Accessible anywhere in the program.

let globalVar = "I am global";

function show() {
    console.log(globalVar);  // Accessible
}
show();





// ✅ Function Scope
// Variables declared inside a function are only accessible within that function.

function test() {
    let localVar = "I am local";
    console.log(localVar);
}

test();
console.log(localVar);  // Error: localVar is not defined






// ✅ Closures
// A closure is when a function "remembers" its lexical scope even when
// executed outside that scope. It can access variables from its outer scope
// even after the outer function has finished executing.

function outer() {
    let count = 0;  // This variable is "enclosed" in the closure

    // inner() forms a closure, maintaining access to count
    return function inner() {
        count++;  // Can still access count from outer scope
        console.log(count);
    };
}

// counter gets the inner function with its closure
const counter = outer();
counter(); // Output: 1 (count is preserved between calls)
counter(); // Output: 2 (count keeps incrementing)

// Each call to outer() creates a new closure with its own count
const counter2 = outer(); 
counter2(); // Output: 1 (separate count variable)
