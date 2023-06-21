// setTimeout() sets a timer which executes a function or specified piece of code once the timer expires.
// The setInterval() method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. It returns an interval ID which uniquely identifies the interval, so you can remove it later by calling it.

const intervalID = window.setInterval(myCallback, 500, "interval");
const timeoutID = window.setTimeout(myCallback, 500, "setTimeout");
const el = document.querySelector("div");

let y = 10;
const inTimer = window.setInterval(counter, 1000);
function counter() {
  el.textContent = y;
  y--;
  if (y < 0) {
    clearInterval(inTimer);
  }
}

function myCallback(msg) {
  console.log(msg);
}

function stopInterval() {
  clearInterval(intervalID);
}

let x = 0;
el.style.display = "flex";
el.style.width = "10rem";
el.style.height = "10rem";
el.style.backgroundColor = "red";
el.style.fontSize = "3.5rem";
// el.style.textAlign ="center"
el.style.justifyContent = "center";
el.style.alignItems = "center";

// el.style.cssText = "width: 10rem; height: 10rem; backgroundColor: red";

function step() {
  x++;
  el.style.transform = "translateX(" + x + "px)";
  if (x < 450) {
    window.requestAnimationFrame(step);
  }
}
window.requestAnimationFrame(step);

let url = window.location.href;
console.log("The url is : " + url);
let encodeurl = encodeURIComponent(url);
let decodeurl = decodeURIComponent(encodeurl);

console.log("encoded url : " + encodeurl);
console.log("decoded url : " + decodeurl);

let url2 = "http://www.google.com.au/";
console.log("Encoded URI url2 : " + encodeURIComponent(url2));
console.log("Encoded url2 : " + encodeURI(url2));

let myStr =
  "Does wisdom perhaps appear on the sometestemail@gmail.com earth as a raven which is inspired by example@example.com the smell of carrion?";

let exp2 = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let emailData = myStr.match(exp2);
console.log(emailData);

for (let i = 0; i < emailData.length; i++) {
  console.log(emailData[i]);
}

let reg = /(\w+)\s(\w+)/;
let temp1 = myStr.replace("wisdom", "WISDOM");
console.log(temp1);
console.log(myStr.match(/J/));
console.log(myStr.match(/a/));
console.log(/earth/.test(myStr));
console.log(/\d+/.exec(myStr));
let myArr = ["one", "two", "three", "four", "two"];
let temp2 = myArr.toString();

let temp3 = myArr.join("...");
console.log(temp3);
console.log(temp3.search(/two/));
console.log(temp3.match(/three/));

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

const me = new Person("Buzz", "LightYear");
console.log(me);
console.log(me.fullName());

Date.prototype.addDays = function (days) {
  return new Date(this.valueOf() + days * 864e5);
};
console.log(new Date().addDays(3));
// input element
const inputEl = document.createElement("input");
inputEl.setAttribute("type", "text");
inputEl.setAttribute("value", "10");
document.body.appendChild(inputEl);

// submit button
const submitBtn = document.createElement("button");
el.setAttribute("type", "submit");
submitBtn.textContent = "Submit";
document.body.appendChild(submitBtn);

// result div
const resultDiv = document.createElement("div");
resultDiv.textContent = "Result";
resultDiv.setAttribute("class", "result");
document.body.appendChild(resultDiv);
resultDiv.style.fontSize = "3rem";

// select button
const btn = document.querySelector("button");
btn.addEventListener("click", tester);
btn.addEventListener("click", calculate);

function calculate() {
  let num = inputEl.value;

  try {
    if (num === "") {
      throw "No Value";
    }
    if (isNaN(num)) {
      throw "Not a Number";
    }
    document.querySelector(".result").textContent = num * 10;
  } catch (error) {
    document.querySelector(".result").textContent = "Error : " + error;
  } finally {
    // reset the value of element
    inputEl.value = "";
  }
}

function tester() {
  let num = inputEl.value;

  try {
    if (num === "") {
      throw "No Value";
    }
    if (isNaN(num)) {
      throw "Not a number";
    }
    num = Number(num);
    if (num > 5) {
      throw "Over 5";
    }
    if (num < 5) {
      throw "Under 5";
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("this will always run");
  }
  console.log(inputEl.value);
}

let xhr = new XMLHttpRequest();
const url1 = "http://api.chucknorris.io/jokes/random";

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.response);
    let joke = JSON.parse(xhr.response);
    console.log(joke.value);
    document.querySelector(".result").innerHTML =
      joke.value + '<br> <img src = "+joke.icon_url+">';
  }
};

xhr.open("GET", url1);
xhr.send();
console.log(xhr);

const url3 = "http://api.chucknorris.io/jokes/random";

// get joke button
const jokeBtn = document.createElement("button");
el.setAttribute("type", "submit");
jokeBtn.textContent = "Get Random Jokes";
document.body.appendChild(jokeBtn);

// joke result div
const jokeDiv = document.createElement("div");
jokeDiv.textContent = "Joke Result";
jokeDiv.setAttribute("class", "joke-result");
document.body.appendChild(jokeDiv);
jokeDiv.style.fontSize = "3rem";

jokeBtn.addEventListener("click", getJoke);

function getJoke() {
  fetch(url3)
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".joke-result").textContent = data.value;
    });
}
const url4 = "http://randomuser.me/api/";

// get joke button
const jokeBtn2 = document.createElement("button");
el.setAttribute("type", "submit");
jokeBtn2.textContent = "Get Random Jokes 2";
document.body.appendChild(jokeBtn2);

// joke result div
const jokeDiv2 = document.createElement("div");
jokeDiv2.textContent = "Joke Result 2";
jokeDiv2.setAttribute("class", "joke-result2");
document.body.appendChild(jokeDiv2);
jokeDiv2.style.fontSize = "3rem";

jokeBtn2.addEventListener("click", getJoke);

function getJoke() {
  fetch(url4)
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".joke-result2").textContent = data.value;
    });
}

const url5 = "http://jsonplaceholder.typicode.com/todos";
const output = document.querySelector("div");
loadJSON();

function loadJSON() {
  fetch(url5)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div");
        div.style.color = data[i].completed ? "green" : "red";
        div.textContent = data[i].id + "." + data[x].title;
        output.appendChild(div);
      }
    });
}
