// Objcts

const person = {
    name: "Samad",
    age: 22,
    city: "Bhopal"
};

console.log(person.name); // Output: Samad
console.log(person["age"]); // Output 22


// ✅ Creating Objects
const user = { id: 1, username: "coder" };



//Accesssisng proeprties
console.log(user.username);

// deleting a property in a object
delete user.id;



// Nested objects
const student = {
    name: "John",
    marks: {
        math: 90,
        science: 85
    }
};

console.log(student.marks.math);  // Output: 90



// Traversing keys in objects  using for in loop
for (let key in student) {
    console.log(key, student[key]);
}


// Arrays as object
console.log(typeof []);  // Output: "object"

console.log(Array.isArray([]));  // Output: true
