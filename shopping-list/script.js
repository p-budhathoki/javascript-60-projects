window.onload = build;
const addItemEl = document.getElementById("addItem");
const btnAddItem = document.querySelector(".btn");
const outputEl = document.querySelector(".output");
const newItemEl = document.querySelector("#addItem");

addItemEl.focus();
let myList = ["bananas", "milk", "apples", "pears", "eggs", "bread", "cheese"];

btnAddItem.addEventListener("click", () => {
  // console.log("clicked");
  if (newItemEl.value) {
    myList.push(newItemEl.value);
    build();
  }
});

function build() {
  outputEl.innerHTML = `<h2>My List</h2>`;
  // outputEl.classList.add("heading");
  //   console.log("ready");
  const tbl = document.createElement("table");

  for (let i = 0; i < myList.length; i++) {
    //   table rows
    const rows = document.createElement("tr");
    rows.ind = i;
    //   table cell 1
    const cell1 = document.createElement("td");
    cell1.innerHTML = myList[i];
    rows.appendChild(cell1);

    // table cell 2
    const cell2 = document.createElement("td");

    //   span inside cell 2
    const span1 = document.createElement("span");
    span1.innerText = "Delete";

    span1.addEventListener("click", () => {
      console.log(myList[i]);
      //   tbl.deleteRow(myList[i]);
      let itemOut = myList.splice(i, 1); // removes item from array
      // console.log(itemOut);

      console.log(myList);
      build();
      //   let temp = span1.closest("tr");
      //   let temp = span1.closest("tr").ind;
      //   console.log(temp);
    });

    cell2.appendChild(span1);
    //   rows.appendChild(cell2);

    //   span inside cell 2
    const span2 = document.createElement("span");
    span2.innerText = "Edit";

    span2.addEventListener("click", () => {
      //   rows.style.backgroundColor = "yellow";
      rows.style.color = "tomato";

      let tempEl = rows.firstElementChild;
      const newInput = document.createElement("input");
      newInput.value = tempEl.innerText;
      newInput.focus();
      tempEl.innerHTML = "";
      tempEl.appendChild(newInput);
      newInput.addEventListener("blur", () => {
        tempEl.innerHTML = newInput.value;
        rows.style.color = "whitesmoke";
        myList[i] = newInput.value;
      });
      console.log(tempEl);
    });

    cell2.appendChild(span2);
    rows.appendChild(cell2);

    //    //   table cell 1
    // const cell3 = document.createElement("td");
    // cell3.innerHTML = myList[i];
    // rows.appendChild(cell3);

    tbl.appendChild(rows);
  }
  console.log(tbl);
  outputEl.appendChild(tbl);
}
