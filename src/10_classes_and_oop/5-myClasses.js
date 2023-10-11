// After ES6

//class is the keyword in javascript
// we can add properties and functions here
//constructor is called when object is initialised from class with the help of new keyward

/* class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

//create the new instance
const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
 */

//------------------------- Behind the scene---------------------------------
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

//can inject the properties
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
