// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// div to score results
divScore = document.createElement("div");
divScore.setAttribute("class", "message");
div.appendChild(divScore);

// Selection by Computer
p = document.createElement("p");
p.setAttribute("class", "output-comp output");
p.textContent = "Computer Selected :  ";
divScore.appendChild(p);

// Selection by Player
p1 = document.createElement("p");
p1.setAttribute("class", "output-player output");
p1.textContent = "Player Selected :  ";
divScore.appendChild(p1);

// Score
p2 = document.createElement("p");
p2.setAttribute("class", "output-score output");
p2.textContent = `Score :`;
divScore.append(p2);

// Winner
p3 = document.createElement("p");
p3.setAttribute("class", "winner output");
p3.textContent = "Winner : ";
divScore.append(p3);

// Button div
divBtns = document.createElement("div");
divBtns.setAttribute("class", "btns");
div.appendChild(divBtns);

// button - Rock
btnRock = document.createElement("button");
btnRock.setAttribute("class", "btn btn-rock");
btnRock.textContent = "Rock";
divBtns.appendChild(btnRock);

// button - Paper
btnPaper = document.createElement("button");
btnPaper.setAttribute("class", "btn btn-paper");
btnPaper.textContent = "Paper";
divBtns.appendChild(btnPaper);

// button - Scissors
btnScissors = document.createElement("button");
btnScissors.setAttribute("class", "btn btn-scissors");
btnScissors.textContent = "Scissors";
divBtns.appendChild(btnScissors);

const buttons = document.querySelectorAll("button");
// console.log(buttons);

const msgComp = document.querySelector(".output-comp");
const msgPlayer = document.querySelector(".output-player");
const msgScore = document.querySelector(".output-score");
const msgWinner = document.querySelector(".winner");

const itemArray = ["Rock", "Paper", "Scissors"];
let scores = [0, 0];

for (let i = 0; i < buttons.length; i++) {
  //   console.log(buttons[i]);
  buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
  //   console.log(e.target);
  //   console.log("Computer : " + coinArray[computerToss]);
  //   console.log("Player : " + e.target.innerText);

  //   let playerSelection = e.target.innerText;
  //   let computerToss = Math.floor(Math.random() * 3);
  //   let computerSelection = itemArray[computerToss];
  //   let output;
  let playerSelection = e.target.innerText;
  let computerSelection = Math.random().toFixed(2);
  let output;

  if (computerSelection < 0.34) {
    computerSelection = "Rock";
  } else if (computerSelection <= 0.67) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }
  console.log("Player : " + playerSelection);
  console.log("Computer : " + computerSelection);

  //   if (playerSelection === computerSelection) {
  //     // win
  //     output = "Player Wins";
  //     scores[0]++;
  //   } else {
  //     output = "Computer Wins";
  //     scores[1]++;
  //   }
  let result = checkWinner(playerSelection, computerSelection);
  console.log(result);

  msgComp.innerText = `Computer Selected : ${computerSelection}`;
  msgPlayer.innerText = `Player Selected : ${e.target.innerText}`;
  msgScore.innerText = `Player Score : ${scores[0]} Computer Score : ${scores[1]}`;
  msgWinner.innerText = result;
}

function checkWinner(player, computer) {
  if (player === computer) {
    return "Draw";
  }
  if (player === "Rock") {
    if (computer === "Paper") {
      scores[1]++;
      return "Computer";
    } else {
      scores[0]++;
      return "Player";
    }
  }
  if (player === "Paper") {
    if (computer === "Rock") {
      scores[0]++;
      return "Player";
    } else {
      scores[1]++;
      return "Computer";
    }
  }
  if (player === "Scissors") {
    if (computer === "Rock") {
      scores[1]++;
      return "Computer";
    } else {
      scores[0]++;
      return "Player";
    }
  }
}
