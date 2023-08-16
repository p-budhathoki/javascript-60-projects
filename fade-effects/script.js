const output = document.querySelector("#output");
// output.length = 5;
for (let i = 0; i < 5; i++) {
  const el = document.createElement("div");
  output.appendChild(el);

  const btn = document.createElement("button");
  btn.textContent = `Click Me ${i + 1}`;
  el.append(btn);

  const div = document.createElement("div");
  div.style.transition = "opacity 1500ms";
  div.style.opacity = "1";
  el.append(div);

  //   el.style.transition = "opacity 1500ms";
  div.textContent = `Counter ${i + 1}`;

  btn.addEventListener("click", () => {
    if (div.style.opacity === "1") {
      div.style.opacity = "0";
    } else {
      div.style.opacity = "1";
    }
  });
}

const fademe = document.querySelectorAll(".fader");
fademe.forEach((ele) => {
  ele.style.transition = "opacity 1500ms";
  ele.style.opacity = "1";

  ele.addEventListener("click", () => {
    // ele.style.opacity = "0";
    if (ele.style.opacity === "1") {
      ele.style.opacity = "0";
    } else {
      ele.style.opacity = "1";
    }
  });
});
