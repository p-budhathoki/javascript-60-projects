const message = document.querySelector(".message");
const myInput = document.querySelector(".output input");
const btn = document.querySelector(".btn");
const game = { min: 1, max: 10 };

myInput.setAttribute("min", game.min);
myInput.setAttribute("max", game.max);

message.innerHTML = `Guess a number between ${game.min} and ${game.max}`;

game.randomNum = makeRandomNumber(game.min, game.max);
console.log(game.randomNum);

btn.addEventListener("click", btnClicked);

function start() {
  //   console.log(myInput.value);
  const val = Number(myInput.value);
  //   myInput.value = "";
  if (val == game.randomNum) {
    message.innerHTML = "Correct Guess!";
    message.style.color = "#85d890";
    btn.textContent = "Restart Game";
  } else if (val < game.randomNum) {
    message.innerHTML = `Too low! Guess a number between ${val + 1} and ${
      game.max
    }`;
    message.style.color = "#ea8d8d";
  } else {
    message.innerHTML = `Too high! Guess a number between ${game.max} and ${
      val - 1
    } `;
    message.style.color = "#9acde3";
  }
}

function makeRandomNumber(min, max) {
  return Math.floor(Math.random() * (game.max - game.min + 1) + game.min);
}

function btnClicked() {
    if (btn.textContent == "Restart Game") {
        start();
    } else {
        btn.textContent = "Guess"
        start();
    }
}