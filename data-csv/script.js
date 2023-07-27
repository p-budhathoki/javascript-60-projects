const output = document.querySelector(".output");
const btn = document.querySelector("button");

let myData = [
  ["Title", "Content"],
  ["Row1", "Content1"],
  ["Row2", "Hello World"],
  ["Row3", "JavaScript"],
];
let url;
const feedId =
  "2PACX-1vQHpYaYKiAQbg78LF4PAzv-GLM43eJd-KyTg24fVqDk3v_NeL1qFdHn7RHM4QM-QZTr_Hw65yHZOMz_";
const feed =
  "https://docs.google.com/spreadsheets/d/e/" +
  feedId +
  "pubhtml" +
    "/1/public/values?alt=json";
  console.log(feed)

btn.addEventListener("click", () => {
  //   console.log("download");
  createCSV(myData);
});

// https://docs.google.com/spreadsheets/d/e/2PACX-1vQHpYaYKiAQbg78LF4PAzv-GLM43eJd-KyTg24fVqDk3v_NeL1qFdHn7RHM4QM-QZTr_Hw65yHZOMz_/pubhtml

function clean(row) {
  let rep = "";
  row.forEach((cell, index) => {
    cell = cell == null ? "" : cell.toString();
    if (cell.search(/("|,|\n)/g) >= 0) cell = '"' + cell + '"';
    if (index > 0) rep += ",";
    rep += cell;
  });
  return rep;
}

function createCSV(data) {
  //   console.log(data);
  let file;
  holder = "";

  if (url !== null) {
    window.URL.revokeObjectURL(url);
  }

  let filename = "test.csv";

  let properties = { type: "text/csv;charset=utf-8;" };
  data.forEach((item) => {
    // console.log(item.join());
    holder += clean(item) + "\n";
  });
  file = new File([holder], filename, properties);
  let link = document.createElement("a");
  url = URL.createObjectURL(file);
  link.setAttribute("href", url);
  link.style.visibility = "hidden";
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  //   console.log(holder);
}
