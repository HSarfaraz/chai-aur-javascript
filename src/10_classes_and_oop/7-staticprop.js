//create class user
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  //asap give the id when user is created
  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "1@phone.com");
console.log(iphone.createId()); // cant allow to acces, as it is static method
