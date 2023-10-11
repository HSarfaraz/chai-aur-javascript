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
