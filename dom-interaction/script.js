const selectEl = document.querySelector(".main");
const selectInput = document.querySelector("input[name=outputText]");
const btn = document.querySelector(".btn");
const selectBg = document.querySelector("input[name=bgColor]");
const selectText = document.querySelector("input[name=textColor]");
const selectClasses = document.querySelector("select[name=tglClasses]");
const eleMaker = document.querySelector("select[name=eleMaker]");
const addElement = document.querySelector("select[name=addElement]");
const btnAdder = document.querySelector(".adder");
const secContent = document.querySelector(".sec-content");
let nodeLister;
const classArray = ["padded", "bigger", "borderAdd"];
const elementArray = ["div", "p", "span"];

document.addEventListener("DOMContentLoaded", () => {
  classArray.forEach((item) => {
    // console.log(item);
    let opt = document.createElement("option");
    opt.value = item;
    opt.innerHTML = item;
    selectClasses.appendChild(opt);
    // console.log(opt)
  });
  // dropDownBuilder();
//   elementArray.forEach((item) => {
//     // console.log(item);
//     let temp = document.createElement(addElement.value);
//     temp.textContent = addElement.value;
//     addElement.appendChild(temp);
//     // console.log(opt)
//   });
  dropDownBuilder();
});

btnAdder.addEventListener("click", () => {
  console.log(addElement.value);
});

btn.textContent = "Update";
btn.addEventListener("click", (event) => {
  let tempElement = nodeLister[eleMaker.value];
  selectInput.focus();
  //   console.log(btn)
  // console.log(event.target)
  tempElement.textContent = selectInput.value;
  tempElement.style.backgroundColor = selectBg.value;
  tempElement.style.color = selectText.value;
  tempElement.classList.toggle(selectClasses.value);
  //   selectInput.value = "";
});

function dropDownBuilder() {
  eleMaker.innerHTML = "";
  nodeLister = document.querySelectorAll(".sec-content > *");
  nodeLister.forEach((item, index) => {
    // console.log(item);
    let opt = document.createElement("option");
    opt.value = index;
    opt.innerHTML = item.tagName.toLowerCase();
    eleMaker.appendChild(opt);
  });
}
