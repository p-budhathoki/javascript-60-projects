const myArray = ["lion", "cougar", "bark"];
document.addEventListener("DOMContentLoaded", init);



function init() {
  myArray.forEach(function (item) {
    let div = document.createElement("div");
    div.setAttribute("class", "animals " + item);
    div.innerText = item.toUpperCase();
    div.addEventListener("click", () => {
      playIt(item);
    });
    document.body.appendChild(div);
  });
}



function playIt(name) {
  let activeEl = document.querySelector("." + name);
  let sound1 = new Audio("./sound/" + name + ".mp3");
  sound1.play();
  activeEl.classList.add("active");

  setTimeout(() => {
    activeEl.classList.remove("active");
  }, 200);
}
