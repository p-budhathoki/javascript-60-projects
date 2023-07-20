const copyTextEl = document.querySelector("textarea[name='copyText']");
const finalTextEl = document.querySelector("textarea[name='finalText']");
const moverBtnEl = document.querySelector(".btn-mover");
const copyBtnEl = document.querySelector(".btn-copy");
const outputEl = document.querySelector(".output");

copyTextEl.focus();

moverBtnEl.addEventListener("click", moveText);
copyBtnEl.addEventListener("click", copyText);
finalTextEl.addEventListener("click", selAll);
copyTextEl.addEventListener("click", selAll);

function selAll() { 
    this.select();
}

function moveText() {
  let temp = copyTextEl.value;
  finalTextEl.value = temp;
}
function copyText() {
  let temp = copyTextEl.value;
  copyToClipboard(temp);
}
function copyToClipboard(str) {
  const textarea = document.createElement("textarea");
  textarea.value = str;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  outputEl.innerHTML = textarea.value;
  console.log(textarea.value);
}

setTimeout(() => {

  copyTextEl.value = "";
  finalTextEl.value = "";
  outputEl.value = "";
}, 3000);
