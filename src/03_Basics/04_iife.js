// Immediately Invoked Function Expression (IIFE)

// Normal function defination and function call
/*
function chai(){
    console.log(`DB Connected`);
}

chai();
*/

// IIFE: using normal function or called named IIFE
(function chai() {
  console.log(`DB Connected`);
})();

//IIFE: using arrow function
(() => {
  console.log(`DB Connected again`);
})();

//IIFE with argument
((name) => {
  console.log(`DB Conneted two ${name}`);
})("hitesh");
