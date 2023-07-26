const myForm = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".error");
const required = ["email", "password", "name"];

myForm.addEventListener("submit", validation);

function validation(e) {
  let data = {};
  //   console.log(e);
  e.preventDefault();

  errors.forEach((item) => {
    item.classList.add("hide");
  });

  let error = false;

  inputs.forEach((el) => {
    let tempName = el.getAttribute("name");
    // console.log(tempName);

    if (tempName != null) {
      el.style.borderColor = "#ddd";
      if (el.value.length == 0 && required.includes(tempName)) {
        addError(el, "Required Field", tempName);
        error = true;
      }
      //   data[tempName] = el.value;
    

    if (tempName == "email") {
      let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
      let result = exp.test(el.value);
      if (!result) {
        addError(el, "Invalid Email", tempName);
        error = true;
      }
      //   console.log(result);
    }
    //   password
    if (tempName == "password") {
      let exp = /[A-Za-z0-9]+$/;
      let result = exp.test(el.value);
      if (!result) {
        addError(el, "Only numbers and letters", tempName);
        error = true;
      }
      if (!(el.value.length > 3 && el.value.length <9)) {
        addError(el, "Needs to be between 3 - 8 characters", tempName);
      }
        }
        data[tempName] = el.value;
        }
  });
    if (!error) {
        myForm.submit();
    }
  //   console.log(data);
}
function addError(input, msg, fieldName) {
  let temp = input.nextElementSibling;
  temp.classList.remove("hide");
  temp.textContent = fieldName.toUpperCase() + " " + msg;
  input.style.borderColor = "red";
  input.focus();
  //   console.log(temp);
}
function test() {}
