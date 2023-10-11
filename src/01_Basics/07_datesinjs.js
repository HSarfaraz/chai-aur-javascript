//Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString(2023, 0, 23, 5, 3));

//yyyy-mm-dd
// let myCreatedDateOne = new Date("2023-01-14");
//mm-dd-yyyy, we prefered in india
// let myCreatedDateOne = new Date("01-14-2023");

// console.log(myCreatedDateOne.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDateOne.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "short"
  })
);
