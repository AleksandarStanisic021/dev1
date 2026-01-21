/*let compouter = {
  brand: "TechBrand",
  getBrand: function () {
    return this.brand;
  },
};

let laptop = {
  __proto__: compouter,
  model: "X1000",
};
Object.getPrototypeOf(laptop); // Accessing the prototype
console.log(laptop.__proto__, laptop.model); // Output: TechBrand X1000
console.log(laptop.getBrand()); // Inherited method

function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.getDetails = function () {
  return this.make + " " + this.model;
};
let myCar = new Car("AutoMaker", "Speedster");
console.log(myCar.getDetails()); // Output: AutoMaker Speedster
Car.prototype.addYear = function (year) {
  this.year = year;
};
myCar.addYear(2022);
console.log(myCar.year); // Output: 2022
console.log(Car.__proto__);

class Animal {
  constructor(name, color) {
    this.#age = 0;
    this.#color = color;
    this.name = name;
  }
  get age() {
    return this.#age;
  }
  set age(value) {
    this.#age = value;
  }
  #age; // Private field
  #color; // Private field
}

Animal.prototype.speak = function () {
  return this.name + " makes a sound.";
};
let dog = new Animal("Buddy", "Red");
dog.age = 15;

console.log(dog.age); // Output: 15

console.log(dog.speak()); // Output: Buddy makes a sound.
console.log(Animal.prototype);
*/
console.log("OOP in JavaScript");

let computer = {
  cpu: "Intel i7",
};
let laptop = {
  ram: "16GB",
};
Object.setPrototypeOf(laptop, computer);

//console.log(laptop.cpu); // Accessing inherited property
//console.log(laptop.__proto__); // Accessing own property

let animal = {
  legs: 4,
};
let dog = {
  name: "Buddy",
};
Object.setPrototypeOf(dog, animal);
//console.log(Object.getPrototypeOf(dog));
//console.log(dog.legs);

let ball = {
  type: "rounded",
};
let soccerBall = {
  brand: "Adidas",
};
Object.setPrototypeOf(soccerBall, ball);
//console.log(soccerBall.type);
//console.log(Object.getPrototypeOf(soccerBall));

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};
let p = new Person("Alice", 30);
//console.log(p.greet());

function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.getDetails = function () {
  return `${this.make} ${this.model}`;
};
Car.prototype.startEngine = function () {
  return "Engine started";
};
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.getDetails());
console.log(myCar.startEngine());
