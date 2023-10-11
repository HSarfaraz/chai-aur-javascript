//think you are asking user to register, so creating an user object

const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website `);
    // console.log(this);
  }
};

// user.welcomeMessage();
// user["username"] = "sam"
// user.welcomeMessage();

// console.log(this);

//Not able to access this keyword in normal function
/*
function chai(){
    let username = "hitesh"
    console.log(this.username);
}
chai();
*/

//Not able to access this keyword in function expression
/*
const chai = function(){
    let username = "Hitesh"
    console.log(this.username);
}
chai();
*/

// Arrow function
/*
const chai = () => {
    let username = "Hitesh"
    console.log(this.username);
}
chai();
*/

// arrow function with return, or explicitly return
/*
const addTwo = (num1, num2) => {
    return num1 + num2;
}
*/

// arrow function with implicit return
// const addTwo = (num1, num2) => num1 + num2;

// arrow function with paranthesis
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(5, 6));

// arrow function with object return using implicit return
const sampleaddTwo = (num1, num2) => ({ username: "hitesh" });
console.log(sampleaddTwo(3, 4));
