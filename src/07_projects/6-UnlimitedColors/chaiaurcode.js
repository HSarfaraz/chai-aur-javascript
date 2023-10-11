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
