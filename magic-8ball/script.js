// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

myFunctionList = document.createElement("div");
myFunctionList.setAttribute("class", "cmd-list clearfix");
div.appendChild(myFunctionList);

//   br = document.createElement("br");
//   myFunctionList.appendChild(br);

// div
myBlock = document.createElement("div");
myBlock.setAttribute("class", "myBlock");
div.appendChild(myBlock);
let currentPos = myBlock.getBoundingClientRect();

// Heading
p = document.createElement("p");
p.setAttribute("class", "block-txt");
p.textContent = "Block";
myBlock.append(p);
