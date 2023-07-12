// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// game div
gameDiv = document.createElement("div");
gameDiv.setAttribute("class", "game-area");
div.appendChild(gameDiv);

// heading
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Car Game";
gameDiv.appendChild(h1);

// game play area
divGame = document.createElement("div");
divGame.setAttribute("class", "game");
gameDiv.appendChild(divGame);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "stats score message");
divMsg.textContent = "Score : ";
div.appendChild(divMsg);

// button
button = document.createElement("button");
button.setAttribute("class", "btn btn-play");
button.innerHTML = "Start";
div.appendChild(button);

const score = document.querySelector(".score");
const game = document.querySelector(".game");
const buttonEl = document.querySelector(".btn-play");
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};
let player = { speed: 5, score: 0 };

buttonEl.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function moveLines() {
  let lines = document.querySelectorAll(".line");
  lines.forEach(function (line) {
    // console.log(line.y);
    if (line.y >= 1500) {
      line.y -= 1500;
    }
    line.y += player.speed;
    line.style.top = line.y + "px";
  });
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

function moveEnemy(car) {
  let enem = document.querySelectorAll(".enemy");
  enem.forEach(function (item) {
    if (isCollide(car, item)) {
      console.log("Hit!");
      endGame();
    }
    // console.log(item.y);
    if (item.y >= 1500) {
      item.y = -600;
      item.style.left = Math.floor(Math.random() * 350) + "px";
      item.style.backgroundColor = randomColor();
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}

function playGame() {
  //   console.log("Inplay");
  let car = document.querySelector(".car");
  moveLines();
  moveEnemy(car);
  let road = game.getBoundingClientRect();

  //   console.log(player.x);
  if (player.start) {
    if (keys.ArrowUp && player.y > road.top - 88) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < road.bottom - 163) {
      player.y += player.speed;
    }
    if (keys.ArrowRight && player.x < road.width - 50) {
      player.x += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }

    car.style.left = player.x + "px";
    car.style.top = player.y + "px";
    window.requestAnimationFrame(playGame);
    player.score++;
    score.innerText = "Score : " + player.score;
  }
}

function pressOn(e) {
  e.preventDefault();
  //   console.log("On : " + e.key);
  keys[e.key] = true;
  //   console.log(keys);
}

function pressOff(e) {
  e.preventDefault();
  //   console.log("Off : " + e.key);
  keys[e.key] = false;
  //   console.log(keys);
}
function endGame() {
  player.start = false;
  score.innerHTML = "Game Over!" + " " + "Score : " + player.score;
  buttonEl.style.display = "block";
  score.classList.remove("hide");

  //   let lineEl = document.querySelector(".line");
  //   lineEl.classList.remove(".line");

  score.style.position = "absolute";
  score.style.left = "30%";
  score.style.top = "55%";
  score.style.color = "black";
}

function start() {
  // buttonEl.classList.add("hide");
  buttonEl.style.display = "none";
  score.classList.add("hide");

  //   game.innerHTML = "";
  player.start = true;
  player.score = 0;
  // lines on the road
  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.classList.add("line");
    div.y = i * 150;
    div.style.top = i * 150 + "px";
    game.appendChild(div);
  }
  window.requestAnimationFrame(playGame);

  let car = document.createElement("div");
  car.innerText = "Car";
  car.setAttribute("class", "car");
  game.appendChild(car);

  player.x = car.offsetLeft;
  player.y = car.offsetTop;
  //   console.log(player);

  for (let i = 0; i < 3; i++) {
    let enemyEl = document.createElement("div");
    enemyEl.classList.add("enemy");
    enemyEl.innerHTML = "<br>" + (i + 1);
    enemyEl.y = (i + 1) * 600 * -1;
    enemyEl.style.top = enemyEl.y + "px";
    enemyEl.style.left = Math.floor(Math.random() * 350) + "px";

    enemyEl.style.backgroundColor = randomColor();
    game.appendChild(enemyEl);
  }
}

function randomColor() {
  function hexValue() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    return "0" + String(hex).substring(-2);
  }
  return "#" + hexValue() + hexValue() + hexValue();
}
