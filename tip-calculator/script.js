// select elements
const button = document.querySelector("button");
const output = document.querySelector(".output");
const cost = document.querySelector("input");

console.log(button);

// add event listener
button.addEventListener("click", () => {
  //   console.log("click");
  let tip = (cost.value * 0.15).toFixed(2);
  let msg = `<h1> You Should Tip : $${tip} on $${cost.value} </h1>`;
  output.innerHTML = msg;
});

const msgBtn = document.querySelector(".msg");
const outputBtn = document.querySelector(".output-msg");
const nameInput = document.querySelector(".input-name");
// console.log("msg : " + msgBtn);
msgBtn.addEventListener("click", () => {
  outputBtn.innerHTML = `<h1>Hi ${nameInput.value}</h1>`;
});

// Greetings By Time of the day
const div = document.createElement("div");
div.setAttribute("class", ".greet-msg");
div.textContent = "This is the Output";
div.style.cssText =
  "font-size:2rem; font-weight:700; border:1px solid green; padding:1rem";
document.body.appendChild(div);

const msgButton = document.createElement("button");
// msgBtn.setAttribute("class", ".tip-calc");
msgBtn.classList.add(".tip-calc", ".greet-msg");
msgBtn.textContent = "Greetings";
document.body.appendChild(msgBtn);

const greetBtn = document.querySelector(".greet-msg");
console.log(greetBtn);
greetBtn.addEventListener("click", showOutput);

function showOutput() {
  const date = new Date();
  let currentHrs = date.getHours();
  let message;

  if (currentHrs > 17) {
    message = "Its Evening";
  } else if (currentHrs > 12) {
    message = "Its Afternoon";
  } else if (currentHrs > 0) {
    message = "Its Morning";
  } else {
    message = "Something went wrong";
  }
  div.innerHTML = `<h1>${message}</h1>`;
}
