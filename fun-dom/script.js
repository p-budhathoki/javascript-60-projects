const garbage = document.getElementById("garbage");
const replicate = document.querySelectorAll(".copyMe");
let holder = {};
console.log(replicate);

replicate.forEach((ele, ind) => {
  console.log(ele);
  console.log(ind);

  // add event listeners
  ele.addEventListener("click", (e) => {
    console.log(ind);

    holder.obj = ele.cloneNode(true);
    holder.obj.style.cursor = "move";
    holder.obj.classList.add("newb");
    holder.obj.style.backgroundColor = randomColor();
    holder.obj.style.left = ele.offsetLeft + "px";
    holder.obj.style.top = ele.offsetTop + 200 + "px";

    holder.obj.startX = ele.offsetLeft;
    holder.obj.startY = ele.offsetTop;
    holder.obj.moves = Math.floor(Math.random() * 25);
    holder.obj.int = setInterval(mover, 25);

    function mover() {
      if (holder.obj.moves <= 0) {
        clearInterval(holder.obj.int);
      } else {
        holder.obj.moves--;
        holder.obj.startY += 10;
        holder.obj.startX += 1;
        holder.obj.style.top = holder.obj.startY + "px";
        holder.obj.style.top = holder.obj.startX + "px";
      }
    }

    document.body.appendChild(holder.obj);

    console.log(holder.obj);
    dragger(holder.obj);
  });
  ele.style.left = ind * 150 + "px";
});

function randomColor() {
  function hexVal() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    hex = ("0" + String(hex)).substr(-2);
    return hex;
  }
  return "#" + hexVal() + hexVal() + hexVal();
}

function dragger(ele) {
  let pos = {};
  ele.onmousedown = dragMouse;

  function dragMouse(e) {
    pos.newX = e.clientX;
    pos.newY = e.clientY;
    // console.log(pos.newX, pos.newY);

    document.onmouseup = function () {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    document.onmousemove = function (e) {
      pos.oldX = pos.newX - e.clientX; // amount to move horizontal
      pos.oldY = pos.newY - e.clientY; // amount to move vertical

      pos.newX = e.clientX;
      pos.newY = e.clientY;

      if (isCollide(ele)) {
        console.log("Over");
        ele.onmousedown = null;
        ele.parentElement.removeChild(ele);
      }

      ele.style.top = ele.offsetTop - pos.oldY + "px";
      ele.style.left = ele.offsetLeft - pos.oldX + "px";
    };
  }
}

function isCollide(a) {
  let aRect = a.getBoundingClientRect();
  let bRect = garbage.getBoundingClientRect();
  console.log(aRect);

  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
