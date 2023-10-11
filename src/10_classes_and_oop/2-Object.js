function multiplyByFive(num) {
  return num * 5;
}

multiplyByFive.power = 2;

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

//create a function which increase the score
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

//when a call is happen, it is necessary to understand the context where to go,
//as your mom, dad call, her we understand the context who called, so using this, we can mention the current context
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
