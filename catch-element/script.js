const outputEl = document.querySelector(".output");
const messageOutEl = document.querySelectorAll(".message span");
let score = 0;
outputEl.addEventListener("mouseenter", () => {
  outputEl.style.backgroundColor = "darkturquoise";
});
outputEl.addEventListener("mouseleave", () => {
  outputEl.style.backgroundColor = "fuchsia";
});
outputEl.addEventListener("mousemove", (e) => {
  // console.log(e)
  //   console.log(e.x);
  //   console.log(e.y);
  messageOutEl[0].innerText = e.x;
  messageOutEl[1].innerText = e.y;
});

document.addEventListener("DOMContentLoaded", () => {
  let div = document.createElement("div");
  div.classList.add("box");
  outputEl.appendChild(div);

  div.x = div.offsetLeft;
  div.y = div.offsetTop;
  div.tempColor = "#" + Math.random().toString(16).substring(2, 8);
//   console.log(div.tempColor);
  div.style.backgroundColor = div.tempColor;
//   console.dir(div);

  div.addEventListener("mouseenter", (e) => {
    div.style.backgroundColor = "red";
  });
  div.addEventListener("mouseleave", (e) => {
    div.style.backgroundColor = div.tempColor;
  });
  div.addEventListener("click", (e) => {
    div.tempColor = "#" + Math.random().toString(16).substring(2, 8);
    div.style.backgroundColor = div.tempColor;
    score++;
    messageOutEl[2].innerText = score;
  });

  div.steps = Math.random() * 20;
  div.direction = Math.floor(Math.random() * 4);
  window.requestAnimationFrame(move);
});

function move() {
//   let speed = Math.random() * 10 + 15;
  let speed = Math.random() * 10;
  const boxEl = document.querySelector(".box");
  let bounds = outputEl.getBoundingClientRect();
//   console.log(bounds);
  boxEl.steps--;
  if (boxEl.steps < 0) {
    boxEl.direction = Math.floor(Math.random() * 4);
    boxEl.steps = Math.random() * 20;
  }
  //   console.log(boxEl.direction);

    if (boxEl.direction === 0 && boxEl.x < bounds.right - 100) {
        boxEl.x += speed;
        // console.log("first step: ")
        // console.log(boxEl.x += speed)
    }
    if (boxEl.direction === 1 && boxEl.x > bounds.left) {
        boxEl.x -= speed;
        // console.log(boxEl.x -= speed)
    }
    if (boxEl.direction === 2 && boxEl.y < bounds.bottom - 100) {
        boxEl.y += speed;
        // console.log(boxEl.y += speed)
    }
    if (boxEl.direction === 3 && boxEl.y > bounds.top) {
        boxEl.y -= speed;
        // console.log(boxEl.y -= speed)
  }

  boxEl.style.top = boxEl.y + "px";
  boxEl.style.left = boxEl.x + "px";

  window.requestAnimationFrame(move);
}
