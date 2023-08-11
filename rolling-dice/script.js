const diceView = [
  [5],
  [1, 9],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 3, 4, 6, 7, 9],
];
const btn = document.createElement("button");
btn.textContent = "Roll Dice";
const playArea = document.createElement("div");
document.body.prepend(playArea);
playArea.append(btn);

const area1 = document.createElement("div");
area1.setAttribute("class", "area1");
const area2 = document.createElement("div");
area2.setAttribute("class", "area2");
const containerArea = document.createElement("div");
containerArea.setAttribute("class", "container-area");

playArea.append(containerArea);
containerArea.append(area1);
containerArea.append(area2);

area1.textContent = "First Dice";
area2.textContent = "Second Dice";
addBorders(area1);
addBorders(area2);

btn.addEventListener("click", () => {
  rollValue();
  console.log(area1.val);
  console.log(area2.val);
});

function generateDice(val) {
  let html = "<div>";
  let tempArr = diceView[val];
  console.log(tempArr);
  for (let i = 1; i < 10; i++) {
    let tempVal = "#333";
    // let tempVal = "white";
    if (tempArr.includes(i)) {
      tempVal = "#000";
    }
    html += `<span style=background-color:${tempVal}></span>`;
  }
  html += "</div>";
  return html;
}

function rollValue() {
  area1.val = Math.floor(Math.random() * 6);
  area2.val = Math.floor(Math.random() * 6);
  area1.innerHTML = generateDice(area1.val);
  area2.innerHTML = generateDice(area2.val);
}

function addBorders(el) {
  el.style.border = "1px solid #ddd";
  el.style.fontSize = "2rem";
  el.style.padding = "1rem 2rem";
//   el.style.margin = "1rem auto";
}
