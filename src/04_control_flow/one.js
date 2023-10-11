//if

//-------- syntax of if --------
/*
if(condition){

}
*/

if (true) {
  //statement will execute if condition is true
}

/*
const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log("User is logged in");
}
*/

/*
if( 2   ==  "2"){
    console.log("executed");
}
*/

/* 
if(2 != 3){
    console.log("executed");
} */

const temperature = 41;

//-------- checking, is the temperature is less then 50 --------
/* if(temperature < 50){
    console.log("less then 50");
} */

//-------- checking the exact temp to 41 --------
/* if(temperature === 41){
    console.log("Temperature is less then 50");
}else{
    console.log("Temperature is greater then 50");
}
console.log("Executed"); */

//-------- working with scope --------
/* const score = 200;
if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
} */

/* const balance = 1000;
// checking balance is greater then 500, with implicit scope
if(balance > 500) console.log("balance is greater then 500"); */

//checking 2,3 conditions
// checking balance is less then 500, 750, 900, 1200
/* const balance = 1000;
if(balance < 500){
    console.log("less then 500");
}else if(balance < 750){
    console.log("less then 750");
}else if(balance < 900){
    console.log("less then 900");
}else {
    console.log("less then 1200");
} */

// think like purchasing any course online
// we can check multiple conditions here
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// check user should have logged in and have debit card --> then allow for shopping
if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy courses");
}

//check the user, if the user logged in with email or logged in with google
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("Logged in using email or google");
}
