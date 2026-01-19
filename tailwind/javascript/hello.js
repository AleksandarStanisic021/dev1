"use strict";

const username = "sasa";
console.log(`hello ${username}`);

const user = {
  name: "sasa",
  age: 18,
};

// Use destructuring for cleaner property access
const { name, age } = user;
console.log(name);
console.log(age);

// Update property (const allows property modification, just not reassignment of the variable itself)
user.age = 20;

// Fixed: 'sizeof' is not a built-in JavaScript function.
// Using 'typeof' to check the data type, or simply logging the value.
console.log(typeof user.age); // Output: "number"
console.log(typeof null); // Output: 20
