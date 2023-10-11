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
