const buttonStart = document.querySelector(".btn");
const myShip = document.querySelector(".myShip");
const gameArea = document.querySelector(".game-area");
const fireMe = document.querySelector(".fireme");
const scoreOutput = document.querySelector(".score");
const message = document.querySelector(".message");

const gameAreaDim = gameArea.getBoundingClientRect();
console.log(gameAreaDim);

buttonStart.addEventListener("click", startGame);
let player = {
  score: 0,
  speed: 5,
  gameOver: true,
  fire: false,
  alienSpeed: 5,
};
let keyV = {};

document.addEventListener("keydown", (e) => {
  let key = e.keyCode;

  if (key === 37) {
    // left arrow key
    keyV.left = true;
  } else if (key === 39) {
    // right arrow key
    keyV.right = true;
  } else if (key === 38 || key === 32) {
    // 38 up arrow, 32 space
    // player.fire = true;
    if (!player.fire) {
      addShoot();
    }
  }
  console.log(keyV);
});
document.addEventListener("keyup", (e) => {
  let key = e.keyCode;

  if (key === 37) {
    keyV.left = false;
  } else if (key === 39) {
    keyV.right = false;
  }

  console.log(keyV);
});

function gameOver() {
  //   buttonStart.style.display = "inline-block";
  //   buttonStart.style.left = "-500px";
  buttonStart.classList.remove("hide");
  //   message.classList.remove("hide");

  buttonStart.innerHTML = "Restart New Game";
  buttonStart.style.transform = "translateX(110%)";
  // transform: translateX(110%)
  player.fire = true;
  fireMe.classList.add("hide");
}
function clearAliens() {
  let tempAliens = document.querySelectorAll(".alien");
  for (let i = 0; i < tempAliens.length; i++) {
    tempAliens[i].parentNode.removeChild(tempAliens[i]);
  }
}

function startGame() {
  // console.log("start game");
  if (player.gameOver) {
    clearAliens();
    player.gameOver = false;
    buttonStart.classList.add("hide");
    message.classList.add("hide");
      player.alienSpeed = 15;
      player.score = 0;
      player.fire = false;
      scoreOutput.textContent = player.score;
      setupAliens(5);
    //   messageOutput("Start game");

    player.animFrame = requestAnimationFrame(update);
  }
}

function setupAliens(num) {
  let tempWidth = 100;
  //   let lastCol = gameAreaDim.width - 200;
  let lastCol = gameAreaDim.width - tempWidth;
  let row = {
    // x: (lastCol % 100) / 2,
    x: gameAreaDim.left + 50,
    y: 50,
  };
  for (let i = 0; i < num; i++) {
    if (row.x > lastCol - tempWidth) {
      row.y += 70;
      //   row.x = (lastCol % 100) / 2;
      row.x = gameAreaDim.left + 50;
    }
    alienMaker(row, tempWidth);
    row.x += tempWidth + 20;
  }
}
function randomColor() {
  return "#" + Math.random().toString(16).substring(2, 8);
}
function alienMaker(row, tempWidth) {
  console.log(row);
  let div = document.createElement("div");
  div.classList.add("alien");
  div.style.backgroundColor = randomColor();

  let eye1 = document.createElement("span");
  eye1.classList.add("eye");
  eye1.style.left = "1rem";
  div.appendChild(eye1);

  let eye2 = document.createElement("span");
  eye2.classList.add("eye");
  eye2.style.right = "1rem";
  div.appendChild(eye2);

  let mouth = document.createElement("span");
  mouth.classList.add("mouth");
  mouth.style.left = "1.7rem";
  div.appendChild(mouth);

  div.style.width = tempWidth + "px";
  div.xpos = Math.floor(row.x);
  div.ypos = Math.floor(row.y);
  div.style.left = div.xpos + "px";
  div.style.top = div.ypos + "px";
  div.directionMove = 1;
  gameArea.appendChild(div);
  console.log(div);
}

function addShoot() {
  player.fire = true;
  fireMe.classList.remove("hide");
  fireMe.xpos = myShip.offsetLeft + myShip.offsetWidth / 2 - 10;
  fireMe.ypos = myShip.offsetTop - 10;
  fireMe.style.left = fireMe.xpos + "px";
  fireMe.style.top = fireMe.ypos + "px";
}

function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();
  return (
    !(aRect.bottom < bRect.top) ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
function messageOutput(mes) {
  message.innerHTML = mes;
}

function update() {
  if (!player.gameOver) {
    let tempAliens = document.querySelectorAll(".alien");
    console.log(tempAliens);
    if (tempAliens.length == 0) {
      player.gameOver = true;
      console.log("You Won!");
    //   messageOutput("You Won!");
      gameOver();
    }
    for (let i = tempAliens.length - 1; i > -1; i--) {
      let el = tempAliens[i];

      if (isCollide(el, fireMe)) {
        console.log("Hit!");
        // messageOutput("Hit!");
        player.alienSpeed++;
        player.score++;
        scoreOutput.textContent = player.score;
        player.fire = false;
        fireMe.classList.add("hide");
        el.parentNode.removeChild(el);
        fireMe.ypos = gameAreaDim.height + 100;
      }

      if (
        el.xpos > gameAreaDim.width - el.offsetWidth ||
        el.xpos < gameAreaDim.left
      ) {
        el.directionMove *= -1;
        el.ypos += 40;
        if (el.ypos > myShip.offsetTop - 20) {
          console.log("Game OVer");
          player.gameOver = true;
          gameOver();
        }
      }
      // el.directionMove = 1;
      el.xpos += player.alienSpeed * el.directionMove;
      el.style.left = el.xpos + "px";
      el.style.top = el.ypos + "px";
    }

    let tempPos = myShip.offsetLeft;
    console.log(tempPos);

    if (player.fire) {
      if (fireMe.ypos > 0) {
        fireMe.ypos -= 15;
        fireMe.style.top = fireMe.ypos + "px";
      } else {
        player.fire = false;
        fireMe.classList.add("hide");
        // fireMe.style.top = gameAreaDim.height + 100;
        fireMe.ypos = gameAreaDim.height + 100;
      }
    }

    if (keyV.left && tempPos > 0) {
      // gameAreaDim.left- myShip.offsetLeft - 340
      tempPos -= player.speed;
    }
    if (keyV.right && tempPos < gameAreaDim.width - 100) {
      //+ myShip.offsetWidth < gameAreaDim.right - 360
      tempPos += player.speed;
    }
    myShip.style.left = tempPos + "px";
    player.animFrame = requestAnimationFrame(update);
  }
}
