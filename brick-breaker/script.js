const gameArea = document.querySelector(".game-area");
let gameAreaDim = gameArea.getBoundingClientRect();

const gameOver = document.createElement("div");
gameOver.setAttribute("class", "game-btn");
gameOver.textContent = "Start Game";
gameArea.appendChild(gameOver);

const ball = document.createElement("div");
ball.setAttribute("class", "ball");
gameArea.appendChild(ball);

const paddle = document.createElement("div");
paddle.setAttribute("class", "paddle");
gameArea.appendChild(paddle);

gameOver.addEventListener("click", startGame);

document.addEventListener("keydown", function (e) {
  // 37-left,38-top,39-right,40-down
  // console.log(e.keyCode);
  if (e.keyCode === 37) {
    paddle.left = true;
  }
  if (e.keyCode === 39) {
    paddle.right = true;
  }
  if (e.keyCode === 38 && !player.inPlay) {
    player.inPlay = true;
  }
});
document.addEventListener("keyup", function (e) {
  // 37-left,38-top,39-right,40-down
  // console.log(e.keyCode);
  if (e.keyCode === 37) {
    paddle.left = false;
  }
  if (e.keyCode === 39) {
    paddle.right = false;
  }
});

const player = { gameover: true };

function startGame() {
  // console.log("Start Game");
  if (player.gameover) {
    player.gameover = false;
    gameOver.style.display = "none";
    player.score = 0;
    player.lives = 3;
    player.inPlay = false;
    ball.style.display = "block";
    // ball.style.left = paddle.offsetLeft + "px";
    // ball.style.top = paddle.offsetTop + "px";
    player.ballDir = [2, -5];
    player.num = 30;

    setupBricks(player.num);
    scoreUpdater();
    //   moveBall()

    player.anim = window.requestAnimationFrame(update);
  }
}

function setupBricks(num) {
  let row = {
    x: (gameAreaDim.width % 100) / 2,
    y: 50,
  };
  let skip = false;
  for (let i = 0; i < num; i++) {
    console.log(row);
    if (row.x > gameAreaDim.width - 100) {
      row.y += 50;
      if (row.y > gameAreaDim.height / 2) {
        skip = true;
      }
      row.x = (gameAreaDim.width % 100) / 2;
    }
    row.count = i;
    if (!skip) {
      createBrick(row);
    }
    row.x += 100;
  }
}

function createBrick(pos) {
  const div = document.createElement("div");
  div.setAttribute("class", "brick");
  div.style.backgroundColor = randomColor();
  div.textContent = pos.count + 1;
  div.style.left = pos.x + "px";
  div.style.top = pos.y + "px";

  gameArea.appendChild(div);
}

function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();
  console.log(aRect);
  console.log(bRect);

  let temp1 = aRect.right < bRect.left || aRect.left > bRect.right;
  let temp2 = aRect.bottom < bRect.top || aRect.top > bRect.bottom;
  //   console.log(temp);
  return !(temp1 || temp2);
}

function randomColor() {
  return "#" + Math.random().toString(16).substring(2, 8);
}

function scoreUpdater() {
  document.querySelector(".score").textContent = player.score;
  document.querySelector(".lives").textContent = player.lives;
}

function update() {
  if (!player.gameover) {
    let paddleCurrentPos = paddle.offsetLeft;
    console.log(paddleCurrentPos);

    if (paddle.left && paddleCurrentPos > 0) {
      paddleCurrentPos -= 5;
    }

    if (
      paddle.right &&
      paddleCurrentPos < gameAreaDim.width - paddle.offsetWidth
    ) {
      paddleCurrentPos += 5;
    }

    paddle.style.left = paddleCurrentPos + "px";
    if (!player.inPlay) {
      waitingOnPaddle();
    } else {
      moveBall();
    }
    player.anim = window.requestAnimationFrame(update);
  }
}

function waitingOnPaddle() {
  ball.style.top = paddle.offsetTop - 20 + "px";
  ball.style.left = paddle.offsetLeft + 3 + "px";
}
function fallOff() {
  player.lives--;
  if (player.lives < 0) {
    endGame();
    player.lives = 0;
  }
  scoreUpdater();
  stopper();
}
function endGame() {
  gameover.style.display = "block";
  gameover.innerHTML = "Game Over! <br /> Your Score : " + player.score;
  player.gameover = true;
  ball.style.display = "none";
  let tempBricks = document.querySelectorAll(".brick");
  for (let tBrick of tempBricks) {
    tBrick.parentNode.removeChild(tBrick);
  }
}
function stopper() {
  player.inPlay = false;
  player.ballDir[(0, -5)];
  waitingOnPaddle();
  window.cancelAnimationFrame(player.anim);
}

function moveBall() {
  let posBall = {
    x: ball.offsetLeft,
    y: ball.offsetTop,
  };

  if (posBall.y > gameAreaDim.height - 20 || posBall.y < 0) {
    if (posBall.y > gameAreaDim.height - 20) {
      fallOff();
    } else {
      player.ballDir[1] *= -1;
    }
  }

  if (posBall.x > gameAreaDim.width - 20 || posBall.x < 0) {
    player.ballDir[0] *= -1;
  }

  if (isCollide(paddle, ball)) {
    console.log("Hit");
    let temp = (posBall.x - paddle.offsetLeft - paddle.offsetWidth / 2) / 10;
    player.ballDir[0] = temp;
    player.ballDir[1] *= -1;
  }

  let bricks = document.querySelectorAll(".brick");
  if (bricks.length == 0 && !player.gameover) {
    stopper();
    setupBricks(player.num);
  }
  for (let tBrick of bricks) {
    if (isCollide(tBrick, ball)) {
      player.ballDir[1] *= -1;
      tBrick.parentNode.removeChild(tBrick);
      player.score++;
      scoreUpdater();
    }
  }
  posBall.x += player.ballDir[0];
  posBall.y += player.ballDir[1];

  ball.style.left = posBall.x + "px";
  ball.style.top = posBall.y + "px";
}
