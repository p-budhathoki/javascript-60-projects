// let ul = document.createElement("ul");
// ul.classList.add("ul-style");

// // add styles to the ul element
// document.getElementsByClassName("ul-style").style.cssText = `
// list-style: none;
// border: 1px solid rgba(255, 255, 255, .25);
// padding: 2rem;
// margin: 3rem auto;
// `;
// document.body.appendChild(ul);

// for (let i = 0; i < 5; i++) {
//   let li = document.createElement("li");
//   li.className = "shop-item";
//   li.textContent = i;

//   ul.appendChild(li);
// }

// ul {
//     list-style: none;
//     border: 1px solid rgba(255, 255, 255, .25);
//     padding: 2rem;
//     margin: 3rem auto;
// }

// ul li {
//     padding: 1rem 2rem;
//     /* border: 1px solid red; */
//     margin: 0.5rem auto;
//     background: rgba(255, 255, 255, .3);
//     color: #000;
//     font-size: 2rem;
//     text-align: center;

// }

const mainList = document.querySelector("ul");
// console.log(mainList);
const inputEl = document.querySelector("input");
// console.log(inputEl.value);
const clicker = document.querySelector("#clicker");
// console.log(clicker)

// add event listener
clicker.addEventListener("click", (event) => {
  event.preventDefault();
  if ((event.key = "Enter")) {
    document.querySelector("#clicker").click();
  }
  if (inputEl.value.length > 3) {
    // create li items
    let li = document.createElement("li");
    // get the value inside the input element and store as textNode
    let tempText = document.createTextNode(inputEl.value);
    console.log(tempText);
    // append the text entered to the list item
    li.appendChild(tempText);
    // append the list to the parent ul element
    mainList.appendChild(li);
    inputEl.value = "";
    inputEl.focus();
  }
});

// Change the Background color
const btn = document.querySelector(".bg");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log("color");
  let myColor =
    "rgba(" +
    randomNum(255) +
    "," +
    randomNum(255) +
    "," +
    randomNum(255) +
    "," +
    randomOpacity() +
    ")";
  console.log(myColor);
  // Generate the background color for the body
  document.body.style.backgroundColor = myColor;
});

// Random number generator
function randomNum(num) {
  return Math.floor(Math.random() * (num + 1));
}

// Random Opacity
function randomOpacity() {
  return Math.random().toFixed(2);
}

const spans = document.querySelectorAll("span");
spans.forEach((span, index) => {
  //   console.log(span, index);
  span.style.cssText = `
    padding: 1.5rem;
    border: .1rem solid green;
    display: block;
    margin-bottom:.5rem;
    font-size:1.8rem;
    `;
  // span.target.style.backgroundColor = randColor();
  //   console.log(span.target);
  //   console.log(span);
  //   console.log(this);
  span.addEventListener("click", (event) => {
    event.target.style.backgroundColor = randColor();
  });
});

function randColor() {
  let myColor =
    "rgba(" +
    randomNum(255) +
    "," +
    randomNum(255) +
    "," +
    randomNum(255) +
    "," +
    randomOpacity() +
    ")";
  return myColor;
}

let keys = {};
document.addEventListener("keydown", pressKeyOn);
document.addEventListener("keyup", pressKeyOff);

function pressKeyOn() {
  //   console.log("KeyOn Event : " + event.key);
  keys[event.key] = true;
  //   console.log(keys);
}
function pressKeyOff() {
  //   console.log("KeyOff Event : " + event.key);
  keys[event.key] = false;
  //   console.log(keys);
}

const inputEle = document.querySelector("input");
inputEle.addEventListener("keypress", addItem);

function addItem(e) {
  //   console.log(e);
  let tempCont = document.getElementsByClassName("show-txt");
  tempCont[0].innerHTML = e.target.innerHTML;
  tempCont[0].cssText = `
    font-size: 3rem;
    color: whitesmoke;
    `;
}

const trackSpan = document.querySelector("ul");
document.addEventListener("keydown", function (event) {
  let li = document.createElement("li");
  let temp = event.key + "(" + event.keyCode + ")";
  let textC = document.createTextNode(temp);
  li.appendChild(textC);
  trackSpan.appendChild(li);
});

const lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
  // console.log(lis[i]);

  lis[i].addEventListener("mouseover", (e) => {
     lis[i].classList.add("red");
    lis[i].style.backgroundColor = "white";
  });
    lis[i].addEventListener("mouseout", (e) => { 
        lis[i].style.backgroundColor = "rgba(255, 255, 255,.25)"
        lis[i].classList.remove("red")
    })
}
