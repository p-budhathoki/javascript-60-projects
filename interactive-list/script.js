const myArr = [
  { name: "Lauris", score: 0, id: 1 },
  { name: "Lemur", score: 0, id: 2 },
  { name: "Aston", score: 0, id: 3 },
  { name: "Lombardi", score: 0, id: 4 },
];
const output = document.querySelector(".output");
const btn = document.querySelector("#addNew");
const addFriend = document.querySelector("#addFriend");
const tblOutput = document.createElement("table");
output.appendChild(tblOutput);

addFriend.focus();
build();
btn.addEventListener("click", () => {
  const myObj = { name: addFriend.value, score: 0, id: myArr.length + 1 };
  myArr.push(myObj);
  console.log(myObj);
  build();
});

function build() {
  tblOutput.innerHTML = "";
  addFriend.value = "";
  addFriend.focus();
  myArr.forEach((ele, ind) => {
    const tr = document.createElement("tr");
    tblOutput.append(tr);

    const td1 = document.createElement("td");
    td1.textContent = ele.id;
    tr.append(td1);

    const td2 = document.createElement("td");
    td2.textContent = ele.name;
    tr.append(td2);

    const td3 = document.createElement("td");
    td3.textContent = ele.score;
    tr.append(td3);

    tr.addEventListener("click", () => {
      ele.score++;
      td3.textContent = ele.score;
    });
  });
}
