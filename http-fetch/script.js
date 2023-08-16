const output = document.querySelector(".output");
// const url = "my.json";
const url = "https://www.discoveryvip.com/shared/person1000.json";
const xhr = new XMLHttpRequest();
// console.log(xhr);

xhr.open("GET", url);
// console.log(xhr); // readyState 1

xhr.onload = function () {
  if (xhr.status === "200") {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    maker(data);
  } else {
    console.error(xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error(xhr.statusText);
};

xhr.send();
// console.log(xhr); // readyState 4
output.innerHTML += "<hr>";

console.log("============Fetch================");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    maker(data);
  })
  .catch((error) => console.log(error));

function maker(data) {
  data.forEach((ele) => {
    output.innerHTML += `
      <div>${ele.name.first} ${ele.name.last} ${ele.age}</div>
      ${JSON.stringify(ele)}
      
      `;
  });
}
