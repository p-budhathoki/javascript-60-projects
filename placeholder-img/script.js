const selectEl = document.querySelector("select");
const inputAllEl = document.querySelectorAll("input");
const imgEl = document.querySelector("img");
const textareaEl = document.querySelector("textarea");

selectEl.addEventListener("change", build);

inputAllEl.forEach((item) => {
  console.log(item);
});

function cleanHash(str) {
  return str.replace("#", "");
}

function spacers(str) {
  return str.split("").join("+");
}

function build(e) {
  let i = {};
  i.size = selectEl.value;
  i.text = spacers(inputAllEl[0].value);
  i.bgColor = cleanHash(inputAllEl[1].value);
  i.txtColor = cleanHash(inputAllEl[2].value);
  i.path =
    "http://via.placeholder.com/" +
    i.size +
    "/" +
    i.bgColor +
    "/" +
    i.txtColor +
    "?text=" +
    i.text;
  imgEl.src = i.path;
  textareaEl.value = i.path;
  textareaEl.select();
    textareaEl.focus();
    document.execCommand("copy");

  console.log(i);
}
