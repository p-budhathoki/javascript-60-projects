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
h1.textContent = "Click Counter";
gameDiv.appendChild(h1);

// game play area
// divGame = document.createElement("div");
// divGame.setAttribute("class", "game");
// gameDiv.appendChild(divGame);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "stats score message");
divMsg.textContent = "Clicks";
gameDiv.appendChild(divMsg);

// button
button = document.createElement("button");
button.setAttribute("class", "btn btn-play");
button.setAttribute("type", "button");
button.innerHTML = "Click";
gameDiv.appendChild(button);

let counter = 0;
const buttonEl = document.querySelector(".btn-play");
const messageEl = document.querySelector(".message");
buttonEl.addEventListener("click", () => {
  console.log("clicked");
  counter++;
  messageEl.textContent = counter + " clicks";
});
