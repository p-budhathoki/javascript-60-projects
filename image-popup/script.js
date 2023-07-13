const images = document.querySelectorAll(".pop img");
// console.log(images);
const output = document.querySelector(".output");
const show = document.querySelector(".show");
const close = document.querySelectorAll(".close");

images.forEach((image) => {
  let counter = 10;
  //   console.log(image.src);
  let src = image.src;
  image.addEventListener("click", popImage);
});

close.forEach((e) => {
  e.addEventListener("click", () => {
    show.classList.add("hide");
  });
});

function popImage(e) {
    // console.log(images);
  //   console.log(counter);
//   console.log(e.target.src);
//   output.querySelector("img").setAttribute("src", images[0].src);
  output.querySelector("img").setAttribute("src", e.target.src);
  show.classList.remove("hide");
}
