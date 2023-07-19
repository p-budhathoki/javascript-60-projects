const headingEl = document.querySelector(".heading");
const score = document.querySelector(".score");
const gameArea = document.querySelector(".game-area");
const message = document.querySelector(".message");

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
document.addEventListener("click", start);

let player = {
  score: 0,
  speed: 2,
  inPlay: false,
};
let keys = {
  space: false,
};

// message.innerHTML = "Score : " + player.score;

function start() {
  //   message.classList.add("hide");
  //   headingEl.classList.add("hide");
  if (!player.inPlay) {
    gameArea.innerHTML = "";
    player.level = 10;
    makeEnemy();
    player.inPlay = true;
    player.score = 2000;
    player.totalBombs = 6;
    player.ready = true;
    player.activeBomb = 0;
    player.bombScore = 0;
    player.plane = document.createElement("div");
    player.plane.setAttribute("class", "plane");
    gameArea.appendChild(player.plane);
    window.requestAnimationFrame(playGame);

    player.x = player.plane.offsetLeft;
    player.y = player.plane.offsetTop;
  }
}

function endGame() {
  player.inPlay = false;
//   message.classList.remove("hide");
}

function makeEnemy() {
  player.level--;
  if (player.level < 0) {
    endGame();
  } else {
    player.base = document.createElement("div");
    player.base.setAttribute("class", "base");
    player.base.style.width = Math.floor(Math.random() * 200) + 10 + "px";
    player.base.style.height = Math.floor(Math.random() * 100) + 10 + "px";
    player.base.style.left =
      Math.floor(Math.random() * (gameArea.offsetWidth - 200)) + 100 + "px";
    gameArea.appendChild(player.base);
  }
}

function playGame() {
  if (player.inPlay) {
    // gameArea.offsetHeight = 576
    // gameArea.offsetLeft = 0
    // gameArea.offsetTop = 0
    // gameArea.offsetWidth = 860

    moveBomb();
    if (keys.space) {
      makeBomb();
    }

    if (keys.ArrowUp && player.y > 0) {
      player.y -= player.speed;
      // console.log("keyUp (player.y) : "+ player.y);
    }
    if (keys.ArrowDown && player.y < gameArea.offsetHeight - 50) {
      player.y += player.speed;
    }
    if (keys.ArrowRight && player.x < gameArea.offsetWidth - 80) {
      player.x += player.speed;
    }
    if (keys.ArrowLeft && player.x > gameArea.offsetLeft) {
      player.x -= player.speed;
    }

    player.x += player.speed * 2;
    if (player.x > gameArea.offsetWidth - 80) {
      player.x = 0;
      player.score -= 100;
    }

    player.score--;
    if (player.score < 0) {
      player.score = 0;
    }

    // update the position of the player plane
    player.plane.style.left = player.x + "px";
    player.plane.style.top = player.y + "px";

    window.requestAnimationFrame(playGame);
    message.innerHTML = "Score : " + player.score;
  }
}

console.log(player.score);
function pressOn(e) {
  e.preventDefault();
  let tempKey = e.key == " " ? "space" : e.key;
  keys[tempKey] = true;

  //   console.log(keys);
}
function pressOff(e) {
  e.preventDefault();
  let tempKey = e.key == " " ? "space" : e.key;
  keys[tempKey] = false;
  //   console.log(keys);
  //   console.log(e);
}

function makeBomb() {
  console.log("making");
  if (player.ready &&(player.activeBomb < player.totalBombs)) {
    player.score -= 300;
    player.bombScore++;
    player.activeBomb++;

    let bomb = document.createElement("div");
    bomb.classList.add("bomb");
    // bomb.innerHTML = player.activeBomb;
    bomb.innerHTML = player.bombScore;

    bomb.x = player.x;
    bomb.y = player.y;
    bomb.style.left = bomb.x + "px";
    bomb.style.top = bomb.y + "px";
    gameArea.appendChild(bomb);
    player.ready = false;

    setTimeout(() => {
      player.ready = true;
    }, 500);
  }
}

function moveBomb() {
  let bombs = document.querySelectorAll(".bomb");
  bombs.forEach((item) => {
    item.y += 5;
    item.style.top = item.y + "px";

    if (item.y > 550) {
      player.activeBomb--;
      item.parentElement.removeChild(item);
    }

    if (isCollide(item, player.base)) {
      // console.log("crash");
        player.score += 2000;
        player.activeBomb--;
      player.base.parentElement.removeChild(player.base);
      item.parentElement.removeChild(item);
      makeEnemy();
    }
  });
}

function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();
  console.log(aRect);

  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
