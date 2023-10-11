class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //getter method, it is compulsory to setter and if getter is written
  //getter helps to get the value
  get password() {
    // return this._password.toUpperCase();
    return `${this._password} Hitesh`;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const hitesh = new User("chai@fb.com", "123");
console.log(hitesh.password);
console.log(hitesh.email);
