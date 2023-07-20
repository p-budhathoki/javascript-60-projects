const popups = document.querySelectorAll(".popup");
const outputEl = document.querySelector(".output");
const heading = document.querySelector(".message h3");
const closeButton = document.querySelector(".close");
const containerEl = document.querySelector(".container");

for (let i = 0; i < popups.length; i++) {
  // console.log(popups[i])
  popups[i].addEventListener("click", () => {
    // containerEl.disabled = true;
    let outputText = popups[i].getAttribute("data-message");
    // console.log(outputText);
    outputEl.classList.remove("hide");
    // containerEl.style.opacity = ".5";
    heading.textContent = outputText;
  });
}

closeButton.addEventListener("click", () => {
  outputEl.classList.add("hide");
//   containerEl.style.opacity = "0.1";
});

function showMessage(output) {
  outputEl.classList.remove("hide");
}
