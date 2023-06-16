let player = {
  speed: 100,
  x: 100,
  y: 100,
};

// whenever the window is ready, invoke the build function
window.addEventListener("DOMContentLoaded", build);

document.addEventListener("keydown", (e) => {
  // left: 37
  // top: 38
  // right: 39
  // bottom: 40

  let key = e.keyCode;
  console.log(key);
  // left
  if (key === 37) {
    player.x -= player.speed;
  }
  // right
  if (key === 39) {
    player.x += player.speed;
  }

  // keyUp
  if (key === 38) {
    player.y -= player.speed;
  }

  // keyDown
  if (key === 40) {
    player.y += player.speed;
    }
    
    player.el.style.left = player.x + "px";
    player.el.style.top = player.y + "px";
});

function build() {
  // create a new div element
  player.el = document.createElement("div");
  player.x = 100;
  player.y = 100;

  // add styles to the player.el element
  player.el.style.cssText = `
        position: absolute;
        width: 10rem;
        height: 10rem;
        background-color:rgba(255, 255, 255,.5);
        top: player.x + px;
        left: player.y + px;
    `;

  document.body.appendChild(player.el);
}

// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
// The JSON.stringify() method converts a JavaScript object or