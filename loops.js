// Loops in js



// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}



// while loop
let num = 1;
while (num <= 5) {
    console.log("Number:", num);
    num++;  // Increment
}



// do while loop
let count = 1;
do {
    console.log("Count:", count);
    count++;
} while (count <= 5);




// ForEach method for itetatring over arrays
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    console.log("Number:", num);
});



// for in loop for iterating over objects
let person = { name: "Samad", age: 25, city: "Bhopal" };

for (let key in person) {
    console.log(key + ":", person[key]); // name: Samad, age: 25, city: Bhopal
}



// for of iterating over arrays and strings 
let fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}




// recursion  in js

function factorial(n) {
    if (n === 1) return 1;  // Base case
    return n * factorial(n - 1);
}

console.log(factorial(5));  // Output: 120




// Break and Continue

for (let i = 1; i <= 5; i++) {
    if (i === 3) break;  // Stop at 3
    console.log(i);
}
// Output: 1 2


for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // Skip 3
    console.log(i);
}
// Output: 1 2 4 5









const loopingConcepts = [
    { Concept: "if-else", ShortDescription: "Conditional branching", Example: "if(condition){...}else{...}" },
    { Concept: "Ternary ? :", ShortDescription: "Shorter if-else", Example: "condition ? true : false" },
    { Concept: "switch", ShortDescription: "Multiple conditions", Example: "switch(value){case x:...}" },
    { Concept: "for loop", ShortDescription: "Fixed iterations", Example: "for(let i=0; i<n; i++)" },
    { Concept: "while loop", ShortDescription: "Condition-based loop", Example: "while(condition){...}" },
    { Concept: "do-while", ShortDescription: "Runs once minimum", Example: "do{...}while(condition)" },
    { Concept: "forEach()", ShortDescription: "Array iteration", Example: "array.forEach(item => {...})" },
    { Concept: "for...in", ShortDescription: "Object properties", Example: "for(let key in obj){...}" },
    { Concept: "for...of", ShortDescription: "Array/string items", Example: "for(let item of array){...}" },
    { Concept: "Recursion", ShortDescription: "Self-calling function", Example: "function f(){f();}" },
    { Concept: "break", ShortDescription: "Exit loop", Example: "break;" },
    { Concept: "continue", ShortDescription: "Skip iteration", Example: "continue;" }
];

console.table(loopingConcepts);