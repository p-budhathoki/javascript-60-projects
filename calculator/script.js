const myCalculator = document.querySelector(".myCal");
// const myKeys = [
//   ["1", "2", "3", "+"],
//   ["4", "5", "6", "-"],
//   ["7", "8", "9", "×"],
//   ["C", "0", "=", "÷"],
// ];
const myKeys = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"],
];

// const myOperators1 = ["+", "-", "×", "÷"];
const myOperators = ["+", "-", "*", "/"];

// for (let i = 0; i < myOperators1.length; i++) {
//   myOperators[i] = myOperators1[i];
// }

let myOutput;
document.addEventListener("DOMContentLoaded", () => {
  myOutput = document.createElement("div");
  myOutput.innerHTML = "0";
  myOutput.classList.add("output");
  myCalculator.appendChild(myOutput);
  //   console.log(myOutput);

  for (let i = 0; i < myKeys.length; i++) {
    let div = document.createElement("div");
    div.classList.add("row");
    // console.log(div);
    for (let j = 0; j < myKeys[i].length; j++) {
      //   console.log(myKeys[i][j]);
      let btnEl = document.createElement("div");
      btnEl.innerHTML = myKeys[i][j];
      btnEl.classList.add("btn-calculator");
      btnEl.addEventListener("click", btnHit);
      div.appendChild(btnEl);
    }
    myCalculator.appendChild(div);
  }
});
function btnHit(e) {
  console.log(this.innerText);
  let myValue = this.innerText; // input value
  let myCalculation = myOutput.innerText; // output value
  // console.log(first)

  if (myCalculation == "0") {
    myCalculation = "";
  }

  if (myValue == "=") {
    myCalculation = eval(myCalculation);
  } else {
    let lastChar = myCalculation.substring(myCalculation.length - 1);
    console.log(lastChar);
    if (myOperators.includes(myValue)) {
      if (myOperators.includes(lastChar)) {
        myCalculation = myCalculation.substring(0, myCalculation.length - 1); // remove last character
      } else {
        myCalculation = eval(myCalculation);
      }
    }

    myCalculation = myCalculation + myValue;
  }
  if (myValue === "C") {
    myCalculation = 0;
  }

  myOutput.innerText = myCalculation;
}
