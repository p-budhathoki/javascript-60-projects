// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// heading
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Pattern Matching Game";
div.appendChild(h1);

// game div
gameDiv = document.createElement("div");
gameDiv.setAttribute("class", "game-area");
div.appendChild(gameDiv);

// button
button = document.createElement("button");
button.setAttribute("class", "btn btn-play");
button.setAttribute("enabled", "enabled");
button.innerHTML = "Start";
div.appendChild(button);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "message");
divMsg.textContent = "Press Start Button";
div.appendChild(divMsg);

let gameColors = ["red", "green", "blue", "yellow"];
const message = document.querySelector(".message");
const gameArea = document.querySelector(".game-area");
const buttonEl = document.querySelector(".btn-play");

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 2;

window.addEventListener("load", setup);
buttonEl.addEventListener("click", () => {
  //   console.log("Works");
  if (!inPlay) {
    player();
  }
});

function player() {
  buttonEl.disabled = true;
  buttonEl.style.display = "none";
  messenger("Match Pattern");
  gameClicks = [];
  userClicks = [];
  runSequence(playNum);
}

function runSequence(num) {
  let squares = document.querySelectorAll(".box");
  num--;
  if (num < 0) {
    inPlay = true;
    return;
  }
  let randomNum = Math.floor(Math.random() * gameColors.length);
  // console.log(randomNum)
  console.log(squares[randomNum]);
  gameClicks.push(gameColors[randomNum]);
  console.log(gameClicks);
  squares[randomNum].style.opacity = "1";

  setTimeout(() => {
    squares[randomNum].style.opacity = ".5";
    setTimeout(() => {
      runSequence(num);
    }, 100);
  }, 500);
}

function setup() {
  console.log("Page Loaded");

  // build elements
  for (let i = 0; i < gameColors.length; i++) {
    let div = eleFactory("div");
    div.style.backgroundColor = gameColors[i];
    div.classList.add("box");

    div.style.opacity = ".5";
    div.myColor = gameColors[i];
    div.addEventListener("click", checkAnswer);
    //   add newly created div inside game area
    gameArea.appendChild(div);
  }
}

function checkAnswer(e) {
  let el = e.target;
  console.log(el.myColor);

  if (inPlay) {
    userClicks.push(el.myColor);
    el.style.opacity = "1";

    setTimeout(() => {
      el.style.opacity = "0.5";
    }, 500);
    if (userClicks.length == gameClicks.length) {
      inPlay = false;
      endGame();
    }
  }
  console.log(userClicks);
}

function messenger(msg) {
  message.innerHTML = msg;
}

function endGame() {
  console.log("Game Over!");
  buttonEl.disabled = false;
  if (userClicks.toString() == gameClicks.toString()) {
    playNum++;
    console.log("Correct!");
    messenger("Correct!");
  } else {
    console.log("Not Correct!");
      messenger("Not Correct!");
  }
  buttonEl.style.display = "block";
}

// element factory function
function eleFactory(elType) {
  let ele = document.createElement(elType);
  return ele;
}
