//The Object.defineProperty() method adds a property or modifies an existing property on an object and returns the object.
let obj = {};

// define a single property of obj object
Object.defineProperty(obj, "property1", {
  value: 789,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(obj.property1); 