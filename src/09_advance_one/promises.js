//creating the promise
const promiseOne = new Promise(function (resolve, reject) {
  //do an async calls like DB Calls, cryptography calls, network related calls
  setTimeout(function () {
    console.log("Aysnc task is complete");
    resolve();
  }, 1000);
});

//consume the promise
promiseOne.then(function () {
  console.log("promise consumed");
});

//------------------- 2nd way of creating the promise directly
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task 2 resolved");
});

//------------------ 3rd way of creating the promise: accessing the data
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Aynsc task 3");
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log("Async task 3 is executed", user);
});

//-------------------- 4th way of creating the promise: lets see both resolve, reject
//create the promise
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 4");
    let error = true;
    //if there is no error then resolve it
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

//consume the promise
promiseFour
  .then((user) => {
    console.log("task 4 then");
    //lets see how to avoid callback hell
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log("task 4 username");
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolve or reject");
  });

//-------------------------- 5ht way to create the promise
//create a promise
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async code 5");
    let error = false;
    if (!error) {
      console.log("resolved");
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

//consume a promise
async function consumePromiseFive() {
  try {
    //here i am just waiting, whether the result is resolved or rejected
    const response = await promiseFive;
    console.log("response:", response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//------------------------------- fetch using async await

const url = "https://jsonplaceholder.typicode.com/users";

async function getAllUsers() {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log("response using fetch ", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getAllUsers();

//------------------------- fetch using .then .catch: no need to write try-catch
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
