//Array

// const myArr = [0,1,2,3,4,5];
// console.log(myArr[0]);
// const myHeros = ["Shaktiman", "naagraj"]

// const myArr2 = new Array(1,2,3,4);
// console.log(myArr2);

//Array Methods
const myArr = [0, 1, 2, 3, 4, 5];

// myArr.push(6);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// let newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

//-------- Slice, Splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);
