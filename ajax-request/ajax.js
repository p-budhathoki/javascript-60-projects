const output = document.querySelector(".output");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const url = "https://randomuser.me/api/?results=10";

btn1.addEventListener("click", reqXHR);
btn2.addEventListener("click", reqFetch);

function reqXHR(e) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    // output.innerHTML = "";
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(xhr.responseText);
      const data = JSON.parse(xhr.responseText);
      console.log(data.results);

      data.results.forEach((element) => {
        output.innerHTML += ` ${element.name.title} ${element.name.first} ${element.name.last} <br />`;
      });
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
function reqFetch(e) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // output.innerHTML =""
      console.log(data);
      data.results.forEach((element) => {
        output.innerHTML += ` ${element.name.title} ${element.name.first} ${element.name.last} <br />`;
      });
    });
}

// Dynamic list
const listOutput = document.querySelector(".list-output");
const dataURL = "data1.json";

window.addEventListener("DOMContentLoaded", () => {
  listOutput.textContent = "Ready";
  loadData();
});

function loadData() {
  fetch(dataURL)
    .then((rep) => rep.json())
    .then((data1) => {
      console.log(data1);
      addToPage(data1);
    });
}

function addToPage(arr) {
  const ul = document.createElement("ul");
  body.appendChild(ul);
  arr.forEach((el) => {
    console.log(el);
    const li = document.createElement("li");
    li.textContent = el.name;
    if (el.status) {
      li.classList.add("active");
    } else {
        li.classList.add("inactive");
        
    }
    ul.app(li);
    li.addEventListener("click", (e) => {
      li.classList.toggle("active");
      li.classList.toggle("inactive");
    });
  });
}
