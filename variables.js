//Variables and Keywords in JavaScript (var, let, const)

var name = "Samad";  // Function-scoped (avoid using)
let age = 25;        // Block-scoped, can be reassigned
const PI = 3.14;     // Block-scoped, CANNOT be reassigned

age = 26;  // ✅ Allowed
// PI = 3.1415;  ❌ Error: Assignment to constant variable

// console.log(name, age, PI);
console.table([name,age,PI]);




