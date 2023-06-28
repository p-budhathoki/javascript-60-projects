// // div
// divText = document.createElement("div");
// divText.setAttribute("class", "note");
// div.appendChild(divText);

// // Button
// button = document.createElement("button");
// button.setAttribute("class", "btn btn-submit");
// button.setAttribute("type", "submit");
// button.textContent = "Start";
// divText.append(button);

// document.addEventListener("keydown", (e) => {
//   e.preventDefault();
//   //   console.log(e.keyCode + " = " + e.key);
//   let keyPressed = e.keyCode;

//   if (keyPressed == 37) {
//     goRight();
//   } else if (keyPressed == 38) {
//     // arrow up key pressed
//     goDown(); // moves the block down
//   } else if (keyPressed == 39) {
//     // right arrow key
//     goLeft(); // moves the block to the right
//   } else if (keyPressed == 40) {
//     goUp();
//   }
// });

// ArrowUp ==> style.top = style.top - modifier + "px";
// ArrowDown ==> style.top = style.top + modifier + "px";
// ArrowLeft ==> style.left = style.left - modifier + "px";
// ArrowRight ==> style.left = style.left + modifier + "px";

// function goUp() {
//   // keyUP 38
//   const modifier = 5;
//   let temp = myBlock.offsetTop;
//   temp = -temp - modifier;
//   myBlock.style.top = temp + "px";
// }
// fu

// document.addEventListener("keydown", (e) => {
//   e.preventDefault();
//   console.log(e.keyCode + " ==> " + e.key);
//   if (e.keyCode == 38) {
//     goUp();
//   }
// });
let x = 0;
let y = 0;
let speed = 10;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
console.log("innerwidth : " + windowWidth);
console.log("innerheight : " + windowHeight);

let myFunctionList;
let funList = [];
const movementArray = ["right", "left", "up", "down"];

document.addEventListener("DOMContentLoaded", () => {
  // create a new container div
  div = document.createElement("div");
  div.setAttribute("class", "container");
  document.body.appendChild(div);

  myFunctionList = document.createElement("div");
  myFunctionList.setAttribute("class", "cmd-list clearfix");
  div.appendChild(myFunctionList);

  //   br = document.createElement("br");
  //   myFunctionList.appendChild(br);

  // div
  myBlock = document.createElement("div");
  myBlock.setAttribute("class", "myBlock");
  div.appendChild(myBlock);
  let currentPos = myBlock.getBoundingClientRect();

  // Heading
  p = document.createElement("p");
  p.setAttribute("class", "block-txt");
  p.textContent = "Block";
  myBlock.append(p);
});

document.addEventListener("keydown", (e) => {
  // console.log(e)
  e.preventDefault();

  //   console.log(e.keyCode + " ==> " + e.key);
  //   let keyCodeValue = e.keyCode;
  if (e.keyCode === 37) {
    // goLeft();
    addFun("left");
  } else if (e.keyCode === 38) {
    // goUp();
    addFun("up");
  } else if (e.keyCode === 39) {
    // goRight();
    addFun("right");
  } else if (e.keyCode === 40) {
    // goDown();
    addFun("down");
  } else if (e.keyCode === 82) {
    let temp = movementArray[Math.floor(Math.random() * movementArray.length)];
    addFun(temp);
  } else if (e.keyCode === 13 || e.keyCode === 32) {
    // enter or space key pressed
    mover();
  }
});

function mover() {
  if (funList.length > 0) {
    // let currentPos = myBlock.getBoundingClientRect();
    let el = funList.shift();
    let item = el.textContent.replace("+", "");
    console.log("item = " + item);
    myFunctionList.removeChild(el);
    // myBlock.innerHTML = "Move : " + item;
    if (item === "left") {
      //   myBlock.style.left = currentPos.left - currentPos.width + "px";
      goLeft();
    }
    if (item === "right") {
      //   myBlock.style.left = currentPos.left - currentPos.width + "px";
      goRight();
    }
    if (item === "up") {
      //   myBlock.style.top = currentPos.top - currentPos.width + "px";
      goUp();
    }
    if (item === "down") {
      //   myBlock.style.top = currentPos.top - currentPos.width + "px";
      goDown();
    }
    setTimeout(mover, 1000);
  } else {
    return;
  }
}

function addFun(val) {
  let span = document.createElement("span");
  span.textContent = "+ " + val;

  //   span.style.padding = "10px";
  //   span.style.border = "1px solid black";

  span.addEventListener("mouseover", () => {
    span.style.backgroundColor = "tomato";
    span.style.color = "black";
  });
  span.addEventListener("mouseout", () => {
    span.style.backgroundColor = "chocolate";
    span.style.color = "whitesmoke";
  });
  let currentPos = myBlock.getBoundingClientRect();
  x = currentPos.x;
  y = currentPos.y;

  myFunctionList.appendChild(span);
  funList.push(span);
  console.log(funList);
}

function goLeft() {
  if (x > 0) {
    x = x - speed;
    myBlock.style.left = x + "px";
    myBlock.style.backgroundColor = randomColor();
    // console.log(randomColor());

    // console.log("(x,y) = " + "(" + x + "," + y + ")");
    p.textContent = `(x,y) = (${x},${y})`;
  }
}
function goUp() {
  if (y > 0) {
    y = y - speed;
    myBlock.style.top = y + "px";
    myBlock.style.backgroundColor = randomColor();

    // console.log("(x,y) = " + "(" + x + "," + y + ")");
    p.textContent = `(x,y) = (${x},${y})`;
  }
}

function goRight() {
  if (x + 100 < windowWidth) {
    x = x + speed;
    myBlock.style.left = x + "px";
    myBlock.style.backgroundColor = randomColor();

    // console.log("(x,y) = " + "(" + x + "," + y + ")");
    p.textContent = `(x,y) = (${x},${y})`;
  }
}

function goDown() {
  if (y + 100 < windowHeight) {
    y = y + speed;
    myBlock.style.top = y + "px";
    myBlock.style.backgroundColor = randomColor();
    // console.log("(x,y) = " + "(" + x + "," + y + ")");
    p.textContent = `(x,y) = (${x},${y})`;
  }
}

function randomColor() {
  return "#" + Math.random().toString(16).substr(-6);
}
console.log(randomColor());
