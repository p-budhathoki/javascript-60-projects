const message = document.querySelector(".message");
const buttonEl = document.querySelector(".btn");
const gameArea = document.querySelector(".gameArea");

let inPlay = false;
let playArea = {};
let startTime;

messenger("Click Start Button");

buttonEl.addEventListener("click", () => {
  //   message.classList.toggle("hide");
  gameArea.classList.toggle("hide");

  if (!inPlay) {
    inPlay = true;
    buttonEl.classList.add("hide");
    messenger("Click the shapes as quickly as you see them...");
    playArea.timer = setTimeout(myBox, randNum(3000));
    // showBox();
    // myBox();
  }
});

// player message
function messenger(msg) {
  message.innerHTML = msg;
}

function showBox() {
  startTime = new Date().getTime();
  console.log(startTime);
  playArea.timer = setTimeout(myBox, randNum(3000));
}

function myBox() {
  let el = document.createElement("div");
  el.style.backgroundColor = randColor();
  el.style.width = randNum(30) + 70 + "px";
  el.style.height = randNum(30) + 70 + "px";
  el.style.borderRadius = randNum(50) + "%";
  el.style.position = "relative";
  el.style.top = randNum(150) + "px";
  el.style.left = randNum(50) + "px";

  el.addEventListener("click", hit);
  el.start = new Date().getTime();

  gameArea.appendChild(el);
  // console.log(el);
}

function hit(e) {
  // console.log(e.target)
  let endTime = new Date().getTime();
  let startTime = e.target.start;
  let duration = (endTime - startTime) / 1000;
  messenger("It took " + duration.toFixed(2) + " seconds to click");

  clearTimeout(playArea.timer);
  gameArea.children[0].remove();
    playArea.timer = setTimeout(myBox, randNum(3000));
    console.log("StartTime : " + startTime)
    console.log("endTIme : " + endTime)
}

function randNum(num) {
  let tempVal = Math.floor(Math.random() * num);
  return tempVal;
}

function randColor() {
  let temp = Math.random().toString(16);
  //   console.log(temp)
  let bgColor = "#" + temp.slice(2, 8);
  //   console.log(bgColor);
  return bgColor;
}

function getColor() {
  function col() {
    let hex = randNum(255).toString(16);
    return ("0" + String(hex)).substr(-2);
  }
  return "#" + col() + col() + col();
}
