// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// heading
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "JavaScript Accordion Project";
div.appendChild(h1);

// panel
panelDiv = document.createElement("div");
panelDiv.setAttribute("class", "panel active");
div.appendChild(panelDiv);

// panel1
panel1Head = document.createElement("div");
panel1Head.setAttribute("class", "ahead");
panel1Head.innerHTML = "Panel 1 Head";
panelDiv.appendChild(panel1Head);

panel1Body = document.createElement("div");
panel1Body.setAttribute("class", "abody");
panel1Body.innerHTML = "Panel 1 Body Content";
panelDiv.appendChild(panel1Body);

// panel
panelDiv = document.createElement("div");
panelDiv.setAttribute("class", "panel");
div.appendChild(panelDiv);

// panel2
panel2Head = document.createElement("div");
panel2Head.setAttribute("class", "ahead");
panel2Head.innerHTML = "Panel 2 Head";
panelDiv.appendChild(panel2Head);

panel2Body = document.createElement("div");
panel2Body.setAttribute("class", "abody");
panel2Body.innerHTML = "Panel 2 Body Content";
panelDiv.appendChild(panel2Body);

// panel
panelDiv = document.createElement("div");
panelDiv.setAttribute("class", "panel");
div.appendChild(panelDiv);

// panel3
panel3Head = document.createElement("div");
panel3Head.setAttribute("class", "ahead");
panel3Head.innerHTML = "Panel 3 Head";
panelDiv.appendChild(panel3Head);

panel3Body = document.createElement("div");
panel3Body.setAttribute("class", "abody");
panel3Body.innerHTML = "Panel 3 Body Content";
panelDiv.appendChild(panel3Body);

// select elements
const accordion = document.querySelectorAll(".panel");
// console.log(accordion);

accordion.forEach((ele) => {
  //   console.log(ele);
  ele.addEventListener("click", toggleEle);
});

function toggleEle(e) {
  //   console.log("e : " + e);
  //   console.log("this : " + this);
  //   console.log("e.target : " + e.target);
  console.log(e.target.parentElement);

  // remove active class if it exists
  accordion.forEach((ele) => {
    if (e.target.parentElement === ele) {
      ele.classList.toggle("active");
    } else {
      ele.classList.remove("active");
    }
  });
}
