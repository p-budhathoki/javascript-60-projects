// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// div to store animals div
divAnimal = document.createElement("div");
divAnimal.setAttribute("class", "animals");
div.appendChild(divAnimal);

// lion div
divLion = document.createElement("div");
divLion.setAttribute("class", "lion");
divAnimal.appendChild(divLion);

// Heading Lion
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Lion";
divLion.append(h1);

// Button Lion
button = document.createElement("button");
button.setAttribute("class", "btn btn-lion");
button.setAttribute("type", "submit");
button.textContent = "Roar";
divLion.append(button);

// cougar div
divCougar = document.createElement("div");
divCougar.setAttribute("class", "cougar");
divAnimal.appendChild(divCougar);

// Heading Cougar
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Cougar";
divCougar.append(h1);

// Button Cougar
button = document.createElement("button");
button.setAttribute("class", "btn btn-cougar");
button.setAttribute("type", "submit");
button.textContent = "Scream";
divCougar.append(button);

// dog div
divDog = document.createElement("div");
divDog.setAttribute("class", "dog");
divAnimal.appendChild(divDog);

// Heading Dog
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Dog";
divDog.append(h1);

// Button Dog
button = document.createElement("button");
button.setAttribute("class", "btn btn-dog");
button.setAttribute("type", "submit");
button.textContent = "Bark";
divDog.append(button);

// select buttons
const btnLion = document.querySelector(".btn-lion");
const btnCougar = document.querySelector(".btn-cougar");
const btnDog = document.querySelector(".btn-dog");

// create new Audio object
// const roar = new Audio("./sound/lion.mp3");
// const scream = new Audio("./sound/cougar.mp3");
// const bark = new Audio("./sound/bark.mp3");

// add event listeners
// btnLion.addEventListener("click", () => {
//   let duration = roar.duration;
//   let muted = roar.muted;
//   roar.play();
// });
// btnCougar.addEventListener("click", () => {
//   let duration = scream.duration;
//   let muted = scream.muted;
//   scream.play();
// });
// btnDog.addEventListener("click", () => {
//   let duration = bark.duration;
//   let muted = bark.muted;
//   bark.play();
// });

const playBtn = document.querySelectorAll(".btn");
// console.log(playBtn);
// console.log(playBtn[0].textContent);

for (let i = 0; i < playBtn.length; i++) {
  playBtn[i].addEventListener("click", () => {
    let animal = playBtn[i].textContent.toLocaleLowerCase();
    //   animal.play();
    // console.log(animal);
    // addStyle(animal);
    makeSound(animal);
    console.log("Make Sound : " + animal);

    playBtn[i].classList.add("active");

    setTimeout(() => {
      playBtn[i].classList.remove("active");
    }, 200);
  });
}

function makeSound(name) {
  //   console.log(name);
  switch (name) {
    case "roar":
      let lionAudio = new Audio("./sound/lion.mp3");
      lionAudio.play();
      break;
    case "scream":
      let cougarAudio = new Audio("./sound/cougar.mp3");
      cougarAudio.play();
      break;
    case "bark":
      let dogAudio = new Audio("./sound/bark.mp3");
      dogAudio.play();
      break;
  }
}

// function addStyle(name) {
//   playBtn[i].classList.add("active");

//   setTimeout(() => {
//     playBtn[i].classList.remove("active");
//   }, 200);
// }