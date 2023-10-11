const User = {
  _email: "h@hc.com",
  _password: "abc",

  //need to write setters and getter, so that others cant access it.
  get email() {
    return this._email.toUpperCase();
  },

  get password() {
    return this._password.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },

  set password(value) {
    this._password = value;
  }
};

//create User object using factory function
const tea = Object.create(User);
console.log(tea.email);
