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
console.log(typeof null); // Output: "object"

console.log(2 - 1 + 2); // Output: 3
console.log("keep it simple"); // Output: "keep it simple"
console.log(true && false); // Output: false
console.log(!true); // Output: false
console.log(undefined); // Output: undefined
console.log(NaN); // Output: NaN
console.log(Infinity); // Output: Infinity
console.log(0); // Output: 0`
console.log(user.age); // Output: 20
console.log(null); // Output: null
console.log("sasa"); // Output: "sasa"
console.log(3.14); // Output: 3.14
console.log([]); // Output: []
console.log({}); // Output: {}
console.log(Symbol("id")); // Output: Symbol(id)
console.log(42); // Output: 42

function f1(a) {
  return "hello world" + a;
}

function f2(b) {
  return b;
}

let res = f2(f1(" sasa "));
console.log(res);

function f3(c) {
  return function () {
    return "DO FROM INNER FUNCTION" + c;
  };
}

let r = f3(" sasa");

console.log(r());
