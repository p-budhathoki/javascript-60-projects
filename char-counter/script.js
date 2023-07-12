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
h1.textContent = "Character Counter";
gameDiv.appendChild(h1);

// game play area
divText = document.createElement("div");
divText.setAttribute("class", "game");
gameDiv.appendChild(divText);

// textarea
labelText = document.createElement("label");
labelText.setAttribute("class", "label");
labelText.setAttribute("for", "text-area");
labelText.textContent = "Please Enter the Character : ";
divText.appendChild(labelText);

txtArea = document.createElement("textarea");
txtArea.setAttribute("class", "textarea");
txtArea.setAttribute("id", "text-area");

divText.appendChild(txtArea);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "message");
divMsg.textContent = "Remaining : ";
div.appendChild(divMsg);

span = document.createElement("span");
span.setAttribute("class", "span");
// span.textContent = "Number"
divMsg.appendChild(span);

// button
button = document.createElement("button");
button.setAttribute("class", "btn btn-play");
button.innerHTML = "Submit";
div.appendChild(button);

const output = document.querySelector(".message");
const textEl = document.querySelector(".textarea");
const spanEl = document.querySelector(".span");

// textEl.addEventListener("change", textCounter);
// textEl.addEventListener("keyup", textCounter);
// textEl.addEventListener("keydown", textCounter);

["keyup", "keydown", "change"].forEach(function (e) {
  textEl.addEventListener(e, textCounter);
});

const maxLength = 10;
const warningLength = 5;

function textCounter(e) {
  // console.log(e);
  let count = textEl.value.length;

  if (count > maxLength) {
    // console.log(textEl.value.substring(0, maxLength));
    textEl.value = textEl.value.substring(0, maxLength);
  }
  if (count > warningLength) {
    spanEl.classList.add("red");
  } else {
    spanEl.classList.remove("red");
  }
  spanEl.innerHTML = maxLength - count;
  console.log(count);
}
