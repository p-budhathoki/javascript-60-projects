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
h1.textContent = "Hangman Game";
gameDiv.appendChild(h1);

// game play area
divGame = document.createElement("div");
divGame.setAttribute("class", "game");
gameDiv.appendChild(divGame);

// alphabets area
divAlpha = document.createElement("div");
divAlpha.setAttribute("class", "alphabets");
gameDiv.appendChild(divAlpha);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "stats score message");
divMsg.textContent = "Score : ";
div.appendChild(divMsg);

// button
button = document.createElement("button");
button.setAttribute("class", "btn btn-play");
button.setAttribute("type", "button");
button.innerHTML = "Start";
div.appendChild(button);

const message = document.querySelector(".message");
const gameEl = document.querySelector(".game");
const buttonEl = document.querySelector(".btn-play");
const alphabetsEl = document.querySelector(".alphabets");
const myWords = ["course", "overview", "notes", "reviews"];
// const myWords = ["course"];
let player = {};

buttonEl.addEventListener("click", () => {
  gameEl.innerHTML = "";
  alphabetsEl.innerHTML = "";

  if (myWords.length > 0) {
    buttonEl.style.display = "none";
    myWords.sort(() => {
      return 0.5 - Math.random();
    });
    let theWord = myWords.shift();
    player.solution = theWord.split("");
    buildBoard();
    //   console.log(theWord); // reviews
    //   console.log(myWords);
    //   console.log(player.solution);
  } else {
    message.innerText = "No more words";
  }
});

function buildBoard() {
  player.solution.forEach((letter) => {
    // console.log(letter);

    div = document.createElement("div");
    div.classList.add("letter-list");
    div.innerText = "_";
    div.myLetter = letter;
    gameEl.appendChild(div);
    // console.log("letter : " + letter); // r, e, v , i, e , w, s
  });

  alphabets();
}
function alphabets() {
  let solutionLetter = document.querySelectorAll(".letter-list");
  console.log(solutionLetter);
  //   create list of characters
  for (let i = 0; i < 26; i++) {
    let temp = String.fromCharCode(97 + i);
    // console.log(temp);

    div = document.createElement("div");
    div.classList.add("letter-all");
    div.myLetter = temp;

    let handler = function (event) {
      //   console.log(temp);
      event.target.removeEventListener("click", handler);
      // div.classList.add("hide");
      //   event.target.style.backgroundColor = "black";
      event.target.classList.add("done");
      let counter = 0;
      let guess = 0;
      solutionLetter.forEach((item) => {
        //   console.log(item);
        if (item.innerHTML != "_") {
          counter++;
        }
        if (item.myLetter === temp) {
          item.innerHTML = temp;
          guess++;
        }
      });
      if (guess > 0) {
        let mul = guess > 1 ? "times" : "time";
        message.innerText =
          "You found " + temp + " letter " + guess + " " + mul;
        console.log("You found " + guess + " letters");
        //   message.style.color = "green";
      } else {
        //   message.style.color = "red";
        let mes = "Not found";
      }
      let letterLeft = solutionLetter.length - (guess + counter);
    //   message.innerText = mes + "<br>" + letterLeft + " " + "Letter left";
      if (letterLeft < 1) {
        buttonEl.style.display = "block";
      }
    };
    div.addEventListener("click", handler);
    div.innerHTML = temp;
    alphabetsEl.appendChild(div);
  }
  // return temp;
}
