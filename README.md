
# ☕ Chai aur Javascript 1

<div align="left">
  <i>Sarfaraz Running Notes</i>
</div>

<br/>

## Lecture 1:

- Getting confidence in software development is very important
- Doing project will only gives you the confidence
- Confidence will only clear up the interviews
- No extra tool required to setup to learn javascript

<hr/>
<br/>

## Lecture 2: Setting up local environment

- Javascript execution is same for browser or running on any environment
- Every source code has meaning in javascript, like console.log() has some meaning in javascript, it is syntax in programming language
- Every programming language comes with some extenstion like .js, .py
- Every software has capability to understand the syntax whether it is .js or .py, which we call interpretor or compiler
- The compiler / interpretor was hidden in browser but now taken out in nodejs enviroment
- Now we no need to write, index.html and create the seaprate js file and add in script, as it was attached with broweser.
- Now we can run javascript directly with node environment, Hence Javascript is used everywhere like in frontend, backend etc
- Install the nodejs from nodejs.org and run in the local machine
- For writing the code use, VS Code, as it very popular now a days, it is from microsoft
- VS Code will help in color correction, indentation etc
- Go to view ➜ terminal, here you can see the terminal
- Check whether node is installed or not: node -v, our work done, if we get some number like 18, then we are ok
- To execute the code, we use: node filename

<hr/>
<br/>

## Lecture 3: Github

- We have lot of online code execution environment available like Github.
- Lets see, how can we setup the code environment in Github,

  - Go to Github and create the account
  - Create new repository ➜ code-with-javascript-one
  - Create the **README.md** and create the repository
  - There are different to use Github, but here we will see codespace
  - click on code ➜ codespaces
  - We will get the vscode here, here wee will get the computer like environment
  - Here click file ➜ view ➜ command palletter ➜ write 'Container' ➜ Add Dev container Configuration Files
  - It means, we are adding the configuration files
  - Click Show all configuration ➜ node.js & Javascript ➜ click default ➜ ok ➜ rebuild ➜ it will add some execution files
  - How to push the code to the github:
    - 1. click on source control ➜ add the file on + click ➜ add message ➜ click on commit
    - 2. click on triple dot ➜ click on push
        - Reload the github to get the files updated
        - To stop the github codespaces
        - Click on codespace ➜ see owned by 'username' on right side ➜ click on 3 dot ➜ delete the working directory ➜ ok
        - We can start the machine when needed


<hr/>
<br/>

## Lecture 4: Variables & Constants

- Only people will survive in the Tech indutry whos motive is to create something product
- Through javascript, we can create, mobile app, web app etc
- Set goal to create Ecommerce app or social media app
- All game is about mindset, here mideset to create a sample product
- Think to create a ecomerce app
- I need to attract user and make him into register
- Given him/her unique id
- When user comes ➜ he enter the details like name, city, etc, it needs to store ➜ it ll stored in memory space, here it is varaible later DB ha
- Here, all the game is about, storing the data and retriving it
- So we learn variable and constants
- variable can be change but constant is constant
- We will learn about investigation
- We should the name that is easily readable
- When we see the var, let, const, it means, we need to assign in memory
- Const means, we cant change the value, it will through an error, if we try to change the constant value
- To write a comment, we use // 2 slashes, it means, javascript cant execute this lines
- We can print multiple values in console.log([]) like this by separting commas
- In js, let and const and be done using let and const
- In js, there was a problem of scope, means anything written in {}
- In js, when some programmer change the value in scope, it will impact the existing varaible
- So in modern js, we use let, const to overcome the issue of block scope and function scope
- /* */ this is also way of comment
- We can reserve the variable without using anykeyword as well, but it is not good practice
- In js, semicolon is optional
- Defualt value of let is undefined


<hr/>
<br/>

## Lecture 5: Datatypes

- Prefer to practice on keyboard rather then taking notes on paper, write notes here itself so to remember
- **"use strict"** if we use above 2 words, it means it is newer version of javascript
- alert("hello") if we run the code, it ll given an error saying node is not defined, as js engine is hidden in browser ➜ it means, to run alert() has different way ti run it.
- In coding readability is very important ans it should be future proof
  For documentation prfer mdn (mozilla documentation)
- Original documenataion would be find in tc39.es
- ECMA Script is the standard way of writing javscript
- **For Example:**  if we write loop, then we should write in this way etc
- In js , we have different datatype,
- Primitive Datatype:
- Like number, string, boolean, null, undefined, bigInt, symbol
- Prefer to use double quotes for string datatype
- Boolean will say yes or no, it has only 2 values
- null ➜ it is standalone value, yes it is datatype as well
- null is representaiton of empty value
- null means value is empty, example, like giving empty value while monitoring the temp, as we cant give 0, as 0 has some value in temp scale
- ndefined ➜ means some value is not defined
- Symbol datatype is used to fincdout the uniquness ➜ it is used in react, to find the component
- typeof ➜ to know the type of any variable, we use typeof
- **Example:**
  ```javascript
  console.log(typeof "sarfaraz") ➜ string

<hr/>
<br/>

## Lecture 6: Conversion Operation

- We dont in javascript, what type of value we get, so we need to use conversion of datatype
- We can write typeof in 2 ways
  - typeof variablename
  - typeof(variableName)
- To convert string into Number, we use Number(variableName);
- When value is not proper number like 33abc, its type is NaN
- In Javascript, there is no strict check, so we use typescript
- Conversion of null into number is 0
- Conversion of undefined into number is NaN
- Conversion of boolean into number is false
- Conversion of string into number is NaN, as it is not able to convert into number
- **Number conversion summary:**
  ```javascript
  "33" => 33
  "33abc" => NaN
  true => 1; false =>0
- It is very important to know, is the value is converted and know what value it gives us back.
- Conversion of 1 gives true
- Conversion of "" emty string gives false;
- **Boolean conversion summary:**
  ```javascript
  1 => true, 0=> false
  "" => false
  "Sarfaraz" => true


<hr/>
<br/>

## Lecture 7: Operations

- if string is 1st then all conversion will into string
- **Example:** ```javascript console.log("1"+2+2) ➜ 122```
- If the string is last then conversion will be done before that then string will be added
- **Example:**
  ```javascript
  console.log(1+2+"2") ➜ 32
- Should know about more about convertion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


<hr/>
<br/>

## Lecture 8: Comparisons

- Comparison shouild be done with same datatype only
- Here console.log("2" >1) will be converted into 2>1 condition, here the auto conversion happens
- While comparion null is converted into 0 or NaN, example console.log(null > 0), means 0 > 0, hence answer is false. So avoid only value check but use value with datatype check.
- Comparison with undefined with 0 is always false, example: console.log(undefined == 0); it gives false
- In Javascript, comparison and equality check both work differently
- **==== Strict check:** it will check value as well as data type


<hr/>
<br/>

## Lecture 9: Datatype summary

- Datatype is basically into 2 types
  - Primitive
  - Non-primitive
- Difference between is call by value and call by reference, it means how we are saving the data into memory and how we are accessing the data
- **Primitive Datatype:**
  - Primitive is into 7 categories
  - Prmitive datatype is call by value
  - when we take the data, it is copied, so the changes are done on copied data
  - String, Number, Boolean, null (meam empty), undefined, Symbol (to make the value unique), BigInt
- **Non-Primitive Datatype:**
  - It is also called as reference type
  - we can get the reference of the available data
  - Array, Objects, Functions

- **To master the javascript:** Learn Objects and browser events

- JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
- For big integer number, we add n at the end of the number.
- Object is declared with curly brases
- Datatype of function is called object function
- **Reference Documentation link:** https://262.ecma-international.org/5.1/#sec-11.4.3


<hr/>
<br/>

## Lecture 10: Stack and Heap Memory

- Memory is of 2 types 1. Stack 2. Heap Memory
- Stack memory is used for primitiva datatype while heap memory is used for non primitive datatype
- To draw online diagram use: https://excalidraw.com/
- we will get original value reference when take back the value from reference value
- Whatever goes in heap, we only get the reference, means whatever changes we are doing, we are doing in original value
- From stack, we get the copy of the value


<hr/>
<br/>

## Lecture 11: String in javascript

- Through string, we can use modern syntax to write it.
- We denote string single or double quote '' / ""
- In modern days, we need to use backticks `` for strin manipulation called string interpolation.
- All methods are available in **__proto__** for string, example toUpperCase() etc
- If we use methods related to **__proto__** then original value is not changed.
- we can check what character available we use charAt(index)
- **indexOf('charactor') :** we can get the index of the charactor
- **substring(0,4)** the last value is excluded.
- **trim() :** this method is used to remove the unwanted space, mostly it is used in filling the form
- **split('-') :** split mothod is used to split with specified digit and gives the output in arrays


<hr/>
<br/>

## Lecture 12: Numbers and Maths

- If we write const score=400, then Javscript will recognise it as number, but we can explicitly define numbers as new Number(400)
- we can convert number into string using toString() method, it will help me to use string methods
- **toFixed() :**  to give the precision value till few decimal values, like toFixed(2) ➜ it wwill give .00 like that
- **toPrecision(3):**  it will focus on only 3 digit value only
- **toLocaleString('en-IN') :** this method will be helpful in giving the output in redable format of number, like 1000000 ➜ 1,000,00
- **Maths.abs():** it will convert -ve value into +ve value, +ve will remain +ve, it helps to convert valeue into +ve value.
- **Math.round():** To get the round value, example: Math.round(4.3) ➜ 4
- **Math.ceil():** It will round the value to top. Example: Math.ceil(4.6) ➜ 5 or Math.ceil(4.2) ➜ 5
- **Math.floor():** It will take bottom value, Example: Math.floor(4.2) -6-> 4.2 or Math.floor(4.6) ➜ 4, It will always takes the lowest value
- Mostly we will use round() method instead of ceil and floor
- **Math.min():** we can findout the minimum value from the given numbers, example: Math.min(3,4,5,6,) ➜ 3
- **Math.max():** we can findout the maximum value from the given numbers, example: Math.min(3,4,5,6,) ➜ 6
- **random():** it will the random value between 0 and 1
- To make the value in 1 digit then add 1, example: (Math.random()*10)+1
- We can round of the value using Math.floor in random method
- We can add 10, if we want the value more then 10


<hr/>
<br/>

## Lecture 13: Date and Time

- **Reference:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- Date is calculted in milli second starting from January 1st
- In future, we will be using Temporal object like Math, which will contain all the methods, but as of we will be using Date object only.
- Date can be converted into string using toString() method
- **toLocaleDateString():** It will give the value with date with / format Example: 9/27/2023
- **toLocaleString():** It will give the date value with time with / format Example: 9/27/2023, 7:05:46 PM
- In short: Every date method will add or remove some format
- Data type of Date is object
- Note: Month will start from 0 in javascript, but when we give the date in format it starts with 1, Example new Date("2023-01-23") ➜ 1/23/2023
- timestamp will be used, when we want to give the polls, like who has given the fastest answer
- **Date.now():** It will give the current date in milli second
- We can get the details about date using other method starting with get,
- **Example:**
  ```javascript
  let newDate = new Date();
  console.log(newDate.getMonth()+1) ➜ 9, added 1 as date always starts with 0.
- We can customise the date format, 

  **Example:**
  ```javascript
  newDate.toLocaleString('default',{ weekday: "short"}) ➜ Wed, as today is Wednesday


<hr/>
<br/>

## Lecture 14: Array

- Array has squre brakcet, Array has elements in it.
- **Reference Documentation:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- We can store the muliple values in single variable
- Javascript array are resizable
- Array indexing starts with 0
- we can access the array using indexing, Example: myArr[0]
- When we copy array, the array creats shallow copy, means share same reference point, means, it will change the original array, while Deep copy do not share the same reference
- We can declare the array using 2 types
- Using square brakcet []
- Using **new Array()**. here it will add the square bracket by its own
- We can view all the methods available in array.
- **Example:**
  ```javascript
  const numbers = [1,2,3,4];
  console.log(numbers) ➜ click on prototype to see the methods
- Array contain the mixed data type
- Array ha prototype proerty access
- Array has length property , to calculate the length of an array
- **push():** It will add the value in the array
- **pop():** Remove the last available value in array
- **unshift():** Value will be added at the start, But here problem is, we need to shift all values to right
- **shift():** remove the first element from an array
- Some array method will answer in yes or no, like includes(), so based on true or false, we can write the condition and judge the value
- **join():** add all the element in the array but gives output into string
- **slice():** It will not update the orignal array, here last range is not included, will give the extracted array from start to end value
- **splice():** It will update the original array, Gives the extracted array as output.
- **concat():** It will combine 2 arrays and gives the new array
- **spread operator:** think glass of water, when glass fall ➜ water spread to the ground : remember
- In spread operator, we will get the spread out values
- **flat():** This method is used to flatten the array, we need to mention the depth as a pramater
- **Array.isArray():** To check the given array is array or not, it will give true or false response
- **Array.from():** this method will convert any given number/name into array
- If we pass an array in from, then we need to mention, do we need to create the array for keys or values
- **Array.of() :** Will give the newly formed array, will convert any values into new array


<hr/>
<br/>

## Lecture 15: Objects

- To master javascript, we need to learn 2 things
  - Objects
  - Events
- Objects can be declared in 2 ways
  - Literal
  - Constructor
- **Singleton:** It means, only 1 object is created.
- When the object is created using constructor, it is singleton
- **Example:** const JsUser = {}
- Object has keys and values
- By Default key is in the string format in object
- To access the object element, we use JsUser["name"] , it means we are accessing using string
- we can update the value of the user using = equal to
- We can freeze the object using Object.freeze() to avoid the further update
- To define Symbol, we use square bracket [], it says I am a symbol
- Function can be treated as a varaible in javascript
- We can get the reference if we dont give paranthesis in function call with object, example: JsUser.greeting ➜ [Function (anonymous)]
- If we want to reference the same object, then we can use 'this'


<hr/>
<br/>

## Lecture 16: Objects 2: Object using constructor

- We can create the object using {} or new Object(), here both are same
- We can have any level of nesting in object
- we can access the object key using [], for nested value we can use [][], Example : regularUser["fullname"]["userfullname"]["firstname"]
- We can use optional chainging to avoid the error: ?.
- **Object.assign():** This method copies all the values of an objects
- We can extract keys using Object.keys and values using Object.values from an object
- **Object.entries() :** To get all the values of object in key value pair
- **hasOwnProperty():** To check the property exists in object or not
- To check the different mehoda available in object, use this trick
- Go to browser console
- ```javascript
  const obj1 = {1:"a",2:"b"} ➜ obj1 ➜ chec all the methods in [prototype]


<hr/>
<br/>

## Lecture 17: Objects Destrcuturing and JSON API

- Object destructuring is a syntactically sugar, means it only provide the syntax
- Object destructuring helps in avaoiding the repeatability of the code
- In Object destructuring, we are extracting the property from object
- We can rename the destructure value using colon :
- When we go to the restaurant and order something, the menu card is API Documentation
- When we order 'Samosa', we should not worry how it is made, just we have cOnsume it, Somosa is created at the backend, same goes with API.
- JSON is almost written like object, but key, value pair are stored in string
        ```json
        {
            "name": "hitesh",
            "coursename" : "js in hindi"
        }
        ```
- Use the url : https://api.github.com/users/hiteshchoudhary
- Use the API ➜ As the value is into JSON ➜ convert in javascript object ➜ use it, enjoy
- **Famous API:** Random user me: https://randomuser.me/ ➜ use https://randomuser.me/api/
- We can beautify the JSON using JSON Formatter online editor: https://jsonformatter.org/ ➜ we can beautify the JSON and check it into tree structure ➜ after this we can see how can we deal with it, may be using array or object

<hr/>
<br/>

## Lecture 18: Functions and parameters

- While learning about functions, it is important to know about memory management as well.
- Function means, what the 10, 20 etc lines of code you have writte, we kept in package
- We can resue the package, as much as we want
- To write a function, we give function keywoes, function name, then pranthesis then scope of function, this is called function defination
- To call the function, we function name with parenthesis, then function will execute it.
- In javascript, it automatically check the datatype of value, so it is important to check the type of any variable before doing any operations
- **function parameter :** while creating the function defination, whatever the inputs we take, we call it as parameters
- **function arguments:** The values which we pass in the function call, we call it as an argument
- It is important to know, what we are sending form the function
- **Note:** Whatever you write after function return, nothing will work
- undefined and "" empty string is considered as false value
- So to check the error, check with false value ➜ Example:  if(!username)
- We can give default value in function parameter with equals to, Example loginUserMessage(username = "sam")  ➜ it will avoid to go into error check, if no username available
- **Rest Operator:** ... when these 3 dots comes in parameter, it means get all the values and give me in bundle.
- **Example:** Get all the values in cart value

<hr/>
<br/>

## Lecture 19: Global and local scope

- Scopes story starts with var, let and const
- **{} :**  This is called as scope
- When {} comes with function or if, then we called its scope
- When any thing declared inside {} it is called block scope, and outside of {} is called global scope
- value declare in global scope ➜ it is available in block scope but value declaredin block scope is not available in global scope.
- var is functional scope, where as const, let are block scope.
- Global scope is different for node environment and browser

<hr/>
<br/>

## Lecture 20: Scope level and mini hoisting

- {} Is only scope in javascript ha
- Kids can ask ice cream from elder but it is awekword if elder ask the ice cream from kids
- It means, inner function can access the variable from outside but outside function cant ask inner member variables etc
- Variable declared inside the insode function cant be access outside function
- Every time function is called, then every time it is kept in stack
- Closure in simple line, the inner function can access the outside declared variable
- There are 2 technique to create a function, using bassic function, other is function expression
- Hositing is not possible with function expression, but hoisting is possible with basic function only

<hr/>
<br/>

## Lecture 21: this and arrow function

- ES6 came in 2015 and came with lots of new features
- Arrow function and this keyword are the features of ES6
- this keyword tells about current context
- When we refer to the current context of the object, we use this keyword
- In node environment, current object refer to empty object
- Node javascript engine is stand alone, earlier javascript engine is in a browser
- In brower there is a global object called window object
- this keyword is not accessible in noraml function and function expression (doubt)
- To write arrow function, replace function keyword with qual and arrow in function expression
- **Note:** this keyword can be accessible in normal function, act as a global object but not in arrow function
- **syntax of arrow function:** const sampleArrowFunction = ()=> {}
- **Implicit Return:** when arrow function is 1 liner, then we consider it as implicit return and no need to write the return keyword
- if use curly braces, ➜ then need to use return. If we use paranthesis, then no need to add the return keyword.
- To return the object, we should wrap in parenthesis

<hr/>
<br/>

## Lecture 22: Immedietly Invoked function

- The function which has its own scope and executed immideitly
- **IIFE:** Function defination is wrapped in paranthesis and use empty parenthesis for execution: ()()
- Note: To avoid the use of global variable, as global variable pollute the variable, so we use IIFE
- Note: To stop the IIFE, It is important to add the semicolon after IIFE
- We can write IIFE using normal function as well as arrow function
- Remember 2 IIFE can be written by seperating semicolon

<hr/>
<br/>

## Lecture 23: Javascript Behind scene

- Remember how the call stack works in javascript
- Javascript Execution context:  it means, the javascript created by you, how it will run
- Javascript has 2 execution context:
        1.  Global execution context: It is store in 'this', executed in thread, remember javascript is single threaded language
        2.  Functional execution context
- Javascript runs the code into 2 phases
        1.  Memory creation phase:
- Memory is created for variables and functions declared, it is not executed here
- Just variables are created, and kept with us
        2.  Execution Phase:  we will get all the values
- lets see with the example:

    ```javascript
                  let val1 = 10;
                  let val2 = 5;
                  function addNum(num1, num2){
                      let total  = num1  + num2;
                      return total;
                  }
                  let result1 = addNum(val1, val2)
                  let result2 = addNum(10, 2)
                  ```
              1.  Memory Creation Phase: Here, In 1st cyle we will get
                - val1 -> undefined
                - val2 -> undefined
                - addNum -> defination
                - result1 -> undefined
                - result2 -> undefined
              2.  Execution Phase:
                - val1  <- 10
                - val1  <- 5
    
- For addNum function, now different execution phase will be created
  - 1. New variable environment
  - 2. Execution thread
    - Memory phase:
      - val1 -> undefined
           - val2 -> undefined
            - total -> undefined
        - Execution context: Here execution happens
            - num1 -> 10
            - num2 -> 5
            - total -> 15 ➜ total will return to global execution context
        - The execution context will be deleted after the work is done
        - result1 -> 15
        - result2 -> here again 2 phased will be created
          1. Memory phase
          2. Execution Phase
            - here again the total will be calculated and sent to the execution context
- **Callstack:** All the method will be executed here, it will be removed once the work is done
- It follow the LIFO
- We can check the flow of function call by giving break points

<hr/>
<br/>

## Lecture 24: Control flow ☕

- In if statement, if the condition is true then only code will execude for if statement
- If statment will be having comparison statement
- Following are the comparator operators checking:
- Less then < ➜ Example: 10 < 20 ➜ check 10 is less then 20, yes it is, so output: true
- Greated then >
- Less then and equal to <=
- greater then and equal to >=
- Equal to ==, note single operator is assignmnet operator, Example: const isLoggedIn = true, means true is assigned to isLoggedIn, but here == is comparison operator
- Not Eqaul != ➜ 3 !=2 ➜ -ve checking ➜ 3 is not equal to 2 ➜ output: true
- === will check the type and value, it is strict equality check
- !== It will do -ve type and value checking
- else is conditional code, it will executed either if statement or else statement
- Scope is counted in curly braces {}
- var scope is compltely global, it means, it accessable outside {} as well
- **&& :** and condition will check both left and right condition
- **Example:** Do you need to buy phone and cover ➜ yes
- If any of the condition is wrong in &&, the block will not get executed
- **|| :** called pipe sign, help to multiple check or condition

  #### Switch case:
  
  - Using switch case, we will be checking multiple values
  **syntax:**
    ```javascript
    switch(key){
        case value:
            break;
        default:
            break;
    }
    ```
  - Here key is the condition, we need to check everytime
  - Use intellesence or seuggestion in vscode for switch case
  - If nothing match, then default case will be excuted
  - whenever, key is match rest all code will be executed, so we give break to avoid limited details to show

  #### Truthy & flasy values
  
  - Any value added in string is truthy value
  - [] empty arry, empty object are truthy value
  - If only function is declared, then that is also truthy value
  - Object.key() will return the array
  - **Remember:** it is true comparison below
    - false == 0 ➜ true
    - false == '' ➜ true
    - 0 == '' ➜ true
    - && || are called logical operator

  #### Nullish Coalescing Operator (??)
  
  - Need to focus on Null and undefined values
  - ?? it will check the safty value, based on null or undefined it will assign some other value
  - While using ?? operator twice, it will take the 1st assigned value, Example: null ?? 10 ?? 10 ➜ output: 10
  - ?? is basically used to handle errors
  - nullish and null operator are 2 different thing
  - Ternary operator: it is short cut of writing if else statement
  - Syntax: condition ? true : false

<hr/>
<br/>

## Lecture 25: for loop, break and continue

- use ctrl + d : to select the multiple value at once
- To stop any control, we use break keyword
- continue is like, sorry for 1 time (means skip when the condition match) and continue the process remain

<hr/>
<br/>

## Lecture 26: while, do while loop

- There are many loops, there are different ways to solve the problem.
- Logically, we need to do the same, what we did in for loop, like initialisation, checking condition, increment or decrement
  ```javascript
    // While syntax
    while(condition){
        // if above condition is match, then execute the statment
    }
  ```
- Readability of the code is very important
  ```javascript
      //do while syntax
      do{
          //statement
          //increment / decrement
      }while(condition)
  ```
- In do-while, work is done first then later condition is checked
- Mostly we dont use d0-while loop, as we check the condition first
- It is very very common to loop the array, as the API Value, DB values comes in the form of array

<hr/>
<br/>

## Lecture 27: Higher order array loops

- There are other loops in array like for-in, for-of, forEach, its our choice what to use.
- There is very common scenario, where we can have
- strings in array ["","",""]
- Objects in array [{},{},{}]
- So we need to iterate it, so use higher order array loops
- string, array, objects are iterators, so we can use loops on it.
- **Syntax of for...of loop:**
  
  ```javascript
        for(const iterator of object){

        }
  ```
- Above object is used as a broader term, it means, on what you want to use loop, dont confused with javascript object
- In for...of loop, there is no need to worry about initialisation, increment or decrement.
- Instead of giving names like i,j, it is better to use meaningful name, like greetings, greet, numbers, num etc
- Map is use to store key, value pair
- **Reference:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- Map is like object with slight difference
- Map is used to store unique values, persist the same order how it entered
- We can iterate the Map using for...of loop by destructuring the value
```javascript
  for(const [key, value] of countries){
      console.log(`Key: ${key} Value: ${value}`)
  }
```
- Note: Not possible to iterate the object using for..of

#### Object iteration:

  #### for...in loops
  - **for...in loop syntax:**
    ```javascript
          for(const key in myObject){
  
    ```
  - To retrive value from object, we use objectName[key]
  - Maps are not iterable so we cant use for..in loop for Map

  #### forEach loop
  - For most of the time, we may use forEach loop for array
  - Array has some inbuilt methods, here forEach method, so we can use it to access the elements of an array
  - Passing callback means give me the function to operate
  - callback function doesn't have name
  - While iterating an array, every time the function will get executed, and take as a pramater to it.
  - forEach doesnt only return item, but it will return item, index and whole array
  - callback has access to all the element of an array

<hr/>
<br/>

## Lecture 28: filter, map and reduce

  #### filter():
  - forEach dont return any value, either you wanted or not
  - filter return some values
  - filter is having callback function which has access to each element, then we have to give the condition. If the condition is satisfies then return those values else dont return the values
- When we write paranthesis, then no need to write the return keyword.
  
  ```javascript
  const myNums = [1,2,3];
  const newNums = myNums.filter(num => num > 4)
  ```
- When we use curly braces, then we need to use return, as we will start the scope here.
  ```javascript
    const myNums = [1,2,3];
    const newNums = myNums.filter(num=> {
        return num > 4;
    })
  ```
- Consider an array has given with some objects, so we need to apply filters on it.

  #### map():
  - It looks better than forEach loop
  - It also have a callback
  - map automatically return the new array
  - Chaining methods: means we can apply multiple methods at once
  - Whatever values are passed in chaining it will be passed to respective methods

  #### reduce():
  - Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  - Whatever we give the initial value, it goes into accumulator
  - Reduce will work on entire array
  - In reduce methods, we get 2 parameter, one is accumulator and other is current value
  - We can assign the value from which we want to start the value in accumulator

# ☕ Chai aur Javascript 2

<br/>

## Lecture 1: DOM Introduction

- Congrats! on completion of javascript basics
- For mastering javascript, we need to focus on events and DOM
- Lets focus on DOM Now,
- Create a folder 06_dom ➜ create one.html 
- To create the lorem sample 5 words use: lorem5 enter
- DOM is document object model, The webpage is created from object like head, body etc
- DOM tells how the page structure is all about, It also tell the document object is made up of which object, so we can manipulate the page
- If I understand events, then I can understand , on button click, what should be there, should we send the request or not etc
- To see the details of browser method see console.log(window)
- Instead of focusing complex object, it is better to focus on window.document object
- As window.document is so common object, so we can access document object directly as well console.log(document)
- console.dir(document) it will give all the hidden details as well, that were missing using console.log(document)
- <!DOCTYPE html> will only tell what type of html page it is
- In DOM, everything is node, like head, bodt etc
  
```html
<div align="center">
  <img src="/chai-aur-javascript/06_dom/DOM.png" alt="dom image" />
<div>
```

- We can go to wiki page, search for Brandan Eich, here we can search of id, firstHeading
  
**Example:**
  ```javascript
      document.getElementById('firstHeading')
  ```
- so we will be getting the element of that id.
- we can manipulate the page as below
  
```javascript
document.getElementById('firstHeading').innerHTML = "<h1>Chai aur code<h1/>"
````

- So in this we can add, remove, apply filters to the element in DOM manipulation
- Learn all the above basic rather focusing on any framework 
 
<hr/>
<br/>

## Lecture 2: All DOM Selector

- Open wiki page of ajavascript, as the wiki page is created so cleanly
- We will see here, what element we can catch, and what the things we can do manipulate it.
- Focus on Javascript rather than react, angular, sevelt, who knows future
- Focus on selecting element then apply methods to manipulate it.
- Behind the scene, document understand it as className not class
- we can get the attibute using:
  
```javascript
  document.getElementById('title').getAttribute('id')
```

- We should remember not to override the existing attribute
```javascript
  document.getElementById('title').setAttribute('class','test heading')
```

- here, new class is test, existing class is heading
- We can set the styling of element as below,
  
```javascript
  const title = document.getElementById("title");
  title.style.backgroundColor = 'green'
```

### How to add the content
- We will be using textContent, innerHTML, innerText
- **InnerContent vs InnerText:** InnerText will give the text which is visible, but InnerContent will give the text which is hidden as well.
- innerHTML will give the complete value
- In real time, we will be using other query selector, like querySelector, querySelectorAll etc
**Example:**
  ```javascript
    document.querySlector('h1')
    //we will be getting the 1st h1 element
  ```
- querySelector is quite similar to jquery
- **Example:**
  ```javascript
    document.querySelector('#title');
    //we can use othe selectors as well, like class selector
    document.querySelector('.heading');
    // we can select the input slector as well
    document.querySlector(input);
    //we can select the attribute as well
    document.querySelector('input[type="password"]')
    //select 1st child of paragraph
    document.querySelector('p:first-child');
  ```
  - Try to use emmet shortcuts, how sir is using,
    **Example:** To write 3 list item, use ul>;i*3
  - We can select element and manipulate the element as below
  **Example:**
  ```javascript
    const myUl = document.querySelector('ul');
    myUl.querySelector('li')
    const turnGreen = myUl.querySelector('li')
    turnGreen.style.backgroundColor = "green"
    turnGreen.style.padding = "10px";
    turnGreen.innerText = "five"
  ```

  - Remember, querySelector will only gives 1 value
  - To select all list item, use querySelectorAll()
  - Nodelist are not pure array
  ```javascript
    const tempLiList = document.querySelectorAll('li');
    tempLiList[0].style.color = "green"
    // to manipulate whole details, we can use forEach loop
    tempLiList.forEach(l=>{
      l.style.backgroundColor = 'green'
    })
  ```
  - In querySelectorAll, it is important to know what datatype it is returning
  - Scenario: We need to apply class on each element of list
  - **Array.from():** This method will convert nodelist into the array
    ```javascript
    const tempClassList = document.getElementsByClassName('list-item');
    Array.from(tempClassList);
    ```
    ```javascript
    const myConvertedArray = Array.from(tempClassList);
    myConvertedArray.forEach(function(li){
        li.style.color = "orange"
    })
   ```
  - we can manipulate the page value as
   ```javascript
      const myH2 = document.querySelectorAll('.mw-headline')
      myH2.forEach(function(h){
          h.style.color = "black"
          h.style.backgroundColor = "green"
          h.style.color = "white"
          h.style.padding = "10px"
          h.innerText = "Sarfaraz"
      })
   ```
<hr/>
<br/>

## Lecture 3: How to create a new element

- Knowledge on DOM will help to crack the interview, so dont take it lightly before starting react
- We will focus here on relations, like parent-child relation, parent-parent relations etc
- Scenario: we need to create the element ➜ create the query from DB ➜ Set into array ➜ display in UI
- Play with DOM to add or remove an element
- to create div with4 elements use shortcut: div.day*4
- Lets check the value in the parent
- parent.children will give the list of html collection
- To select 1 element in array: parent.children[0]
- To access the inner value of it, we can use parent.children[0].innerHTML
- We can create the new element using document.createElement('div'), so here div is created
- The document will be visible when it is attached using appenChild method

<hr/>
<br/>

## Lecture 4: Edit and remove DOM element

- Remember: Everything declared in function scope is not accessible outside
- Better to use appendChild rather InnerHTML
- There is not much difference between innerHTML and innerContent
- Mentioned everything in comment in the file, practice a bit from w3school for querySelectors

<hr/>
<br/>

## Lecture 5: Lets build 4 Javascript Project 

  ### Project 1: 
  
  - Without events, it is not possible to do big projects 
  - We can view the markup file view in vs code, the short cut is available in the right corner of vscode.
  - Go the stackblitz folder, copy html, css file content from
  - project 1 Select all the box
  - **e.target:** means from which target we got the event
    
  ### Project 2: BMI Calculator
  - From the input form, we need to need to get the value.
  - First we need to select the form, as form has submit button.
  - Here, we have submit button
  
  ### Project 3: Digital Clock
  - Please learn flexbox in css, as flexbox is used here to center the div
  - We need to create the digital clock, which need to be change on every second
  - setInterval controls the interval, we set the time, it will run continuesly
    **Example:**
    ```javascript
      //Syntax:
        setInterval(function(){}, 1000)
    ```
    
  ### Project 4: Guess the number
  
  - Generate the random number and guess is it correct or not.
  - Random number will give always new value, to get 10 number multiply by 10, add 1 to get number above 0
  - To get the number in interger we use parseInt
  - We often need to write the validation logic, like, is the number available in DB, is the number is unique etc
    
<hr />
<br />

## Lecture 6: Events in Javascript

- Whatever the eventd run in the javascript, it runs in sequentially
- But in asynchronous programming, we deviate the sequence and come back, same like browser event, it acitivate in browser events.
- Write a logic that is scalable in javascript, so better avoid writing onclick on button in js.
- Dont write simply onclick event but use addEventListener, as it will give much detail like propogation, or gives less features if use onclick.
- Add the event listener in string.
  - We should learn about type, timestamp(how to change the date), preventDefault(to overrid the default value of any tag), target, toElement, srcElement, currentTarget. - Need to know clientX, clientY, screenX, screenY related to positions.
- altKey, ctrlKey, shiftKey, keyCode(what is the key code of any character, or to check keyboard speed).
 - Event Propogation is of 2 types, Event bubbling(default), Event capturing.
- If we add the addEventlistener on parent and child, we should think, which will be clicked first?.
- The answer is Event bubbling, means the event propogates from low to high. Here 1st from li then ul.
- If we apply e.stopPropogation, then event will not propogate to the parent.
- **e.target:** it will give the targeted element
- **e.target.parentNode:** Here, we can select the parent element.
- **remove():** It will remove the element from nodeList.
- **removeChild():** It will remove the child element from parent Node.
- Read more about event, that help in understanding the events

<hr />
<br />

## Lecture 7: Async code (Theory)

- We will focus on basic on sync javascript, so that It will be helpful to learn promises, async-await etc
- We should know basics like, Javascript is
  1) Synchronous: Execute one line of code at a time.
  2) Single threaded languge: Work on 1 thread, slow language as compared to other
  3) Execution context: Execute one line of code at a time. Here Each operation waits for the last one to complete before executing
- There are 2 types of code in javascript
  1) Blocking Code: Block the flow of the program ➜ Read the file
  2) Non-Blocking Code:Does not block execution ➜ Read file Async
- It is based on the use case, what code we need to use either blocking or non blocking
- Example for non blocking code, till we store the data in db and get response that entry is done ➜ then give the message to the user that registration is successful or not, then we should go ahead with non blocking operation.
- JS Engine: It is a complete javascript engine, which execute the javascript
- JS Engine is made up of 1) Memory Heap 2) Call stack
- Web API: We will get Web API in browser, we wont get anywhere, we call it in sometime Node environment
- If we consider Node for web API, then we wont get DOM API
- Task queue: Task queue only make the JS engine fast
- Promise has different high priority queue, we call it high priority queue
- How the program executes:  
- 1st callstack is created ➜ created the global execution context and one by one function is loaded ➜ whenever work of function is completed, functions are unloaded
- **Memory heap:** here memory is allocated - Async code, we use, we say, yaar do this work and please remember me in future ha, ➜ it is registerd in Register callback, who register all the events
- Async code are like settimeout, setinterval etc Task Queue: Once the task is completed, the register callback send the details to task queue. task queue add to the callback and add back to call stack. Task queue is last in first out.
- fetch is just a high priority call

<hr />
<br />


## Lecture 8: 2 Projects with async

- We will get the functions like setTimeput, setInterval are functions of window object.
- If we use setTimeout, then after 2 sec, name will be printed only once.
  
  **Example:**
    ```javascript
      setTimeout(function(){
        console.log("Sarfaraz");
      }, 2000)
    ```
- In settimeinterval, the work will be executed after every specific time interval
- clearTimeout: we can remove the settimeout function, but cleartimeout seek reference of what timeout need to be removed. ➜ cleartimeout say remove   everything for that reference what is there in call stack
- We will call the clearTimeout on button click
  ```javascript
    document.querySelector('#stop').addEventListener('click',function(){
      clearTimeout(changeMe);
      console.log('Stopped');
    })
  ```
- We will be getting the name after every 1 sec
  ```javascript
    setInterval(function(){ console.log("Hitesh"); },1000)
  ```
- We can stop the interval using clearInterval, here clearInterval seek the reference to pass.
- Here, the scenario is, if we click on start button then start the interval, if we click on stop button, it should stop the interval.
  
## Project 6: Unlimited colors
- Onchange of start button change the background color, after every sec background color should change.

<hr />
<br />

## Lecture 9: API request and v8 engine
  - API is the talking language
      between 2 systems - famous API is of github
  - To know the basic
      information about github user, Example:
      https://api.github.com/users/hiteshchoudhary
  - format is API, having big
      object having values.
  - other example: https://randomuser.me - We can use
      jsonformatter.org to format the API and check the details in tree format -
      Before fetch method, we use to send the XMLHttpRequest: It is completly
      ajax programming
  - Reference:
      https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest - just for
      knowledge we are ready XMLHttpRequest
  - XMLHttpRequest: we can send or
      recive the data, it is a class - open() method cant be called directly ➜
      if we do send() then we can say it is called.
  - When we talk about current
      context, then we use this
  - Most of the time we get the data, it is in      string format
  - **JSON.parse():** It will convert the object from string to JSON.
  - **console.log():** It is browser dev tool, it is not a part of javascript
  - v8 engine gives all the tools of debugging. actual implementation of console.log is available here in v8 engine code.

<hr />
<br />

## Lecture 10: Promise

- Before understanding the fetch, it is important to learn about promise
- In javascript, we use less reference to class, everthing we see as an object reference.
- **Reference:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- When we do any task in promise, then it will complete now.but it will complete in future.
- Promise has 3 state:
    - **Pending:** niether fullfilled nor rejected
    - **fullfilled:** means the operation is completed successfully
    - **rejected:** means operation is failed
- Most of the time, we can see promises are mostly consumed.
- It is better to create promise then learn how to consume it.
- Promise itself is an object - with new key we get the new instance.
- Promises are introduced in ES6
- Before promise, Q, Bluebird library were used, now this library is integrated in nodejs by default.
- Promise reduces the callback hell
- Promise take callback function which take 2 parameters resolve and reject.

- **.then()** has direct connect with resolve, .then() has callback function, it return the value
- To connect promise with then(), we need to call resolve() method in promise creation.
- Mostly the data passed is an object in promise.
- We can use .then().then() this is called chaining, in 2nd then we will get the value what we returned from 1st then.
- **finally():** It tell, after x amount of time, it is done or not.
- Promise is in general the thing which will be done in future.
  
### Async Await
- It is like promise concept only, just wait, if work done then only it will proceed else it will give error
      there itself. - Suntax: async await
- The problem with async- awit, we cant handle the error directly
- We can use dummy response: https://jsonplaceholder.typicode.com/users
- If we use fetch(), it will take time, so we need to write await in async function.
- response.json(): we are saying, hey response convert into json, as the data what we got is in the string format.

<hr />
<br />

## Lecture 11: fetch (Theory)

- fetch is a method in nodejs
- Blog Reference: https://blog.logrocket.com/fetch-api-node-js/
- Back then we were using XMLHttpRequest, but it was very hard to implement with other libraries like jquery etc.
- Fetch API was available but not included in nodejs environment, as fetch api was heavily dependent on browser.
- We can stop the node request using abortController.
- So now onwards all async calls will be done using fetch only.
- fetch is a global mothod which start the process to fetch the resource from a network. It return the promise
- Reference: https://developer.mozilla.org/en-US/docs/Web/API/fetch
- Special queue is created for fetch in event loop or called as "Micro task queue or Priority queue or fetch queue", It is VIP line.
- fetch works in 2 parts
    1) Web browser: Here nodejs add the feature of brower, It will handle the web API ➜ From it will call the network request ➜ either we will get the date  then it goes to onfulfilled or if no data found it goes to onRejection.
    2) Data: To reserve the memory space, we may call data, other is arrays, onFulfilled, onRejection. We can't access those arrays. These are private field.
- Initially data is empty
- Its data's responsibility to fullfill the memory
  
## ------------------------ Classes & Objects : (bit theory) ------------------------

##  Lecture 12: Object Oriented Javascript
- Technically javascript is not having class but yes javascript does have classes. class is afeature of ES6.
- We should use chatGPT while working in javascript or react.
- Javascript is a prototyped based language, it is syntactic sugar over existing prototype based inheritance mechanism.

### Object literal: 
-  Create the object literally
  ```javascript
   const user = {
     username : "Hitesh",
     loginCount: 8,
     signedIn : true
   } //we can access using dot or [] notation
   user["username"];
  ```
- Object is a collection of properties and methods
- With the help of new keyword, we can create multiple instances, And we call it as constructor function.
- the left hand side shows the variable name and right side shows the value.
- When we use new keyword, empty object is created.
- Constrcutor function is called on new call
- this keyword is injected

<hr />
<br />

## Lecture 13: Magic of Prototype: Js Behind the scene 
- Here, we will understand the prototype, which help to understand the internals of javascript - Prototype is the behaviour
- We will look into new keyword, what is the behaviour of function
  ```javascript
  const newHero = ["Hulk","spiderman"]
  console.log(newHero);
  ```
- Here, when we console the output, we not only get the array element but we get the Prototype keyward as well, we will explore it more.
- Javascript is prototypal inheritance:  Javascript search at the top till it gets null value.This is prorypal behaviour of javascript
- Due to prototype bahviour only, we get new keyward, classes and this key works due to this.
- Everything in javascript is Object, Object is no parent ➜ Object has null reference
- Srting, Array redirect to object, means it is object.
- Function is a function as well as it is object in javascript
- From 'this', we set the current context
- **prototype:** it gives not only methods but also gives some proprties as well.
- All about 'new' keyword:
- **new** keyword initiate the creation of a new javascript object
- newly created object is linked to constructor's prototype ➜ then constructor is called ➜ finally we get the new object
- Everything goes through object
- In Prototypal inheritance we say that how can we access other's properties.
  ```javascript
        //modern syntax of prototypal inheritance
        //copy the details of TeachingSupport ➜ into Teacher
        Object.setPrototypeOf(TeachingSupport, Teacher)
  ```
- Whoever is called, it is having this reference

<hr />
<br />

## Lecture 14: Call and this 
- Earlier we were using bind in reactjs version 1, as library was not so defined
- When there is global context, then this reference to window object while node refere to emoty object
- call: it is a method to call another method, it pass the current execution context to another function.
- call method used to call the reference, here this gives the current context.

<hr />
<br />

## Lecture 15: Class and constructor 
- **class** is the keyword in javascript
- Behind the scene of classes, it is simply a function with some protypal properties and methods
- We can extends the properties using 'extends' keyword
- 'static': it is a keyword which restrict to access, as like we want to restrict not to give unique id everytime for everyone.

<hr />
<br />

## Lecture 16: Bind 
- **bind** is used in eary version of reactjs
- Bind says about attachment
- Through bind, we can have access for everything related to that function.

<hr />
<br />

      
## Lecture 17: Now you know Objects

- Object has so many properties
  ```javascript
  const mynewObj = {username: "sarfaraz"}
  mynewObj;
  ```
- getOwnPropertyDescriptor: It gives the internal properties of object details 
  **Example:**
  ```javascript
  Object.getOwnPropertyDescriptor(Math)
  ```
- Can we change the value of object property? Yes we can using Object.defineProperty 
  ```javascript
      const chai = {
          name: "ginger chai",
          price: 250,
          isAvailable: true,
  
          orderChai: function(){
            console.log("Chai nahi bani");
          }
      }
  
      console.log(Object.getOwnPropertyDescriptor(chai, "name"));
  
      //which property to change
      Object.defineProperty(chai, 'name',{
          writable: false,
          enumerable: false,
      })
  
      console.log(Object.getOwnPropertyDescriptor(chai, "name");
    ```
- Object is not iteratable by default, we can make object iterable using Object.entries

<hr />
<br />

## Lecture 18: Getters and setters

- Suppose, we dont want to give the property of class, then we can use getter and setters.
- it is compulsory to setter and if getter is written
- getter helps to get the value
- It is better to create a property by using undescore to avoid the setter, getter race condition
- Function behave in 2 ways, one is function and other is object.
- **Object.defineProperty:** it is a property of getter and setter property, Old code before classes it is used in function.
- We need to write setters and getter, so that others cant access it.
- here underscore **_** define the private property, cant be used by normal user.


<hr />
<br />

## Lecture 19: Lexical scope and closure

- **Closure Reference:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
- Closure gives you access to an outer function's scope from an inner function.
- If the outer function has inner function then at this time memory is shared.
- The variable decalred in outer function has access in both outer and inner function.
- It is not possible to access the variable declared inside function to outside of function.
- While we return the function reference, we return the whole lexical scope, means it return the variable as well.

<hr />
<br />

## Lecture 20: Javascript ends with story

- When you do project ➜ you stuck ➜ you solve ➜ you only learn                
