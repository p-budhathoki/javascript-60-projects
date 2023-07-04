// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// heading
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Word Scramble";
div.appendChild(h1);

// game div
gameDiv = document.createElement("div");
gameDiv.setAttribute("class", "game");
div.appendChild(gameDiv);

// input
gameInput = document.createElement("input");
gameInput.setAttribute("type", "text");
gameInput.setAttribute("class", "input-value");
gameDiv.appendChild(gameInput);

// button
button = document.createElement("button");
button.setAttribute("class", "btn btn-play");
button.innerHTML = "Start";
gameDiv.appendChild(button);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "message hide");
divMsg.textContent = "Result :";
div.appendChild(divMsg);

// select elements
const message = document.querySelector(".message");
const guess = document.querySelector(".input-value");
const buttonEl = document.querySelector(".btn-play");
let inplay = false;
let scramble = "";
let score = 0;
const myArray = [
  "The",
  "only",
  "true",
  "wisdom",
  "is",
  "in",
  "knowing",
  "you",
  "know",
  "nothing",
];

buttonEl.addEventListener("click", () => {
  //   console.log("clicked");
  if (!inplay) {
    inplay = true;
    score = 0;
    buttonEl.innerHTML = "Guess";
    // guess.style.display = "none";
    guess.classList.toggle("hide");
    scramble = createWord();
    let scrambled = randomArray(scramble.split("")).join("");
    message.classList.remove("hide");
    console.log("scramble : " + scramble + " " + "scrambled : " + scrambled);
    message.innerHTML = scramble + " " + scrambled;
    // console.log(createWord());
    // guess.classList.remove("hide");
  } else {
    let tempGuess = guess.value;
    score++;
    if (tempGuess === scramble) {
      console.log("Correct");
      inplay = false;
      message.innerHTML =
        "Correct it was " + scramble + "It took " + score + " guesses";
      button.innerHTML = "Start";
      guess.classList.toggle("hide");
    } else {
      console.log("Guess Again");
      // message.innerHTML = "Wrong Guess" + scrambled;
    }
  }
});

function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];
  //   console.log("index : " + randomIndex + " " + "word : " + tempWord);
  // console.log(tempWord.split(""));
  // use split function to turn the word into an array
  // let randArr = randomArray(tempWord.split(""));
  // console.log("randArr : " + randArr);
  // console.log(randArr.join(" "));
  // return randArr;
  return tempWord;
}

function randomArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    console.log("temp : " + temp);
    let j = Math.floor(Math.random() * (i + 1));
    console.log("i : " + i + " " + "j : " + j);
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
