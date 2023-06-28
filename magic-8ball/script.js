// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// heading
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Please Ask a Question";
div.appendChild(h1);

// input
input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "user-input");
input.setAttribute("placeholder", "Question");
input.setAttribute("autofocus", "");

div.appendChild(input);

// button
button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("class", "btn btn-ask");
button.innerHTML = "Ask";
div.appendChild(button);

// display output
divOutput = document.createElement("div");
divOutput.setAttribute("class", "output");
div.appendChild(divOutput);

// result
resultP = document.createElement("p");
resultP.setAttribute("class", "result");
divOutput.appendChild(resultP);

// select elements
const ansArray = [
  "Lorem ipsum dolor, sit amet",
  "consectetur adipisicing elit. Quaerat eum enim blanditiis! Tempore, nisi, sunt ipsum et veniam cum aperiam magni perspiciatis",
  "consequuntur optio sed, ducimus sequi. Rem dolores doloremque",
  "possimus nam nesciunt qui eum. ",
  "Dolore quisquam ducimus doloribus omnis",
];
const message = document.querySelector(".heading");
const question = document.querySelector(".user-input");
const btnEl = document.querySelector(".btn-ask");
const resultEl = document.querySelector(".result");
const keyEnter = 13;

btnEl.addEventListener("click", (e) => {
  
    console.log(question.value);

    let result = Math.floor(Math.random() * ansArray.length);
    console.log(result);
    if (question.value !== "") {
      resultEl.innerText = question.value + " " + ansArray[result];
      question.value = "";
    } else {
      resultEl.innerText = "Pleae enter a question...";
    }
  
});
