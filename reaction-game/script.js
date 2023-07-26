const containerEl = document.querySelector(".container");
const startGame = document.querySelector(".start-game");
const scoreArea = document.querySelector(".score");
let player = { score: 0 };

startGame.addEventListener("click", () => {
  startGame.style.display = "none";
  let randomTime = Math.random() * 2000 + 1000; // milliseconds

  setTimeout(makeItem, randomTime);
});

function makeItem() {
  let boundary = containerEl.getBoundingClientRect();
//   console.log(boundary);

  let div = document.createElement("div");
  div.setAttribute("class", "box");

  // set left and top position randomly, also width and height
  div.style.left = Math.random() * boundary.width + "px";
  div.style.top = Math.random() * boundary.height + "px";
  div.style.width = Math.random() * 10 + 40 + "px";
  div.style.height = Math.random() * 10 + 40 + "px";
  div.style.borderRadius = Math.round(Math.random() * 50) + "%";
  div.style.backgroundColor = "#" + Math.random().toString(16).substring(2, 8);
  div.startTime = Date.now();
//   console.log(div);

  div.addEventListener("click", () => {
    let endTime = Date.now();
    let difference = ((endTime - div.startTime) / 1000).toFixed(2); // seconds
    scoreArea.innerText = difference + "seconds";
    // startGame.style.display = "block";
    clearTimeout(div.timer);
    containerEl.removeChild(div);
    makeItem();
  });

  div.timer = setTimeout(() => {
      containerEl.removeChild(div);
      makeItem();
  }, 2000);

  containerEl.appendChild(div);
}
