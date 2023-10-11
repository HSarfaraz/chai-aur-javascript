// While syntax
/* while(condition){
    // if above condition is match, then execute the statment
} */

// print the number from 0-10 using while loop
/* 
let index = 0;
//check the value less then 10
while(index <=10){
    console.log(`Value of index is ${index}`);
    //increment or decrement condition
    index = index + 2;
} */

//Execute the array using do while loop
/* let myArray = ['flash', 'batman', 'superman']
let arrIndex = 0;
while(arrIndex < myArray.length){
    console.log(`Value of an array: ${myArray[arrIndex]}`);
    arrIndex = arrIndex + 1;
} */

//do while syntax
/* do{
    //statement
    //increment / decrement
}while(condition) */

let score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10); //check the condition score less then 10
