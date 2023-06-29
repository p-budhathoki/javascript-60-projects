// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// heading
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Safe Cracker Game";
div.appendChild(h1);

// game div
gameDiv = document.createElement("div");
gameDiv.setAttribute("class", "game");
div.appendChild(gameDiv);

// button
button = document.createElement("button");
button.setAttribute("class", "btn btn-play");
button.innerHTML = "Start";
gameDiv.appendChild(button);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "message hide");
divMsg.textContent = "Score :";
div.appendChild(divMsg);

// Instructions
p = document.createElement("p");
p.setAttribute("class", "instruction");
p.textContent =
  "Instructions : Guess the combo. Blue means higher while Red means lower. Try to solve it in as little guesses as possible.";
div.appendChild(p);

const gameArea = document.querySelector(".game");
const btnPlay = document.querySelector(".btn-play");
const message = document.querySelector(".message");
console.log("message: " + message);
let gamePlay = false;
let score = 0;

btnPlay.addEventListener("click", () => {
  if (!gamePlay) {
    gamePlay = true;
    score = 0;
    // gameArea.innerHTML = "";

    //   input for combinations
    maker();
    btnPlay.innerHTML = "Check Combo";
  } else {
    // console.log("checker");
    score++;
    message.classList.remove("hide");
    message.classList.add("message");
    message.textContent = "Guesses : " + score;

    console.log("Guesses : " + score);
    let winCondition = 0;
    const numbers = document.querySelectorAll(".numb");
    console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i].value + " " + typeof numbers[i].value); // string
      console.log(numbers[i].correct + " " + typeof numbers[i].correct); // number
      if (parseInt(numbers[i].value) === numbers[i].correct) {
        console.log("Match");
        winCondition++;
        numbers[i].style.backgroundColor = "yellowgreen";
        numbers[i].style.color = "whitesmoke";
      } else {
        console.log("No Match");
        let color =
          parseInt(numbers[i].value) < numbers[i].correct ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "black";
      }
      if (winCondition == numbers.length) {
        gameEnd();
        console.log("Game Over");
      }
    }
  }
});

function gameEnd() {
  message.innerHTML = "You solved the combo in : " + score + " guesses";
  gamePlay = false;
  button.innerHTML = "Restart Game";
}

function maker() {
  for (let i = 0; i < 4; i++) {
    let el = document.createElement("input");
    console.log(el);
    el.setAttribute("type", "number");
    el.setAttribute("class", "input-value ");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.order = i;
    el.classList.add("numb");
    el.correct = Math.floor(Math.random() * 10);
    // el.value = el.correct;
    el.value = 0;

    console.log(el);
    gameArea.appendChild(el);
  }
}
