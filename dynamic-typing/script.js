// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// div
divEditor = document.createElement("div");
divEditor.setAttribute("class", "message");
div.appendChild(divEditor);

// Heading
p = document.createElement("p");
p.setAttribute("class", "msg-speed");
p.textContent = "Speed : 85 words per minute";
divEditor.append(p);

p = document.createElement("p");
p.setAttribute("class", "msg-accuracy");
p.textContent = "Accuracy : 9 correct out of 13 words";
divEditor.append(p);

p = document.createElement("p");
p.setAttribute("class", "msg-show");
p.textContent = "Quotes goes here";
divEditor.append(p);

// div
divText = document.createElement("div");
divText.setAttribute("class", "note");
div.appendChild(divText);

// textarea
textarea = document.createElement("textarea");
// textarea.textContent = "Start Typing here...";
textarea.setAttribute("type", "text");
textarea.setAttribute("disabled", "disabled");
textarea.setAttribute("title", "");
textarea.setAttribute("placeholder", "Start typing here...");
textarea.setAttribute("class", "text-content");
divText.append(textarea);

// Button
button = document.createElement("button");
button.setAttribute("class", "btn btn-submit");
button.setAttribute("type", "submit");
button.textContent = "Start";
divText.append(button);

// get elements and buttons
const typingSpeed = document.querySelector(".msg-speed");
const accuracy = document.querySelector(".msg-accuracy");
const msgShow = document.querySelector(".msg-show");
const btnStart = document.querySelector(".btn-submit");
const playText = document.querySelector(".text-content");
let startTime, endTime;
const wording = [
  "Where you are is a result of who you were, but where you go depends entirely on who you choose to be - Hal Elrod",
  "Be mindful of actions. Express your fully engaged attentiveness like a cat when it stalks a mouse. The cat crouches with the spirit of its whole being focused on the task at hand. Mental involvement in the actions being performed engages the whole being in the exercise, producing far greater results than merely performing them through repetition - Dave Richardson",
  "Be clear about your intentions, thoughtful in your choices, simple in your desires and content in your days. Life will present us with enough challenges. We don't need to set ourselves up for more by fueling expectations or living rigidly - Mark Sisson",
];

btnStart.addEventListener("click", () => {
  //   console.log(btnStart.innerText);
  // enable the textarea if the start is displayed in the button
  if (btnStart.innerText == "Start") {
    playText.disabled = false;
    playGame();
  } else if (btnStart.innerText == "Done") {
    playText.disabled = true;
    btnStart.innerText = "Start";
    endPlay();
  }
});

function wordCounter(strWords) {
  let response = strWords.split(" ").length;
  console.log(response);
  return response;
}

function playGame() {
  let randomNum = Math.floor(Math.random() * wording.length);
  console.log(randomNum);
  msgShow.innerText = wording[randomNum]; // displays the text on the screen which should be typed in textarea

  // get the system time
  let date = new Date();
  startTime = date.getTime();
  console.log(startTime);
  btnStart.innerText = "Done";
}

function endPlay() {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);
  let str = playText.value; // this is the texts entered by the user on textarea
  let wordCount = wordCounter(str);
  let speed = Math.round((wordCount / totalTime) * 60);
  //   console.log("Speed : " + speed);
  typingSpeed.textContent = "Speed : " + speed + " words per minute";

  compareWords(msgShow.textContent, playText.value);

  if (str !== msgShow.innerText) {
    typingSpeed.textContent = `
    Speed : ${speed}  words per minute.
    There were some errors in the wording`;
  }
  // count words
  // divide by total time words/per minute
  // output final message to player
}

function compareWords(str1, str2) {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;
  words1.forEach(function (item, index) {
    console.log(item, words2[index]);
    if (item == words2[index]) {
      count++;
    }
  });
  accuracy.innerText = `${count} correct out of ${wordCounter(str1)} words`;
}
