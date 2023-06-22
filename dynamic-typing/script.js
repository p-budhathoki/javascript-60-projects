// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// div to store animals div
divEditor = document.createElement("div");
divEditor.setAttribute("class", "note");
div.appendChild(divEditor);

// Heading
p = document.createElement("p");
p.setAttribute("class", "message");
p.textContent = "Result : words per minute";
divEditor.append(p);

// textarea
textarea = document.createElement("textarea");
// textarea.textContent = "Start Typing here...";
textarea.setAttribute("type", "text");
textarea.setAttribute("title", "");
textarea.setAttribute("placeholder", "Start typing here...");
textarea.setAttribute("class", "text-content");
divEditor.append(textarea);

// Button Lion
button = document.createElement("button");
button.setAttribute("class", "btn btn-submit");
button.setAttribute("type", "submit");
button.textContent = "Start";
divEditor.append(button);
