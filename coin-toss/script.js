// create a new div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);
// div.textContent = "Container Div";
// div.style.cssText =
//   "font-size:2rem; font-weight:700; border:1px solid green; padding:1rem;";

divScore = document.createElement("div");
divScore.setAttribute("class", "message");
div.appendChild(divScore);

p = document.createElement("p");
p.setAttribute("class", "output-comp output");
p.textContent = "Computer Selected : ";
divScore.appendChild(p);

p1 = document.createElement("p");
p1.setAttribute("class", "output-player output");
p1.textContent = "Player Selected : ";
divScore.appendChild(p1);

p2 = document.createElement("p");
p2.setAttribute("class", "output-score output");
p2.textContent = `Score :`;
divScore.append(p2);

p3 = document.createElement("p");
p3.setAttribute("class", "winner output");
p3.textContent = "Winner : ";
divScore.append(p3);

divBtns = document.createElement("div");
divBtns.setAttribute("class", "btns");
div.appendChild(divBtns);

btnHead = document.createElement("button");
btnHead.setAttribute("class", "btn btn-head");
btnHead.textContent = "Head";
divBtns.appendChild(btnHead);

btnTail = document.createElement("button");
btnTail.setAttribute("class", "btn btn-tail");
btnTail.textContent = "Tail";
divBtns.appendChild(btnTail);

const buttons = document.querySelectorAll("button");
// console.log(buttons);

const msgComp = document.querySelector(".output-comp");
const msgPlayer = document.querySelector(".output-player");
const msgScore = document.querySelector(".output-score");
const msgWinner = document.querySelector(".winner");

const coinArray = ["Head", "Tail"];
let scores = [0, 0];

for (let i = 0; i < buttons.length; i++) {
  //   console.log(buttons[i]);
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  //   console.log(e.target);
  //   console.log("Computer : " + coinArray[computerToss]);
//   console.log("Player : " + e.target.innerText);

  let playerGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random() * 2);
  let computerGuess = coinArray[computerToss];
  let output;

  if (playerGuess === computerGuess) {
    // win
    output = "Player Wins";
    scores[0]++;
  } else {
    output = "Computer Wins";
    scores[1]++;
  }

  msgComp.innerText = `Computer Selected : ${computerGuess}`;
  msgPlayer.innerText = `Player Selected : ${e.target.innerText}`;
  msgScore.innerText = `Player Score : ${scores[0]} Computer Score : ${scores[1]}`;
  msgWinner.innerText = output;
}
