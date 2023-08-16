const output = document.querySelector("#output");
const pageBody = document.body;

const el1 = document.createElement("h1");
el1.textContent = "Element 1";
// console.log(el1);
output.append(el1);

// Fetching data with JavaScript
const selValue = document.querySelector("select");
const btn = document.querySelector("button");
const output1 = document.querySelector("#output1");
const url = "https://swapi.dev/api/";

btn.addEventListener("click", () => {
  //   console.log(selValue.value);
  fetch(url + "/" + selValue.value)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      myOutput(data, selValue.value);
    });
});

function myOutput(data, val) {
  const total = data.results;
  //   const itemName = (val = "films" ? "title" : "name");
  btn.disabled = false;
  output1.innerHTML = `Search for ${val}`;
  //   console.log(data);
  total.forEach((item) => {
    if (val == "films") {
      //   output1.innerHTML += `<div>${item[itemName]}</div>`;
      output1.innerHTML += `<div>${item.title}</div>`;
    } else {
      //   output1.innerHTML += `<div>${item[itemName]}</div>`;
      output1.innerHTML += `<div>${item.name}</div>`;
    }
  });
}

// Get the total number of vowels
const myInput = document.querySelector("input");
const btn2 = document.querySelector(".btn-2");
const output2 = document.querySelector("#output2");

btn2.addEventListener("click", () => {
  const lenVal = myInput.value;
  // console.log(myInput.value);
  if (lenVal.length > 0) {
    counterVowels(lenVal);
  } else {
    output2.innerHTML = `<div>Please input some text</div>`;
  }
});

// const str1 = "Course Content";
// const str2 = " Announcements";
// console.log(output2)
// counterVowels(str1);

function counterVowels(val) {
  const total = val.length;
  const matched = val.match(/[aeiou]/gi);
  const listVowels = matched.join("-");
  console.log(matched);
  output2.innerHTML = `<div>Text :<b> ${val}</b></div>`;
  output2.innerHTML += `<div>Total length : ${total}</div>`;
  output2.innerHTML += `<div>Vowel Total : ${matched.length}</div>`;
  output2.innerHTML += `<div>Vowels : ${listVowels}</div>`;
  output2.innerHTML += `<div>Others : ${total - matched.length}</div>`;
}

// Closure
const output3 = document.querySelector("#output3")
function adder(val) {
  return function (val2) {
    return val + val2;
  };
}

let a1 = adder(10);
// console.log(a1(2))
for (let i = 0; i < 10; i++) { 
    output3.innerHTML += `<div>Output : ${a1(2+i)}</div>`;
}

