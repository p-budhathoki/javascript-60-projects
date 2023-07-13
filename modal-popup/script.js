// // create a new container div
// div = document.createElement("div");
// div.setAttribute("class", "container");
// document.body.appendChild(div);

// // game div
// gameDiv = document.createElement("div");
// gameDiv.setAttribute("class", "game-area");
// div.appendChild(gameDiv);

// // heading
// h1 = document.createElement("h1");
// h1.setAttribute("class", "heading");
// h1.textContent = "Hangman Game";
// gameDiv.appendChild(h1);

// // game play area
// divGame = document.createElement("div");
// divGame.setAttribute("class", "game");
// gameDiv.appendChild(divGame);

// // alphabets area
// divAlpha = document.createElement("div");
// divAlpha.setAttribute("class", "alphabets");
// gameDiv.appendChild(divAlpha);

// // Result
// divMsg = document.createElement("h1");
// divMsg.setAttribute("class", "stats score message");
// divMsg.textContent = "Score : ";
// div.appendChild(divMsg);

// // // button
// button = document.createElement("button");
// button.setAttribute("class", "btn btn-play");
// button.setAttribute("type", "button");
// button.innerHTML = "Start";
// div.appendChild(button);

const buttonEl = document.querySelectorAll(".btn-play");
console.log(buttonEl);
const modalWrapper = document.querySelector(".modalWrapper");
console.log(modalWrapper);
const body = document.querySelector("body");

buttonEl.forEach((button) => {
  makeClick(button);
});

function makeClick(el) {
  el.addEventListener("click", () => {
    modalWrapper.classList.add("showModal");

    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", () => {
      return modalWrapper.classList.remove("showModal");
    });

    modalWrapper.addEventListener("click", () => {
      return modalWrapper.classList.remove("showModal");
    });

    body.addEventListener("keydown", () => {
      console.log(e.keyCode);
      if (e.keyCode === 27) {
        return modalWrapper.classList.remove("showModal");
      }
    });
  });
}
