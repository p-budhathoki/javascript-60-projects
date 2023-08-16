const url = "my1.json";
const output = document.querySelector(".output");

const dataSet1 = {
  name: "Laurence Svekis",
  age: 41,
  address: {
    street: "10 Main Street",
    city: "New York",
    state: "NY",
    zip: 10001,
  },
  phoneNumbers: [
    {
      type: "home",
      number: "212 123-1234",
    },

    {
      type: "work",
      number: "985 578-4587",
    },
  ],
};
console.log(dataSet1);
const dataObj = JSON.parse(dataSet1);
console.log(dataObj);

output.addEventListener("click", getJsonData);

function getJsonData() {
  output.innerHTML = "loading...";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      myOutput(data);
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
}

function myOutput(data) {
  let html = `
    <h3>${data.name}</h3>
    <div>${data.address.street}</div>
    <div>${data.address.city}</div>
    <div>${data.address.state}</div>
    <div>${data.address.zip}</div>
    `;

  data.phoneNumbers.forEach((el) => {
    html += `<small>${el.type}-(${el.number})</small><br>`;
  });
  html += JSON.stringify(data);
  output.innerHTML = html;
}
