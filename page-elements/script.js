const output = document.createElement("div");
document.body.append(output);
const message = document.createElement("div");
output.append(message);
const btn = document.createElement("button");
output.append(btn);
btn.textContent = "Add Input";
btn.addEventListener("click", maker);

maker();

function maker() {
  const tempDiv = document.createElement("div");
  const newInput = document.createElement("input");
  output.append(tempDiv);
  tempDiv.append(newInput);
  newInput.value = "test";
  newInput.hiddenValue = Math.random().toString(16).substring(2, 8);
  newInput.style.backgroundColor = "#"+newInput.hiddenValue
  newInput.setAttribute("class", "input");
  newInput.focus();
  newInput.addEventListener("keyup", log);
  newInput.addEventListener("keypress", log);
  newInput.addEventListener("keydown", function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      message.innerHTML += newInput.value + " " + newInput.hiddenValue + "<br />";
      
    }
  });
}

function log(e) {
  console.log(e);
}
