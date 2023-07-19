const tooltips = document.querySelectorAll(".tooltip");
const outputEl = document.querySelector(".output");
let myInterval;

for (let i = 0; i < tooltips.length; i++) {
  tooltips[i].addEventListener("mouseover", (e) => {
    console.log(e);
    let holder = tooltips[i].getAttribute("data-toolContent");
    // let holder = this.getAttribute("data-toolContent");
    console.log(holder);

    clearInterval(myInterval);
    console.log(e.clientX, e.clientY);

    outputEl.style.display = "block";
    outputEl.style.top = e.clientY + 5 + "px";
    outputEl.style.left = e.clientX + 5 + "px";
    outputEl.innerHTML = holder;
    myInterval = setInterval(() => {
      outputEl.style.display = "none";
    }, 3000);
  });

  tooltips[i].addEventListener("mouseout", (e) => {
    outputEl.style.display = "none";
  });
}
