const myNum = [1, 2, 3];

//reduce using normal function
/* const myTotal = myNum.reduce(function (accumulator, currentValue){
    console.log(`accumulator:  ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0); */

//reduce using arrow function
const myTotal = myNum.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(myTotal);

//other example
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data science course",
    price: 12999
  }
];

//scenario: add the price in the shopping card
const priceToPay = shoppingCart.reduce((acc, item) => acc + item["price"], 0);
console.log(priceToPay);
