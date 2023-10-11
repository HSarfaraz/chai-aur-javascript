const user = {
  username: "Hitesh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details from DB");
    // console.log(`Username ${this.username}`);
    console.log(this);
  }
};
/* 
console.log(user["username"]);
console.log(user.getUserDetails()); */

//contructor function<
//here with the help of new keyword, we can create multiple instances
/* const promiseOne = new Promise()
const date = new Date(); */

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const userOne = new User("Hitesh");
const userTwo = new User("ChaiAurCode", 11, false);

console.log(userOne.constructor);
console.log(userTwo);
