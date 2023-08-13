const output = document.querySelector(".output");
const userVal = document.querySelector("input[name='user-name']");
const btn = document.querySelector("button");

output.setAttribute("class", "hide");

btn.onclick = () => {
//   userVal.value = "";
if (userVal.value.length > 3) {
      output.borderColor = "white";
      const message = `Welcome to the site ${userVal.value}`;
    output.classList.remove("hide");
    output.classList.add("output");
    output.textContent = message;
  } else {
    output.textContent = "Name length must be 3+ characters long";
    userVal.style.borderColor = "red";
    output.classList.remove("hide");
    output.classList.add("output");
  }
};
