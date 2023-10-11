//for

/* 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5  is best number");
    }
    console.log(element);
} */

//nested loop
/* 
for(let i=1;i<=2;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=2;j++){
        // console.log(`Inner loop value: ${i} and inner loop ${i}`);
        console.log(i + "*" + j + ' = ' + i*j);
    }
}
 */

/* 
let myArray = ["flash", "batman", "superman"]

console.log(myArray.length);

for(let i=0;i<myArray.length;i++){
    const element = myArray[i]
    console.log(element);
}
 */

//----------- break, continue ------------------------

/* 
for(let i=1;i<=20;i++){
    if(i == 5){
        console.log("5 is detected");
        break;
    }
    console.log(i);
}
 */

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("5 is detected");
    continue;
  }
  console.log(i);
}
