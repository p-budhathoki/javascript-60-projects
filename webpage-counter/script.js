// const val = {
//   num: 5,
// };

// // const main = document.createElement("div");
// // const output = document.createElement("div");

// const main = eleMaker("div", document.body, "");
// const output = eleMaker("div", main, "");

// // button = document.querySelector("button");
// // button.classList.add("btn");

// for (let i = 0; i < val.num; i++) {
//   const btn = eleMaker("button", main, `Button #${i + 1}`);
//   btn.total = 0;
//   btn.style.backgroundColor = "#" + Math.random().toString(16).substring(2, 8);

//   btn.classList.add("btn");
//   btn.onclick = adder;
// }

// const output1 = eleMaker("div", main, "");
// const btnMain = eleMaker("button", main, `All Totals`);

// function eleMaker(eleT, parent, html) {
//   const ele = document.createElement("eleT");
//   ele.innerHTML = html;
//   return parent.appendChild(ele);
// }

// btnMain.onclick = () => {
//   const btns = document.querySelectorAll(".btn");
//   btns.innerHTML = "";
//   const ul = eleMaker("ul", output1, "");

//   btns.forEach((elem, index) => {
//     const li = eleMaker("li", ul, `${elem.textContent} = ${elem.total}`);
//     li.style.backgroundColor = elem.style.backgroundColor;
//     li.style.color = elem.style.color;
//   });
// };

// function adder(e) {
//   //   const nameV = e.target.textContent;
//   //   this.total = this.total || 0;
//   this.total++;
//   output.style.backgroundColor = this.style.backgroundColor;
//   output.innerHTML = `${this.textContent} : (${this.total})`;
// }

// Counters with Function Expression and Function Declarations

const btn1 = document.querySelector("btn-1");
const btn2 = document.querySelector("btn-2");
const btn3 = document.querySelector("btn-3");
const output = document.querySelector(".output");

// Function Expression
const adder2 = function () {
  if (!this.total) {
    this.total = 1;
  } else {
    this.total++;
  }
  output.textContent = `Total #2: ${this.total}`;
};
const adder3 = function () {
  if (!this.total) {
    this.total = 1;
  } else {
    this.total++;
  }
  output.textContent = `Total #3: ${this.total}`;
};

// Function Declaration
function adder1() {
    if (!this.total) {
      this.total = 1;
    } else {
      this.total++;
    }
    output.textContent = `Total #1: ${this.total}`;
  };
btn1.onclick = adder1;
btn2.onclick = adder2;
btn3.onclick = adder3;
