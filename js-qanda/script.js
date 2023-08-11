let topEl = document.querySelector(".top");
let nestEl = document.querySelector(".nested");
// let topEl1 = document.querySelectorAll(".nested");
let temp = [];
// let remElement = topEl.removeChild(nestEl);
// console.log(remElement);
// console.log(nestEl);

// let nest2 = document.querySelectorAll(".nested");
// console.log(nest2[1]);
// console.log(nest2[1].parentNode);
// if (nest2[1].parentNode) {
//   nest2[1].parentNode.removeChild(nest2[1]);
// }
// let count = 0;
// while (count < topEl1.length) {
//   let removeNode = topEl1.removeNode();
//   console.log(removeNode);
//   temp.push(removeNode);
// }
Element.prototype.appendBefore = function (el) {
  el.parentNode.insertBefore(this, el);
};
Element.prototype.appendAfter = function (el) {
  el.parentNode.insertBefore(this, el.nextSibling);
};

let div1 = document.createElement("div");
div1.textContent = "Infinity";
div1.style.color = "blue";
let nest1 = document.querySelector(".nested");
let nest2 = document.querySelector(".nested2");

let parentEle = nest1.parentNode;
// parentEle.insertBefore(div1, nest1);
// parentEle.insertBefore(div1, nest2.nextSibling);

console.log(nest1.parentNode);
console.log(nest1.parentElement);
console.log(div1);

let div2 = document.createElement("div");
div2.textContent = "Beyond Infinity";
div2.style.color = "blue";

// div2.appendBefore(nest1);
// div2.appendAfter(nest2);

const topEle2 = document.querySelector(".top");
const div3 = document.createElement("div");
div3.textContent = "Infinity and Beyond";
div3.style.color = "Red";

const div4 = document.createElement("div");
div4.textContent = "this is div4";
div4.style.color = "blue";

let val1 = topEle2.append(div3);
let val2 = topEle2.appendChild(div3);
console.log(val1); //undefined returned
console.log(val2);

topEle2.append("This is allowed");
topEle2.appendChild(div3);
topEle2.prepend(div3);

const div5 = document.createElement("div");
div5.textContent = "this is div5";
div5.style.color = "green";
div5.style.position = "absolute";
div5.style.border = "1px solid red";
div5.style.padding = "1rem 2rem";
div5.style.left = "50px";
div5.x = 50;
topEle2.append(div5);
// div5.addEventListener("click", mover);
// div5.addEventListener("click", stopper);
// let myAnim = requestAnimationFrame(mover);
let tog = true;
function stopper() {
  if (tog) {
    cancelAnimationFrame(myAnim);
    tog = false;
  } else {
    tog = true;
    myAnim = requestAnimationFrame(mover);
  }
}

function mover() {
  div5.x = div5.x + 1;
  div5.style.left = div5.x + "px";
  myAnim = requestAnimationFrame(mover);
}

const btn = document.querySelector("button");
const answer = document.querySelector("input");
const message = document.querySelector(".message");

btn.addEventListener("click", () => {
  //   console.log(answer.value);
  //   let ans = parseInt(answer.value);
  //   if (!Number(ans)) {
  //     console.log("It's not a number");
  //     message.textContent = "It's not a number";
  //   } else {
  //     console.log("Okay");
  //     message.textContent = checkTimeOfDay(ans);
  //     answer.value = "";
  //     answer.focus();
  //   }
});
outputToday();

// function checkTimeOfDay(num) {
//   switch (num < 12) {
//     case true:
//       return "Good Morning";
//       break;
//     case false:
//       return "Good Afternoon";
//     default:
//       return "Something went wrong";
//   }
// }

function outputToday() {
  const today = new Date().getDay();
  let dayName = "unknown";

  switch (today) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
  }
  message.textContent = "Today is " + dayName;
}

let x = 0;
// while (x < 10) {
//     console.log(x)
//     x++;
// }

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; //skips at 3
  }
  if (i === 8) {
    break; // breaks out of loop at 8
  }
  console.log(i);
}
console.log("Next line");
