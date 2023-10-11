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
