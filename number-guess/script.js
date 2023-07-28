// const output = document.querySelector(".output");
// const message = document.querySelector(".message");
// const guessInput = document.querySelector("input");
// const btn = document.querySelector("button");
let game = { min: 1, max: 10 };

document.addEventListener("DOMContentLoaded", () => {
  console.log("ready");
  game.output = document.querySelector(".output");
  game.message = document.querySelector(".message");
  game.guessInput = document.querySelector("input");
  game.btn = document.querySelector("button");

  game.btn.addEventListener("click", guessValue);
  init();
});

function guessValue() {
  if (game.btn.innerText === "Restart Game") {
    init();
      game.btn.innerText = "Guess";
  game.guessInput.disabled = false;
      
   
  }
  game.guess++;
  let tempGuess = game.guessInput.value;
  game.guessInput.value = "";
  tempGuess = parseInt(tempGuess);
  console.log(tempGuess);

  if (isNaN(tempGuess)) {
    message(
      "Digits Only! <br>" +
        "Guess a number from " +
        game.min +
        " to " +
        game.max,
      "red"
    );
    game.guessInput.style.borderColor = "red";
  } else if (tempGuess === game.num) {
    message(
      "Correct Guess! <br>" +
        "You guessed " +
        game.num +
        "," +
        " in " +
        game.guess +
        " guesses.",
      "green"
    );
    game.guessInput.style.borderColor = "green";

    gameOver();
  } else {
    let holder =
      tempGuess > game.num
        ? { c: "blue", m: "Is Lower" }
        : { c: "purple", m: "Is Higher" };

    message("Not Correct! <br>" + "The number " + holder.m, holder.c);
    game.guessInput.style.borderColor = holder.c;

    // message("Not Correct! <br>" + "The number was " + game.num, "black");
    // game.guessInput.style.borderColor = "red";
  }
}

function gameOver() {
  game.btn.innerHTML = "Restart Game";
  game.guessInput.disabled = true;
  tempMsg =
    "Welcome to the Game! <br>" +
    "Guess a number from " +
    game.min +
    " to " +
    game.max;
  message(tempMsg, "black");
  game.max += 5;
}

function init() {
  game.guess = 0;
  game.num = randomNumber(game.min, game.max);
  console.log(game.num);
  tempMsg =
    "Welcome to the Game! <br>" +
    "Guess a number from " +
    game.min +
    " to " +
    game.max;
  message(tempMsg, "black");
}

function message(msg, clr) {
  game.message.innerHTML = msg;
  game.message.style.color = clr || "black";
  game.message.style.backgroundColor = "whitesmoke";
  //   game.guessInput.style.backgroundColor = clr || "black";
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
