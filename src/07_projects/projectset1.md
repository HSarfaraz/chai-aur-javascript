# Projects related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
console.log("Sarfaraz");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

//As we got nodelist, so we can use forEach loop
buttons.forEach(function (button) {
  console.log(button);
  //apply event listener on this button: means need to apply to listen
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    //check the id in target of the event
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2

```javascript
// we will get the form
const form = document.querySelector("form");

//form submition will be post, so we need to stop the submission
//on submit click, get the values of height and weight
form.addEventListener("submit", function (e) {
  //to stop the default submission
  e.preventDefault();

  //step to get the value of input
  //parseInt: convert the string value into int
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  //apply some checks, if those checks are correct than add the values
  //height should not be empty
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
    // height.innerHTML = '';
    // weight.innerHTML = '';
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    //if everything is fine, then calculate the BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //Show the results

    //check the result, whether it is under weight or over weight
    if (bmi < 18.6) {
      results.innerHTML = `<span> You have under weight of ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.6) {
      results.innerHTML = `<span> You have Normal Range of ${bmi}</span>`;
    } else if (bmi > 24.6) {
      results.innerHTML = `<span> You have over weight of ${bmi}</span>`;
    }
  }
});
```

## Project 3

```javascript
// We can use querySelector, but we are using getElementById
// const clock = document.querySelector("#clock");
const clock = document.getElementById("clock");
console.log(clock);

//we need to update the date and run it everytime
//setInterval controls the interval, we set the time, it will run continuesly

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
//get user input
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
//show the last result
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

//to create the paragraph
const p = document.querySelector("p");

//store the value in array
let prevGuess = [];
let numGuess = 1;
let playGame = true;

//logic of the project

//check, if it is available for game or not or user is allowed to play game or not
if (playGame) {
  submit.addEventListener("click", function (e) {
    //prevent the value to send
    e.preventDefault();
    //select the user input
    const guess = parseInt(userInput.value);
    console.log(guess);
    //pass the function
    validateGuess(guess);
  });
}

//Create the function to validate between 1 to 100
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    //push in array
    prevGuess.push(guess);
    //check is this last attempt
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      //check whether the guess is correct or not, whether the number is higher or low
      checkGuess(guess);
    }
  }
}

//function to create the guess, if it is correct to validated number, tell that you won the game else reduce availibilty
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too high`);
  }
}

//display guess, clean the guess, update array
function displayGuess(guess) {
  //update the userinput value with empty value or cleanup
  userInput.value = "";
  //add the values in guess slot
  guessSlot.innerHTML += `${guess} `;
  //increase the guess number
  numGuess++;
  //reduce the available guess
  remaining.innerHTML = `${11 - numGuess}`;
}

//display the message, based on user input value, if wrong reduce the number available. Print the user message
function displayMessage(message) {
  //print the message here
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //first clear the input values
  userInput.value = "";
  //restrict the userinput, so that no new value to be added
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    // e.preventDefault();
    randomNumber = parseInt(Math.random() * 100 + 1);
    //reset the previous value
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.inner = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```

## Project 6

```javascript
//Generate random color

const randomColor = function () {
  const hexValue = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
};

//we will get the generated value, we need 16 value, so we will get value from 0 to 16
// console.log(Math.floor(Math.random() * 16));

// console.log(randomColor());
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBGColor, 1000);
  }
  function changeBGColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
document.querySelector("#start").addEventListener("click", startChangingColor);
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector("#stop").addEventListener("click", stopChangingColor);
```

## Project 5

```javascript
const insert = document.querySelector("#insert");

//add event listenenr on whole window
window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>    
        </div>
    `;
});
```
