// // create a new container div
// div = document.createElement("div");
// div.setAttribute("class", "container");
// document.body.appendChild(div);

// // heading
// h1 = document.createElement("h1");
// h1.setAttribute("class", "heading");
// h1.textContent = "Safe Cracker Game";
// div.appendChild(h1);

// // game div
// gameDiv = document.createElement("div");
// gameDiv.setAttribute("class", "game");
// div.appendChild(gameDiv);

// // button
// button = document.createElement("button");
// button.setAttribute("class", "btn btn-play");
// button.innerHTML = "Start";
// gameDiv.appendChild(button);

// // Result
// divMsg = document.createElement("h1");
// divMsg.setAttribute("class", "message hide");
// divMsg.textContent = "Score :";
// div.appendChild(divMsg);

// // Instructions
// p = document.createElement("p");
// p.setAttribute("class", "instruction");
// p.textContent =
//   "Instructions : Guess the combo. Blue means go higher while Red means go lower. Try to solve it in as little guesses as possible.";
// div.appendChild(p);

// const gameArea = document.querySelector(".game");
// const btnPlay = document.querySelector(".btn-play");
// const message = document.querySelector(".message");

const output = document.querySelector(".output");

const message = maker("h1", output, "Safe Cracker Game");
message.classList.add("heading");

const btn = maker("button", output, "Start Game");
btn.classList.add("btn");

const gameArea = maker("div", output, "");
gameArea.classList.add("game");
gameArea.appendChild(btn);

const scoreEl = maker("h1", output, "Score :");
scoreEl.classList.add("message");
scoreEl.classList.add("score");
// scoreEl.classList.add("hide");

const instructionsEl = maker(
  "p",
  output,
  "Instructions : Guess the combo. Blue means higher while Red means lower. Try to solve it in as little guesses as possible."
);
instructionsEl.classList.add("instruction");

btn.onclick = startGame;
const game = { combos: 3, arr: [] };

function startGame() {
  console.log("Start Game");
  //   btn.style.display = "none";
  btn.classList.add("hide");
  game.guesses = 0;
  // message.textContent = "Update the combos and press unlock"
  setUpGameBoard();
}

function setUpGameBoard() {
  const btn1 = maker("button", gameArea, "Unlock");
  btn1.classList.add("btn");
  for (let i = 0; i < game.combos; i++) {
    const ele = maker("input", gameArea, "");
    ele.classList.add("input-value");
    ele.classList.add("numb");
    ele.setAttribute("type", "number");
    ele.setAttribute("min", "0");
    ele.setAttribute("max", "9");
    ele.setAttribute("size", "1");

    const val = Math.floor(Math.random() * 9) + 1;
    game.arr.push(val);
  }
  btn1.onclick = checkCombo;
  console.log(game);
}

function checkCombo() {
  //   ele.value = Math.floor(Math.random() * 9) + 1;

  const userVal = document.querySelectorAll(".numb");
  let counter = 0;
  game.guesses++;
  userVal.forEach((el, ind) => {
    console.log(el.value, game.arr[ind]);
    if (el.value == game.arr[ind]) {
      el.style.backgroundColor = "green";
      el.style.border = "1px solid #000";
      counter++;
    } else {
      if (el.value > game.arr[ind]) {
        el.style.backgroundColor = "red";
        el.style.border = "1px solid #000";
      } else {
        el.style.backgroundColor = "blue";
        el.style.border = "1px solid #000";
      }
    }
  });

  if (counter >= userVal.length) {
    let buttonRem = endGame();
    // console.log(buttonrem[1]);
    // buttonRem[1].classList.add("hide");

    scoreEl.innerHTML =
      "The lock opens you got them correct" +
      "<br>" +
      "You guessed : " +
      game.guesses +
      " times";
  } else {
    scoreEl.innerHTML = `You got ${counter} correct!`;
  }
}

function endGame() {
  const btns = document.querySelectorAll(".btn");
  const userInput = document.querySelectorAll("input");

  btns[0].classList.remove("hide");
  btns[1].classList.add("hide");
  userInput.forEach((item) => {
    item.classList.add("hide");
  });

  //   btn.classList.add("hide");
  //   scoreEl.backgroundColor = "green";
}

function maker(eleTag, parent, html) {
  const el = document.createElement(eleTag);
  el.innerHTML = html;
  return parent.appendChild(el);
}
