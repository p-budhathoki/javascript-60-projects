let player = {
  speed: 100,
  x: 100,
  y: 100,
};

// whenever the window is ready, invoke the build function
window.addEventListener("DOMContentLoaded", build);

document.addEventListener("keydown", (e) => {
  // left: 37
  // top: 38
  // right: 39
  // bottom: 40

  let key = e.keyCode;
  console.log(key);
  // left
  if (key === 37) {
    player.x -= player.speed;
  }
  // right
  if (key === 39) {
    player.x += player.speed;
  }

  // keyUp
  if (key === 38) {
    player.y -= player.speed;
  }

  // keyDown
  if (key === 40) {
    player.y += player.speed;
  }

  player.el.style.left = player.x + "px";
  player.el.style.top = player.y + "px";
});

function build() {
  // create a new div element
  player.el = document.createElement("div");
  player.x = 100;
  player.y = 100;

  // add styles to the player.el element
  player.el.style.cssText = `
        position: absolute;
        width: 10rem;
        height: 10rem;
        background-color:rgba(255, 255, 255,.5);
        top: player.x + px;
        left: player.y + px;
    `;

  document.body.appendChild(player.el);
}

// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
// The JSON.stringify() method converts a JavaScript object or value to a JSON string

const myObj = {
  first: "Buzz",
  last: "LightYear",
};
console.log(myObj);

// convert to string
let myStr = JSON.stringify(myObj);
console.log(myStr);

// convert back to object
let newObj = JSON.parse(myStr);
console.log(newObj);
console.log(newObj.first);
console.log(newObj.last);

// JavaScript LocalStorage
// The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across the browser sessions. localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time

// add a data item
localStorage.setItem("myCat", "Tom");

// read the localStorage item
let cat = localStorage.getItem("myCat");
console.log(cat);

// remove the localStorage item
localStorage.removeItem("myCat");

// remove all localStorage item - clear all items
localStorage.clear();

// see if the item is in localStorage
if (localStorage.getItem("num")) {
  // store it in a variable
  let cnt = localStorage.getItem("num");
  // convert the variable into number
  cnt = Number(cnt);
  // increment the value by 1
  cnt++;

  // Update the value in localStorage
  localStorage.setItem("num", cnt);
} else {
    // if the item is not in localStorage then add it to the localStorage
  localStorage.setItem("num", 1);
}

console.log(localStorage.getItem("num"));

// convert the object into a string format and store it in the localStorage
let temp = JSON.stringify(myObj);
localStorage.setItem('obj', temp);

// get the stringified object from localStorage and convert to object
let nObj = JSON.parse(localStorage.getItem('obj'));
console.log(nObj);

