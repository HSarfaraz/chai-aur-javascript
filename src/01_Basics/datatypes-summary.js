//primitive
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 2323232323232323232323232n;

//Reference (Non-primitive datatype)
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "sarfaraz",
  age: 17
};

const myFunction = function () {
  console.log("Hello world");
};

// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myFunction);

let myYoutubeName = "hiteshchoudharydotcom";
let anothername = myYoutubeName;
anothername = "chaiaurcode";
console.log(myYoutubeName);
console.log(anothername);

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "hitesh";
console.log(userOne.email);
console.log(userTwo.email);
