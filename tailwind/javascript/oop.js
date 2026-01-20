let compouter = {
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
