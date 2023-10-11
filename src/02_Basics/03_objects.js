const mySym = Symbol("key1");

// Object literals
const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Chaudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"]
};

// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

JsUser.greeting();
console.log(JsUser.greeting);
