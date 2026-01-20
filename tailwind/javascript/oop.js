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

console.log(laptop.__proto__); // Output: TechBrand
