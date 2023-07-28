const message = document.querySelector(".message");
const scoreOutput = document.querySelector(".score");
const badLeft = document.querySelector(".badLeft");
const btn = document.querySelector(".btn");
const basket = document.querySelector(".basket");
const gameArea = document.querySelector(".game-area");

btn.addEventListener("click", startGame);
document.addEventListener("keydown", presKeyOn);
document.addEventListener("keyup", presKeyOff);

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};
let player = { score: 0, totalBad: 0, inPlay: false, speed: 15 };
let boundBasket = basket.getBoundingClientRect();
// let boundContainer = container.getBoundingClientRect();
// console.log(boundContainer);

function startGame() {
  message.style.display = "none";
  //   btn.style.display = "none";
  basket.style.display = "block";

  btn.classList.add("hide");
  player.score = 0;
  player.inPlay = true;
  player.totalBad = 10;
  scoreUpdate();
  setupBadGuys(10);

  requestAnimationFrame(playGame);
}

function setupBadGuys(num) {
  for (let i = 0; i < num; i++) {
    makeBad();
  }
}
function makeBad() {
  if (player.totalBad > 0) {
    let temp = player.totalBad;
    player.totalBad--;
    scoreUpdate();

    let div = document.createElement("div");
    div.innerHTML = "#" + temp;
    div.classList.add("baddy");
    div.style.backgroundColor = randomColor();
    let randomHeight = Math.floor(Math.random() * 50) + 50;
    div.style.height = randomHeight + "px";
    div.style.borderRadius = Math.floor(Math.random() * 49 + 1) + "%";
    div.x = Math.floor(
      Math.random() * gameArea.getBoundingClientRect().width - 100
    );
    if (div.x < 0) {
      div.x = 100;
    }
    div.y = Math.floor(Math.random() * 500) * -1 - 200;
    div.speed = Math.ceil(Math.random() * 10) + 3;
    gameArea.appendChild(div);
    div.style.left = div.x + "px";
    div.style.top = div.y + "px";
  }
}

function playGame() {
  if (player.inPlay == true) {
    if (
      keys.ArrowDown &&
      boundBasket.y < gameArea.getBoundingClientRect().height - 60
    ) {
      boundBasket.y += player.speed;
    }
    if (keys.ArrowUp && boundBasket.y > 0) {
      boundBasket.y -= player.speed;
    }
    if (keys.ArrowLeft && boundBasket.x > 0) {
      boundBasket.x -= player.speed;
    }
    if (
      keys.ArrowRight &&
      boundBasket.x < gameArea.getBoundingClientRect().width - 100
    ) {
      boundBasket.x += player.speed;
    }

    basket.style.left = boundBasket.x + "px";
    basket.style.top = boundBasket.y + "px";

    requestAnimationFrame(playGame);

    let tempEnemy = document.querySelectorAll(".baddy");
    // console.log(tempEnemy);

    if (tempEnemy.length == 0) {
      endGame();
    } else {
      for (let i = 0; i < tempEnemy.length; i++) {
        bgMover(tempEnemy[i]);
      }
    }
  }
}

function endGame() {
  message.style.display = "block";
  message.textContent = "Game Over!";
  //   btn.style.display = "block";
  btn.classList.remove("hide");
  player.inPlay = false;
  basket.style.display = "none";
}

// tempEnemy.forEach((item, index) => {
//   tempEnemy[index].style.backgroundColor = randomColor();
// });

function bgMover(e) {
  e.y += e.speed;
  e.style.top = e.y + "px";

  if (e.y > gameArea.getBoundingClientRect().height - 150) {
    e.y = -100;
    e.x = Math.floor(
      Math.random() * gameArea.getBoundingClientRect().width - 100
    );
    if (e.x < 0) e.x = 100;
    e.style.left = e.x + "px";
  }
  if (isCollide(basket, e)) {
    player.score++;
    gameArea.removeChild(e);
    scoreUpdate();
    makeBad();
    console.log("hit");
  }
  e.style.top = e.y + "px";
}
function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();

  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}

function randomColor() {
  return "#" + Math.random().toString(16).substring(2, 8);
}

function scoreUpdate() {
  scoreOutput.textContent = player.score;
  badLeft.textContent = player.totalBad;
}
function presKeyOn(e) {
  e.preventDefault();
  //   console.log(e.key);
  keys[e.key] = true;
}
function presKeyOff(e) {
  e.preventDefault();
  //   console.log(e.key);
  keys[e.key] = false;
}
