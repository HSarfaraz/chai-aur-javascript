const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

//create a factor function
//const mynewObject = Object.create(null);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//which property to change
Object.defineProperty(chai, "name", {
  // writable: false,
  enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//object is not iteratable by default, we can make object iterable using Object.entries
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} ${value}`);
  }
}
