const output = document.querySelector(".output");
const myArr = [];

const btn = document.createElement("button");
btn.textContent = "Add Person";
output.append(btn);

const myInput = document.createElement("input");
myInput.setAttribute("type", "text");
output.prepend(myInput);

const ul = document.createElement("ul");
output.append(ul);
buildListItem();

myInput.focus();

btn.addEventListener("click", addPerson);

function addPerson() {
  const newPerson = myInput.value;
    myArr.push(newPerson);
    adder(newPerson);
  myInput.value = "";
  myInput.focus();
  console.log(myArr);
}

function adder(person) {
    const li = document.createElement("li");
    li.textContent = person;
    ul.appendChild(li);
}

function buildListItem() {
  myArr.forEach((ele) => {
    adder(ele);
  });
}
