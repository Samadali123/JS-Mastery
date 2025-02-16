// Primitive vs Reference Data Types


let a = 10;
let b = a;  // Copy by value
a = 20;
console.log(b);  // 10 (remains unchanged)


let obj1 = { name: "Samad" };
let obj2 = obj1;  // Copy by reference
obj1.name = "Ali";
console.log(obj2.name);  // Ali (changes in both)

