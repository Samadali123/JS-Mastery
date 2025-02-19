// JavaScript Object-Oriented Programming (OOP) Complete 

// ==========================================
// Step 1: Basic Objects and Properties
// ==========================================

// Creating a simple object using object literal notation
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  // Method inside object
  displayInfo() {
    console.log(`This is a ${this.year} ${this.brand} ${this.model}`);
  }
};

// Accessing object properties
console.log(car.brand); // Toyota
car.displayInfo(); // This is a 2020 Toyota Corolla

// ==========================================
// Step 2: Classes in JavaScript (ES6)
// ==========================================

// Basic class definition
class Person {
    // through this objects can be made agaian nd again
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Class method
  greet() {
    console.log(`Hi! I'm ${this.name} and I'm ${this.age} years old`);
  }
}

// Creating an object from class
const person1 = new Person("John", 25);
person1.greet(); // Hi! I'm John and I'm 25 years old


// ALso explain just fucntions which is a constructor we call fucntion by new keyword

function Person2(name, age) {
    this.name = name;
    this.age = age;
    // Adding a method to the constructor function
    this.greet = function() {
        console.log(`Hi! I'm ${this.name} and I'm ${this.age} years old`);
    };
}

const human = new Person2("Syed Samad Ali", 22);


// ==========================================
// Step 3: Inheritance
// ==========================================

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some sound");
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  // Override parent method
  makeSound() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Woof!

// ==========================================
// Step 4: Encapsulation using Private Fields and have public methods to use it in a controled way
// ==========================================

class BankAccount {
  // Private field (only accessible within class)
  #balance; // #for private vairable in js

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Public methods to access private field
  getBalance() {
    return this.#balance;
  }

  AddBalane(amount){
    return this.#balance+=amount;
  }

  deposit(amount) {
    this.#balance += amount;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000

// ==========================================
// Step 5: Getters and Setters
// ==========================================

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter
  get area() {
    return this._width * this._height;
  }

  // Setter
  set width(value) {
    if (value > 0) {
      this._width = value;
    }
  }
}

const rect = new Rectangle(5, 3);
console.log(rect.area); // 15

// ==========================================
// Step 6: Static Methods
// ==========================================

class MathOperations {
  // Static method (called on class itself, not instances)
  static add(x, y) {
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

console.log(MathOperations.add(5, 3)); // 8
console.log(MathOperations.multiply(4, 2)); // 8

// ==========================================
// Step 7: Method Chaining
// ==========================================

class Calculator {
  constructor() {
    this.value = 0;
  }

  add(n) {
    this.value += n;
    return this;
  }

  subtract(n) {
    this.value -= n;
    return this;
  }

  getResult() {
    return this.value;
  }
}

// Chain multiple operations
const calc = new Calculator();
const result = calc.add(5).subtract(2).add(3).getResult();
console.log(result); // 6

// ==========================================
// Quick Revision
// ==========================================
/*
1. Object Creation:
   - Object literals: {}
   - Classes: class keyword
   -using function to make constructor using this keyword
   
2. Important Keywords:
   - new: Create object instances
   - extends:for inheritance
   - super: Call parent methods of which class you inherited 
   - this: Reference current instance
   
3. Key Concepts:
   - Encapsulation: Private fields (#)
   - Inheritance: extends keyword
   - Polymorphism: Method overriding
   - Static methods: Shared class methods
*/

// Practice Exercises:
/*
1. Create a basic class with properties and methods
2. Implement inheritance between two classes
3. Use private fields for encapsulation
4. Create getters and setters
5. Implement static methods
6. Try method chaining
*/


class Coding {
         constructor(name,lanaguage){
            this.name = name;
            this.lanaguage = lanaguage;
         }

         static Say(){
              return  `${name} is Good at  ${lanaguage} coding langauge`
         }
}

const samad = new Coding("Samad", "JavaScript")
console.log(Coding.Say());




// Parent class
class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getInfo() {
        return `This is a ${this.year} ${this.brand}`;
    }
}

// Child class inheriting from Vehicle
class Car extends Vehicle {
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }

    getFullInfo() {
        return `${this.getInfo()} ${this.model}`;
    }
}

// Create and use the inherited classes
const myCar = new Car("Toyota", 2023, "Camry");
console.log(myCar.getFullInfo()); // This is a 2023 Toyota Camry





// Example of private fields for encapsulation
class BankAccount {
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Public methods to access private field
    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return true;
        }
        return false;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return true;
        }
        return false;
    }
}

// Using the BankAccount class
const accounts = new BankAccount(1000);
console.log(accounts.getBalance()); // 1000
account.deposit(500);
console.log(accounts.getBalance()); // 1500
account.withdraw(200);
console.log(accounts.getBalance()); // 1300



// Example of method chaining
class TextProcessor {
    constructor() {
        this.text = "";
    }

    addText(str) {
        this.text += str;
        return this;
    }

    removeSpaces() {
        this.text = this.text.replace(/\s+/g, ' ').trim();
        return this;
    }

    capitalize() {
        this.text = this.text.toUpperCase();
        return this;
    }

    getResult() {
        return this.text;
    }
}

// Using method chaining
const processor = new TextProcessor();
const result2 = processor
    .addText("  hello  ")
    .addText("  world  ")
    .removeSpaces()
    .capitalize()
    .getResult();

console.log(result2); // "HELLO WORLD"