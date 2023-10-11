/* //forEach example
const coding = ["js","ruby","java", "python", "cpp"]

const values = coding.forEach(item=>{
    // console.log(item);
    return item
})

console.log(values); */

//filter
/* const myNums = [1,2,3,4,5,6,7,8,9,10]
//scenario: filter the values which are greater then 1
const newNums = myNums.filter((num)=>(num > 4));

console.log(newNums); */

//alternate long way using forEach loop
/* const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNum = []
myNums.forEach((num)=>{
    if(num > 4){
        newNum.push(num) 
    }
});
console.log(newNum); */

//array of books given
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 }
];

//need to get the books whose genre is History
const userBooks = books.filter((bk) => bk["genre"] === "History");
// console.log(userBooks);

//give the book, which are published after 2000
const userBooksAfter1995AndGenreHistory = books.filter(
  (bk) => bk["publish"] >= 1995 && bk["genre"] === "History"
);
console.log(userBooksAfter1995AndGenreHistory);
