let url;
const feedID = "1pcFnzsPZYMdiKJgsDdkH4FFjxPBZrnGaC-BCba9EX_Q";
const feed =
  "https://spreadsheet.google.com/feeds/list/" +
  feedID +
  "/1/public/values?alt=json";
document.addEventListener("DOMContentLoaded", loadJSON);
let myData = [
  ["Title", "Content"],
  ["Row1", "Content1,comma"],
  ["Row2", "Hello World"],
  ["Row3", "JavaScript"],
];
const output = document.querySelector(".output");
const btn = document.querySelector("button");
btn.style.backgroundColor = "green";
btn.style.color = "white";
btn.style.padding = "15px";
btn.style.fontSize = "1.5em";
btn.addEventListener("click", function () {
  createCSV(myData);
});

function loadJSON() {
  fetch(feed)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let mainArray = [];
      let heading = [];
      let firstRun = true;
      data.feed.entry.forEach(function (item) {
        let holder = [];
        for (let key in item) {
          if (key.substring(0, 3) == "gsx") {
            if (firstRun) {
              heading.push(key.split("$")[1]);
            }
            holder.push(item[key].$t);
          }
        }
        if (firstRun) {
          firstRun = false;
          mainArray.push(heading);
        }
        mainArray.push(holder);
      });
      myData = mainArray;
    });
}

function clean(row) {
  let rep = "";
  row.forEach(function (cell, index) {
    cell = cell == null ? "" : cell.toString();
    if (cell.search(/("|,|\n)/g) >= 0) cell = '"' + cell + '"';
    //https://regexr.com/
    if (index > 0) rep += ",";
    rep += cell;
  });
  return rep;
}

function createCSV(data) {
  let file;
  let holder = "";
  if (url !== null) {
    window.URL.revokeObjectURL(url);
  }
  let filename = "test.csv";
  let properties = {
    type: "text/csv;charset=utf-8;",
  };
  data.forEach(function (item) {
    holder += clean(item) + "\n";
  });
  file = new File([holder], filename, properties);
  let link = document.createElement("a");
  url = window.URL.createObjectURL(file);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
