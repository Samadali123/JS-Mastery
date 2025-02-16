
// hoisting in js and temporal dead zone

console.log(a);  // undefined (Hoisted but not initialized)
var a = 10;


console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 20;


