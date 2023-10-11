const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//scenario: need to add 10 number to each element of an array
// const newNums = myNumbers.map(num=> num + 10)

//chaining methods: means we can apply multiple methods at once
//scenario: multiply the number by 10 and add the number by 1
const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40 && num < 80);

console.log(newNums);
