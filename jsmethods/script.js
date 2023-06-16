let myStr = "Infinity and Beyond... Momento Mori 123 Real and Projects";
console.log(myStr.split(" ")); // array
console.log(myStr.split("a")); // array
console.log(myStr.charAt(9)); // a
console.log(myStr.slice(12, 22)); // Beyond...
console.log(myStr.substring(9, 12)); // and
console.log(myStr.substr(9, 12)); // 12 characters starting at 9 (and Beyond..)
console.log(myStr.indexOf("and")); // and starts at 9
console.log(myStr.lastIndexOf("and")); // last occurrence of and
console.log(myStr.search("Real")); // returns the index of the Real

let output;
output = myStr.replace("123", "JavaScript Games Portfolio");
console.log(output);

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}
// getRandom(32,45)
// the includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate
// the conditional(ternary) operator is the only javascript operator that takes three operands. This operator is frequently used as a shortcut for the if statement

const arr = [1, 5, 3, 6, 23, 45, 354];
// console.log(arr.includes(5)); // returns true

function member(val) {
  return val ? "yes" : "no";
}
console.log(member(true)); // returns true
// member(true);
console.log(member(arr.includes(30)));

const excludedNumbers = [10, 15, 7, 1, 4, 2, 5];

function getRandom(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  // do not return the excluded numbers
  let result = excludedNumbers.includes(num) ? getRandom(min, max) : num;
  return result;
}

for (let i = 0; i < 20; i++) {
  let min = 1,
    max = 15;
  let num = getRandom(min, max);
  //   console.log(num);
}

const arrMsg = ["hello", "world", "welcome", "bye bye"];

// let temp = randomMsg(arrMsg);
// let message = document.createTextNode(temp);
// document.body.appendChild(message);

// function randomMsg(arr) {
//   let temp = Math.floor(Math.random() * arr.length);
//   return arr[temp];
// }

// Random color Background

document.querySelector("button").addEventListener("click", () => {
  document.body.style.backgroundColor = randomBgColor();
});

function randomBgColor() {
  let temp = Math.random().toString(16).substr(-6);

  return "#" + temp;
}
console.log(randomBgColor());

window.addEventListener("DOMContentLoaded", function (e) {
  console.log("ready");
});
