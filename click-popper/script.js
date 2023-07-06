// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// game div
gameDiv = document.createElement("div");
gameDiv.setAttribute("class", "game-area");
div.appendChild(gameDiv);

// game div
mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main page");
gameDiv.appendChild(mainDiv);

// starter div
starterDiv = document.createElement("div");
starterDiv.setAttribute("class", "starter");
mainDiv.appendChild(starterDiv);

// button
btnLink = document.createElement("a");
btnLink.setAttribute("class", "btn newGame");
btnLink.textContent = "New Game";
starterDiv.appendChild(btnLink);

// heading
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Click Popper Game";
gameDiv.appendChild(h1);

// game page
pageDiv = document.createElement("div");
pageDiv.setAttribute("class", "game page");
gameDiv.appendChild(pageDiv);

// // stats
// statsDiv = document.createElement("div");
// statsDiv.setAttribute("class", "stats");
// statsDiv.textContent = "Game Stats";
// gameDiv.appendChild(statsDiv);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "stats message");
// divMsg.textContent = "Game Stats";
div.appendChild(divMsg);

const playArea = {};
const player = {};
let gameObj;

playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".game");
playArea.btns = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));
console.log(playArea);

document.addEventListener("DOMContentLoaded", getData);

playArea.btns.forEach((item) => {
  console.log(item);
  item.addEventListener("click", handleBtn);
});

function getData() {
  playArea.main.classList.add("visible");
  fetch("./game.json")
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      // console.log(data);
      gameObj = data.data;
      //   console.log(gameObj);

      buildBoard();
    });
  console.log("DOM loaded");
}

function updateScore() {
  playArea.scorer.innerHTML = `Score : ${player.score} Lives : ${player.items}`;
}

function buildBoard() {
  playArea.scorer = document.createElement("span");
  playArea.scorer.innerHTML = "Press Button to Start";
  playArea.stats.appendChild(playArea.scorer);
  // console.log("ready")
  let rows = 4;
  let cols = 4;
  let count = 0;

  playArea.game.style.width = cols * 100 + cols * 2;
  playArea.game.style.margin = "auto";

  for (let i = 0; i < cols; i++) {
    let divMain = document.createElement("div");
    divMain.setAttribute("class", "row");
    divMain.style.width = cols * 100 + cols * 2;
    for (let j = 0; j < rows; j++) {
      let div = document.createElement("div");
      div.setAttribute("class", "pop");
      count++;
      div.innerText = count;
      div.count = count;
      divMain.appendChild(div);
    }
    playArea.game.appendChild(divMain);
  }
}
function handleBtn(e) {
  //   console.log("Handle Btn");
  //   console.log(e.target.classList.contains("newGame"));
  if (e.target.classList.contains("newGame")) {
    // console.log("YES");
    startGame();
  }
}

function startGame() {
  player.score = 0;
  player.items = 3;
  playArea.main.classList.remove("visible");
  playArea.game.classList.add("visible");
  player.gameOver = false;
  startPop();
  updateScore();
  //   console.log("start game");
}

function randomUp() {
  const pops = document.querySelectorAll(".pop");
  const idx = Math.floor(Math.random() * pops.length);

  // filter out the duplicates
  if ((pops[idx].count = playArea.last)) {
    return randomUp();
  }
  playArea.last = pops[idx].count;
  return pops[idx];
}
function startPop() {
  let newPop = randomUp();
  console.log(newPop);

  newPop.classList.add("active");
  newPop.addEventListener("click", hitPop);

  const time = Math.round(Math.random() * 1500 + 750);
  const val = Math.floor(Math.random() * gameObj.length);

  newPop.old = newPop.innerText;
  newPop.v = gameObj[val].value;
  //   newPop.innerHTML = "HIT";
  newPop.innerHTML = gameObj[val].icon + "<br>" + gameObj[val].value;
  playArea.inPlay = setTimeout(() => {
    newPop.classList.remove("active");
    newPop.removeEventListener("click", hitPop);
    newPop.innerText = newPop.old;

    if (newPop.v > 0) {
      player.items--;
      updateScore();
    }
    if (player.items <= 0) {
      gameOver();
    }

    if (!player.gameOver) {
      startPop();
    }
  }, time);
}

function gameOver() {
  player.gameOver = true;
  playArea.main.classList.add("visible");
  playArea.game.classList.remove("visible");
  document.querySelector(".newGame").innerText = "Try Again";
}

function hitPop(e) {
  console.log(e.target);
  console.log(e.target.v);
  let newPop = e.target;
  player.score = player.score + newPop.v;
  updateScore();
  newPop.classList.remove("active");
  newPop.removeEventListener("click", hitPop);
  newPop.innerText = newPop.old;
  clearTimeout(playArea.inPlay);

  if (!player.gameOver) {
    startPop();
  }
}
