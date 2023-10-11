// let a = 10;
// const b = 20;
// var c = 30;

// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // var c = 30;
  // console.log("Inner: ", a);
}

// console.log(a)
// console.log(b)
// console.log(c)

//-------------- Scope level and mini hoisting ----------------

//Scope using functions
function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    // console.log("Inner ",username);
  }
  // console.log(website);
  two();
}

one();

// Scope using if statements
if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "   youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

//---------------- Intresting ------------------

//1 way: Basic function
console.log(addone(5));

function addone(num) {
  return num + 1;
}

// console.log(addone(5));

//2 way: Function expression
// console.log(addTwo(5));//not possible

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
