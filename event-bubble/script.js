const inputSelect = document.querySelector("input[name='newItem']");
const mainList = document.querySelector("ul");
const allListItems = document.querySelectorAll("li");

for (let i = 0; i < allListItems.length; i++) {
  allListItems[i].addEventListener("click", myList);
}

// when the enter is hit add the new item to the list
inputSelect.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    makeNew();
  }
});

function makeNew() {
  let li = document.createElement("li");
  li.addEventListener("click", myList);

  let textValue = inputSelect.value;
  inputSelect.value = "";
  let tempNode = document.createTextNode(textValue);
  li.appendChild(tempNode);
  mainList.appendChild(li);
  inputSelect.value = "";
  inputSelect.focus();
}

function myList() {
  let temp = this.classList.toggle("cross-list");

  if (temp) {
    let span = document.createElement("span");
    span.textContent = "  X  ";
    span.addEventListener("click", () => {
      this.parentElement.remove();
    });
    this.appendChild(span);
  }
}

// Event Bubbling
const outputEl = document.querySelector("section");
const divEls = document.querySelectorAll("div");

for (let i = 0; i < divEls.length; i++) {
  let divEl = divEls[i];
  divEl.style.border = "1px solid red";
  divEl.style.width = "10rem";
  divEl.style.padding = "2rem";
  divEl.value = i + 1;

  divEl.addEventListener("click", capture, true);
  divEl.addEventListener("click", bubble, false);
}
function output(msg) {
  outputEl.innerHTML = `${msg} <br/>`;
}
function capture(divElement) {
  output("capture : ", divElement.value);
}
function bubble(divElement) {
  output("bubble : ", divElement.value);
}
