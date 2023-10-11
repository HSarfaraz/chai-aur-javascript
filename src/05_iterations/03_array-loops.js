// for...of loop

//common scenarios
//strings in array ["","",""]
//Objects in array [{},{},{}]

//for..of loop on arrays
/* const numbers = [1,2,3,4,5]

for (const num of numbers) {
    console.log(num)
} */

//for...of loop on strings
/* const greetings= "Hello World"
for(const greet of greetings){
    //skip the space and print the remaining
    if(greet === " ") continue;
    console.log(`Each char is ${greet}`);
} */

//for..of for Maps
/* const map = new Map();
map.set('IN',"India");
map.set('US',"United Sates of America");
map.set('FR','France');

console.log(map)

for(const [key, value] of map){
    console.log(`Key: ${key} Value: ${value}`)
} */

//for...of on objects : Not possible to iterate the object using for..of
/* const myObject = {
    "game1" : "cricket",
    "game2" : "football"
}

for(const [key, value] of myObject){
    console.log(key);
}c */
