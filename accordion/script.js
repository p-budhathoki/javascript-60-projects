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
div.appendChild(b