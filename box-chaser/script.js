let box = {};
const scoreEl = document.querySelector(".score");
const gameAreaEl = document.querySelector(".game-area");
const gameArea = gameAreaEl.getBoundingClientRect();

let squares = [];
let gameBox = {
  x: Math.floor(gameArea.width / 100),
  y: Math.floor(gameArea.height / 100),
};

let player = {
  speed: 100,
  square: 1,
  score: 0,
};

console.log(gameBox);

document.addEventListener("DOMContentLoaded", build);
document.addEventListener("keyup", (e) => {
  // console.log(e);
  const allowKey = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
  };
  //   console.log(allowKey[e.keyCode]);

  if (allowKey[e.keyCode]) {
    handleKeyPress(allowKey[e.keyCode]);
  }
});

function makeActive() {
  let randomIndex = Math.floor(Math.random() * squares.length);
  if (randomIndex != 0 && player.square != randomIndex) {
    console.log(squares[randomIndex]);
    squares[randomIndex].classList.add("active");
  } else {
    makeActive();
  }
}

function handleKeyPress(key) {
  //   console.log(key);
  if (key === "left" && box.x > gameArea.left) {
    box.x -= player.speed;
    player.square--;
  }
  if (key === "right" && box.x < gameArea.right - box.offsetWidth) {
    box.x += player.speed;
    player.square++;
  }
  if (key === "down" && box.y < gameArea.bottom - box.offsetHeight) {
    box.y += player.speed;
    player.square += gameBox.x;
  }
  if (key === "up" && box.y > gameArea.top) {
    box.y -= player.speed;
    player.square -= gameBox.x;
  }

  box.style.left = box.x + "px";
  box.style.top = box.y + "px";
  //   console.log(player.square);

  if (squares[player.square].classList.contains("active")) {
    console.log("Found");
    squares[player.square].classList.remove("active");
      makeActive();
      player.score++;
      scoreEl.innerHTML = "Score : "+ player.score;
  }
}

function build() {
  box = document.createElement("div");
  box.classList.add("box");
  box.x = gameArea.top;
  box.y = gameArea.left;

  box.style.top = box.y + "px";
  box.style.left = box.x + "px";
  console.log("Box style top : " + box.style.top);
  console.log("Box style left : " + box.style.left);
  gameAreaEl.appendChild(box);
  console.log(box);

  let counter = 1;
  for (let y = 0; y < gameBox.y; y++) {
    for (let x = 0; x < gameBox.x; x++) {
      squares[counter] = document.createElement("div");
      squares[counter].innerHTML = counter;
      squares[counter].classList.add("square");
      gameAreaEl.appendChild(squares[counter]);
      counter++;
    }
  }
  makeActive();
  //   console.log(squares);
}
