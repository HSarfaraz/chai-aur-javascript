// using switch case, we will be checking multiple values

//------------ Switch case syntax --------------
//here key is the condition, we need to check everytime
/* switch(key){
    case value:
        break;
    default:
        break;
} */

const month = "mar";
switch (month) {
  case "Jan":
    console.log("January");
    break;
  case "feb":
    console.log("Febraury");
    break;
  case "mar":
    console.log("March");
    break;
  case "apr":
    console.log("April");
    break;
  default:
    break;
}
