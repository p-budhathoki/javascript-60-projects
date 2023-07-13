let slideIndex = 0;
let timer;
const myImages = [
  {
    img: "https://via.placeholder.com/250/09f?text=image1",
    caption: "Infinity and Beyond 1",
  },
  {
    img: "https://via.placeholder.com/250/e4e?text=image2",
    caption: "Infinity and Beyond 2",
  },
  {
    img: "https://via.placeholder.com/250/1f1?text=image3",
    caption: "Infinity and Beyond 3",
  },
];
builder();

function builder() {
  for (let i = 0; i < myImages.length; i++) {
    // create a new div,img and div element
    let slide = document.createElement("div");
    slide.setAttribute("class", "mySlide fade");

    let img = document.createElement("img");
    img.setAttribute("src", myImages[i].img);
    img.setAttribute("alt", myImages[i].caption);

    let cap = document.createElement("div");
    cap.classList.add("caption");
    cap.innerText = myImages[i].caption;

    // append elements
    slide.appendChild(img);
    slide.appendChild(cap);
    document.querySelector(".slideContainer").appendChild(slide);

    //   add dots
    let span = document.createElement("span");
    span.classList.add("dot");
    span.addEventListener("click", () => {
      moveSlide(i);
    });
    document.querySelector(".indicator").appendChild(span);
  }
  playSlides();
}

function playSlides() {
  const slides = document.querySelectorAll(".mySlide");
  const dots = document.querySelectorAll(".dot");
  const active = document.querySelector(".active");
     console.log(slides)
  if (active != null) {
    active.classList.remove("active");
  }
  if (slideIndex + 1 > slides.length) {
    slideIndex = 0;
  }
  slides.forEach((slide) => {
    slide.style.display = "none";
    // console.log(slides[slideIndex])
    // console.log(slide)
  });
  slides[slideIndex].classList.add("active");
  slides[slideIndex].style.display = "block";

  slideIndex++;
  timer = setTimeout(playSlides, 3000);
}

function moveSlide(num) {
  // console.log(num);
  slideIndex = num;
  clearTimeout(timer);
  playSlides();
}
