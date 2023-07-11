window.addEventListener("load", init);

function init() {
  console.log("ready");
}
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
h1.textContent = "Word Guessing Game";
gameDiv.appendChild(h1);

// game play area
divGame = document.createElement("div");
divGame.setAttribute("class", "game hide");
gameDiv.appendChild(divGame);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "stats message");
divMsg.textContent = "Game Stats";
div.appendChild(divMsg);

// button
button = document.createElement("button");
button.setAttribute("class", "btn btn-play");
button.innerHTML = "Start";
gameDiv.appendChild(button);

const myWords = [
  "fixed",
  "patterns",
  "incapable",
  "adaptability",
  "pliability",
  "truth",
  "outside",
];
let cur = 0;
let startTime;

const buttonEl = document.querySelector(".btn-play");
const gameEl = document.querySelector(".game");
buttonEl.addEventListener("click", start);

// start function
function start() {
  cur = 0;
  startTime = Date.parse(new Date());
  console.log(startTime);
  buttonEl.style.display = "none";
  gameEl.classList.remove("hide");

  message("Select this Word");

  let tempArr = myWords.slice(0);
  tempArr.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(`Before Sorting :`);
  console.log(myWords);
  // Sorted words have 50/50 chance of being sorted
  myWords.sort((a, b) => {
    return 0.5 - Math.random();
  });
  console.log(`After Sorting :`);
  console.log(myWords);

  // use forEach and display each word as array using split
  tempArr.forEach((word) => {
    let temp = word.split("");
    temp.sort((a, b) => {
      return 0.5 - Math.random();
    });
    let temp1 = temp.join("");
    console.log("temp1 :");
    console.log(temp1);
    console.log("temp :");
    console.log(temp);

    let div = document.createElement("div");
    div.innerText = "Select";
    div.classList.add("box");
    div.word = word;
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "steelblue";
      div.innerText = temp1;
    });
    div.addEventListener("mouseleave", () => {
      div.style.backgroundColor = "transparent";
      div.innerText = "Select";
    });
    div.addEventListener("click", () => {
      console.log(word);
      if (div.word === myWords[cur]) {
        cur++;
        nextWord();
        console.log("Correct");
        this.classList.add("hide");
      } else {
        console.log("Incorrect");
      }
    });
    gameEl.appendChild(div);
  });
  nextWord();
}
function nextWord() {
  //   console.log(cur);
  if (cur >= myWords.length) {
    let endTime = Date.parse(new Date());
    let duration = (endTime - startTime) / 1000;
    gameEl.innerHTML = "";
    buttonEl.style.display = "block";
    message("Game Over!" + duration + " seconds");
  } else {
    message("Select this Word :" + " " + myWords[cur]);
  }
}

// output message function
function message(output) {
  document.querySelector(".message").innerHTML = output;
}
