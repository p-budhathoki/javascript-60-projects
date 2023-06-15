// the querySelector() method of the Element interface returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors

// console.log(document.getElementById("myID"));
// console.log(document.querySelector("#myID"));
// console.log(document.querySelector(".first"));
// console.log(document.querySelector("div"));
// document.querySelector("span").style.backgroundColor = "yellow";
// document.querySelector(".first span").style.backgroundColor = "blue";
// document.querySelector("li:last-child").style.backgroundColor = "green";
// document.querySelector("li:first-child").style.backgroundColor = "red";
// document.querySelector("li:nth-child(4)").style.backgroundColor = "purple";

// Multiple Element Selection
// - get multiple elements
// - getElementByClassName
// - getElementByTagName
// - querySelectorAll
// - iterate element list with for loop
// - iterate element list with forEach

// The Element method querySelectorAll returns a static NodeList representing a list of elements matching the specified group of selectors which are descendants of the element on which the method was called.

let elList = document.getElementsByClassName("first");
// console.log(elList);

let elList1 = document.getElementsByTagName("span");
// console.log(elList1);

let elList2 = document.querySelectorAll("span");
for (let i = 0; i < elList2.length; i++) {
  const element = elList2[i];
  //   console.log(element);
  //   elList2[i].textContent = i + 1 + " updated";
}

elList2.forEach(function (el, index) {
  //   console.log(index);
  //   el.textContent = `${index}: Updated using forEach`;
});

// const temp = document.querySelector("h1");
// temp.innerText = "1. Infinity and Beyond...";
// temp.innerHTML = "<div>2. Infinity and Beyond...</div>";
// temp.textContent = "3. Infinity and Beyond...";
// temp.setAttribute("class", "red");
// console.log(temp.getAttribute("class"));

const links = document.querySelectorAll("a");
links.forEach(function (link) {
  // console.log(link);
  // get the href attribute from the link element
  // console.log(link.getAttribute("href"));
  link.setAttribute("href", "google.com.au");
  //   console.log(link.getAttribute("href"));
});
console.log("==============");
// const listItems = document.querySelectorAll("li");
// listItems.forEach(function (item, count) {
//   item.id = "li" + count;
//   item.textContent = "list item #" + count;
//   if (item.getAttribute("class")) {
//     console.log(item.getAttribute("class"));
//   }
// });

const listItems = document.querySelectorAll("li");
// console.log(listItems);

// listItems.forEach(function (item, index) {
//   //   console.log(item.className);
//   item.textContent = item.className ? item.className : "No class";
//   item.classList.add("test");
//   console.log(item.className);
//   item.classList.toggle("first");
//   console.log(item);
//   // item.classList.remove("first");
//   //   item.classList.replace("first", "test3");
//   console.log(item.classList.contains("first"));
// });

const el = document.querySelector("div.first");
console.dir(el);
console.log(el.children);
console.log(el.childNodes);

for (let i = 0; i < el.children.length; i++) {
  // show text content of children
  console.log(el.children[i].textContent);
  console.log(el.children[i]);
}
console.log("");
console.log("************");
console.log("");
for (let i = 0; i < el.childNodes.length; i++) {
  // show text content of children
  //   console.log(el.childNodes[i].textContent);
  //   console.log(el.childNodes[i]);
}

// You can use forEach loop for childNodes but not for the children
el.childNodes.forEach(function (ele, index) {
  console.log(ele, index);
});
// console.log(el.parentElement)
// console.log(el.parentNode);
// console.log(el.nextElementSibling);

// const h1 = document.querySelector("h1");
// console.log(h1);
// h1.style.backgroundColor = "rgba(255, 255, 255,.25)";
// h1.style.fontSize = "3rem";

function addElement() {
  // create a new div element
  let newDiv = document.createElement("div");
  console.log(newDiv);
  // give it some content
  let newContent = document.createTextNode("Infinity and Beyond...");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  let currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

// create a new div element
const newDiv = document.createElement("div");
console.log(newDiv);
// apply styles to the new div element
newDiv.style.backgroundColor = "green";
newDiv.style.fontSize = "2rem";
newDiv.style.border = "1px solid rgba(255,255,255,.25)";
// console.log(newDiv);
// add text to the newly created div
// newDiv.textContent = "Infinity and Beyond...";
const textInside = document.createTextNode("1. Infinity and Beyond...");
// append the new div with content
newDiv.appendChild(textInside);
document.body.appendChild(newDiv);

// insert new div element before the h1

const h1 = document.querySelector("h1");
document.body.insertBefore(newDiv, h1);

console.log("=========");
const eleList = document.querySelectorAll(".listItem");
// console.log(eleList);
// for (let i = 0; i < eleList.length; i++) {
//   console.log(eleList[i]);

//   // apply css
//   eleList[i].style.backgroundColor = "rgba(255,255,255,.5)";
//   eleList[i].style.padding = "1rem";
//   eleList[i].style.border = "1px solid red";

//   // add event listener
//   eleList[i].addEventListener("click", () => {
//     eleList[i].classList.toggle("red");
//   });
// }

// function changeColor() {
//   console.log(this);
//   let temp = this.classList.toggle("red");
//   console.log(temp);
// }

// create an new image element
// let newImg = document.createElement("img");
// let randomNumber = Math.floor(Math.random() * 1000) + 1;
// console.log(randomNumber);
// let imgUrl = `https://picsum.photos/id/${randomNumber}/200/300`;
// console.log(imgUrl);
// // add attributes to the new image element
// newImg.setAttribute("src", "imgUrl");

// select all the images in the page
const imgList = document.querySelectorAll("img");
// console.log(imgList);

// loop through the image list
for (let i = 0; i < imgList.length; i++) {
  // add event listener to each image element
  imgList[i].addEventListener("click", () => {
    // get the image path
    console.log(this.src);
    window.open(this.src, "myImage", "resizable=yes,width=500,height=500");
  });
}
