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

// joke result div
// const jokeDiv = document.createElement("div");
// jokeDiv.textContent = "Joke Result";
// jokeDiv.setAttribute("class", "joke-result");
// document.body.appendChild(jokeDiv);
// jokeDiv.style.fontSize = "3rem";

// Greetings Message
// const nameDiv = document.createElement("div");
// nameDiv.textContent = "Your Name";
// nameDiv.setAttribute("class", "input-name");
// nameDiv.style.classList.add("input-name");

const msgBtn = document.querySelector(".msg");
const outputBtn = document.querySelector(".output-msg");
const nameInput = document.querySelector(".input-name");
// console.log("msg : " + msgBtn);
msgBtn.addEventListener("click", () => {
  outputBtn.innerHTML = `<h1>Hi ${nameInput.value}</h1>`;
});
