const coding = ["js", "ruby", "java", "python", "cpp"];

//using normal function
/* coding.forEach(function (val){
    console.log(val);
}) */

//using arrow function
/* coding.forEach(item=>{
    console.log(item);
}) */

//using seperate funtion, give only reference but dont call it
/* function printMe(item){
    console.log(item)
}

coding.forEach(printMe) */

//forEach wont take item but item, index and whole array
/* coding.forEach((item,index, coding)=>{
    console.log(item, index, coding);
}) */

//iterating list or array of objects: very very common operations
const myCoding = [
  {
    languageName: "Javascript",
    languageFile: "js"
  },
  {
    languageName: "java",
    languageFile: "java"
  },
  {
    languageName: "python",
    languageFile: "py"
  }
];

myCoding.forEach((item) => {
  console.log(item["languageName"]);
});
