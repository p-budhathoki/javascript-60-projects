// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// game div
gameDiv = document.createElement("div");
gameDiv.setAttribute("class", "game-area");
div.appendChild(gameDiv);

// heading
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Scroll Text";
gameDiv.appendChild(h1);

label = document.createElement("label");
label.setAttribute("for", "input1");
div.appendChild(label);

input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("id", "input1");
input.setAttribute("value", "10");
div.appendChild(input);

// game play area
divText = document.createElement("div");
divText.setAttribute("class", "game");
gameDiv.appendChild(divText);

divContents = document.createElement("div");
divContents.setAttribute("id", "contents");
divText.appendChild(divContents);

divContent = document.createElement("div");
divContent.setAttribute("id", "content");
divContents.appendChild(divContent);

// Result
divMsg = document.createElement("h1");
divMsg.setAttribute("class", "message");
divMsg.textContent = "Remaining : ";
div.appendChild(divMsg);

// button
button = document.createElement("button");
button.setAttribute("class", "btn btn-play");
button.innerHTML = "Click";
div.appendChild(button);

const buttonEl = document.querySelector("button");
const contentsEl = document.querySelector("#contents");
const contentEl = document.querySelector("#content");
const speed = document.querySelector("input");
const output = document.querySelector(".message");
let scroller = true;

window.onload = setupScroll;

buttonEl.addEventListener("click", () => {
  console.log("click");
  scroller ^= true;
  //   buttonEl.innerText = "Click = " + scroller;
  buttonEl.innerText = !scroller ? "Start" : "Stop";
});

contentEl.addEventListener("mouseenter", scrollSpeed);
contentEl.addEventListener("mouseleave", scrollSpeed);

function scrollSpeed(e) {
  console.log(e.type);
  scroller = e.type == "mouseenter" ? false : true;
  output.innerHTML = "Mouse Stopper";
}

function setupScroll() {
  contentEl.innerHTML = textsContent;
  let temp = contentEl.getBoundingClientRect();
  console.log(temp);
  contentsEl.style.height = temp.height + "px";
  contentEl.style.top = temp.height + "px";
  scrollInt = setInterval(scrollEle, 50);
}
function scrollEle() {
  console.log("Working");
  let scrollSpeed = speed.value;
  if (scroller) {
    let posY = parseInt(contentsEl.style.top);
    if (posY + contentsEl.clientHeight > 0) {
      contentsEl.style.top = posY - scrollSpeed + "px";
    } else {
      contentsEl.style.top = contentEl.clientHeight + "px";
    }
    output.innerHTML =
      "Scroll Speed : " + scrollSpeed + "<br>" + " Y-Position : " + posY;
  }
}

let textsContent =
  "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam voluptas sed quasi, maxime ea delectus aspernatur sint excepturi vitae explicabo ipsam aliquid, cumque quisquam culpa laboriosam tempore provident quibusdam exercitationem quam alias. Aliquam quos veritatis eius. Totam iure magni odit adipisci voluptatum corporis molestias dolor tempore? Doloribus dicta neque cum autem animi similique explicabo sapiente voluptatum illo. Dolore qui, expedita consectetur numquam quaerat, eligendi quod id iure deleniti ex dignissimos placeat. Consequatur laudantium enim inventore rerum delectus magni minus earum est error provident, sunt ducimus rem vel cupiditate quaerat modi exercitationem corrupti eos tempora impedit. Cum, exercitationem! Debitis similique doloremque numquam ducimus amet recusandae ipsum culpa nam odio! Ratione aut eaque culpa ipsa praesentium officiis voluptatibus fuga minima nobis, autem enim alias molestiae labore earum, soluta a aliquam quas ad eligendi mollitia quasi. Impedit quaerat rem quis eaque eum, nesciunt, modi eius laboriosam adipisci labore tempore. Ab repellendus numquam perferendis voluptatum, exercitationem eaque accusantium magnam voluptatibus itaque nisi voluptates natus vitae quisquam dignissimos ex quasi rerum incidunt a non laborum? Modi harum maiores possimus debitis facere quod voluptas! Ad, blanditiis. Dolore, illum quam deleniti, dolorem, totam quasi quo ipsum consequuntur reprehenderit voluptate maxime minus ipsa expedita quos harum doloremque aliquam cum sit facere commodi dolor aperiam omnis quisquam. Exercitationem, et officia sit aut, architecto odit laudantium itaque blanditiis consequuntur at cumque, deserunt rerum ipsam corrupti atque. Corrupti recusandae consequatur reprehenderit, deserunt ut quas ad culpa fugit assumenda ex esse debitis aperiam illo nobis error, ipsam possimus sint incidunt ducimus perspiciatis eos doloribus! Voluptates error, quod repellat dicta unde vel nulla placeat dolor consequatur autem aliquam iste velit reprehenderit atque officia, dolorem enim quae? Amet quam, officia ipsam modi voluptatum error rem impedit ratione reiciendis molestias magni labore eligendi cumque laudantium nostrum repellendus magnam, animi blanditiis reprehenderit illo aliquam sed asperiores. Deserunt nam assumenda delectus, qui reiciendis aperiam possimus dignissimos voluptas nobis quas hic illo at maiores. Deserunt quasi molestiae laboriosam, aperiam explicabo ad quam! Est, doloribus! Numquam, labore? Nisi, quasi, consequatur quas soluta, quaerat optio et eaque id perferendis cum sit! Suscipit, fugit vero optio sapiente voluptates consequuntur omnis id praesentium vitae debitis deserunt numquam nostrum nulla, quasi quas aut? Rerum eum, quas nobis hic alias neque ducimus minima impedit voluptatem inventore deserunt! Totam, maiores quaerat. Corporis nostrum unde porro quas tempore ducimus odio libero deleniti suscipit! Necessitatibus aliquam quos, cum suscipit, non sit perferendis voluptate quidem sunt ducimus voluptates iure, maiores itaque omnis aut dignissimos nihil. Asperiores labore facilis laborum earum quae tempora distinctio nobis qui eius enim, praesentium, aut veritatis quam voluptates magnam quo porro possimus nam. Asperiores temporibus ipsa perferendis sit molestiae aliquam sint quam, reprehenderit velit doloremque. Porro architecto, facere odio iusto, debitis voluptatum odit totam animi placeat libero ratione quos molestias fuga magni! Ratione sapiente atque officiis illo quidem impedit velit minus fugiat omnis pariatur provident dolorem rerum amet voluptatibus ducimus asperiores beatae, facere placeat, minima quo. Culpa illo repellat veritatis, molestiae aliquid id ducimus officia explicabo commodi iusto ea tempora recusandae est natus. Consequatur quis impedit porro veritatis delectus laboriosam architecto, incidunt vel earum aut blanditiis dolores rerum tenetur ducimus voluptatem consectetur quisquam, ex reprehenderit molestiae! Beatae accusamus explicabo sapiente quaerat animi voluptatibus asperiores iusto porro illo saepe, aut suscipit dicta soluta harum atque vel sint neque natus. Dolores, magni hic. Quam suscipit omnis necessitatibus minima obcaecati, eaque dolor quia hic eius nostrum earum itaque laborum sapiente, assumenda veritatis maxime ipsa rerum voluptatibus et quasi quas unde repellat! Eum impedit maiores sint fugiat itaque sequi at voluptatibus nisi, temporibus sed! Officiis, temporibus ducimus nihil asperiores non est omnis, minus dolorem incidunt obcaecati sit.</p>";
