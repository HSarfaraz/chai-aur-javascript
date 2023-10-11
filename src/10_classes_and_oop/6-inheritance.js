class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME Is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); //it will do this, this.username = username;
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

//create the object of teacher
const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse();
chai.logMe();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai === masalaChai);
console.log(chai === Teacher);

console.log(chai instanceof User);
