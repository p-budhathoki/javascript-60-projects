// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// div to score results
divScore = document.createElement("div");
divScore.setAttribute("class", "message");
div.appendChild(divScore);

// Winner
p3 = document.createElement("p");
p3.setAttribute("class", "winner output");
p3.textContent = "Winner : ";
divScore.append(p3);

// player div
playerDiv = document.createElement("div");
playerDiv.setAttribute("class", "player");
div.appendChild(playerDiv);

// player 1
player1Div = document.createElement("div");
player1Div.setAttribute("class", "player-1");
playerDiv.appendChild(player1Div);

// Heading player 1
p1Heading = document.createElement("h1");
p1Heading.textContent = "Player 1";
player1Div.appendChild(p1Heading);

// Score player 1
// p1Score = document.createElement("p");
// player1Div.appendChild(p1Score);

// player 2
player2Div = document.createElement("div");
player2Div.setAttribute("class", "player-2");
playerDiv.appendChild(player2Div);

// Heading player 2
p2Heading = document.createElement("h1");
p2Heading.textContent = "Player 2";
player2Div.appendChild(p2Heading);

// Score player 2
// p2Score = document.createElement("p");
// player2Div.appendChild(p2Score);

// Button div
divBtns = document.createElement("div");
divBtns.setAttribute("class", "btns");
div.appendChild(divBtns);

// button - Paper
diceRollBtn = document.createElement("button");
diceRollBtn.setAttribute("class", "btn btn-roll");
diceRollBtn.textContent = "Dice Roll";
divBtns.appendChild(diceRollBtn);

// select elements
const btnRoll = document.querySelector(".btn-roll");
// const player1 = document.querySelector(".player-1 p");
// const player2 = document.querySelector(".player-2 p");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const output = document.querySelector(".output");

// array of dots for dice
const dice = [
  [5],
  [1, 9],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 3, 4, 6, 7, 9],
];

btnRoll.addEventListener("click", () => {
  let rollDice = [roll(6), roll(6)];
  // console.log(rollDice)

  // Display Result
  updateResult(rollDice);

  // build dice
  let holder1 = builder(rollDice[0]);
  let holder2 = builder(rollDice[1]);

  // remove the dice from the past and replace it with the current
  if (player1.children[1]) {
    player1.children[1].remove();
  }
  player1.appendChild(holder1);

  if (player2.children[1]) {
    player2.children[1].remove();
  }
  player2.appendChild(holder2);
});

function builder(num) {
  let div = document.createElement("div");
  let dieArray = dice[num - 1]; // num -1 because array is 0 based and num is always greater than zero
  console.log(dieArray);

  for (let i = 1; i < 10; i++) {
    let span = document.createElement("div");
    span.setAttribute("class", "dot");

    if (dieArray.includes(i)) {
      span.classList.add("black");
      //   span.textContent = i;
    } else {
      //   span.classList.add("white");
    }
    div.appendChild(span);
  }
  div.setAttribute("class", "dicer");

  return div;
}

function updateResult(rollDice) {
  if (rollDice[0] === rollDice[1]) {
    result = "It's a Draw";
  } else if (rollDice[0] > rollDice[1]) {
    result = "Player 1 Won!";
  } else {
    result = "Player 2 Won!";
  }

  return (output.innerHTML = result);
}

function roll(num) {
  let rNumber = Math.floor(Math.random() * num) + 1;
  return rNumber;
}

// SOLUTION 1
// btnRoll.addEventListener("click", () => {
//   // console.log("Works")
//   let rolls = [roll(6), roll(6)];
//   let result;
//   console.log(rolls);

//   // Winner
//   if (rolls[0] === rolls[1]) {
//     result = "It was a Draw";
//   } else if (rolls[0] > rolls[1]) {
//     result = "Player 1 Won!";
//   } else {
//     result = "Player 2 Won!";
//   }

//   // Display results
//   output.innerHTML = result;
//   player1.innerHTML = rolls[0];
//   player2.innerHTML = rolls[1];
// });

// function roll(num) {
//   let rNumber = Math.floor(Math.random() * num) + 1;
//   // unicode character to display dice
//   let n = 9855 + rNumber;
//   let char = "&#" + n + ";";
//   return rNumber + " " + char;
// }

// SOLUTION 2
