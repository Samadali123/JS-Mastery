
// ✅ Object.freeze() - Prevents modification
const obj = { name: "Samad" };
Object.freeze(obj);
obj.name = "Ali"; // ❌ Won't change



// ✅ Object.seal() - Allows modification but prevents adding/removing
Object.seal(obj);
obj.name = "Ali"; // ✅ Allowed
delete obj.name;  // ❌ Not allowed



// objects destructuring
const { name, age } = person;
console.log(name, age);



// ✅ Object Methods
const car = {
    brand: "Tesla",
    getBrand: function() {
        return this.brand;
    }
};

console.log(car.getBrand());  // Output: Tesla




// The this keyword refers to the current object.
const userProfile = {
    username: "coder",
    showName: function() {
        console.log(this.username);
    }
};

userProfile.showName();  // Output: coder
