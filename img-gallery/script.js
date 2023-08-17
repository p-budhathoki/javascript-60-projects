const output = document.querySelector(".output");

// const images = ["car.jpg", "city.jpg", "diving.jpg", "gliders.jpg"];
let images = [];
images[0] = "./images/car.jpg";
images[1] = "./images/city.jpg";
images[2] = "./images/diving.jpg";
images[3] = "./images/gliders.jpg";
// images.push("./images/car.jpg");
// images.push("./images/city.jpg");
// images.push("./images/driving.jpg");
// images.push("./images/gliders.jpg");


// for (let i = 0; i < images.length; i++) {
//   const el = document.createElement("div");
//   output.append(el);
//   Gallery(el);
// }

Gallery(output);

function Gallery(parentEle) {
  let curIndex = 0;
  const gallery = document.createElement("div");
  parentEle.append(gallery);

  const curImage = document.createElement("img");
  curImage.setAttribute("src", images[0]);

  const btn1 = document.createElement("button");
  btn1.textContent = "Prev";
  gallery.appendChild(btn1);

  const btn2 = document.createElement("button");
  btn2.textContent = "Next";
  gallery.appendChild(btn2);

  btn1.addEventListener("click", () => {
    curIndex--;

    if (curIndex < 0) {
      curIndex = images.length - 1;
    }
    console.log(curIndex);
    curImage.src = images[curIndex];
  });

  btn2.addEventListener("click", () => {
    curIndex++;

    if (curIndex > images.length) {
      curIndex = 0;
    }
    console.log(curIndex);
    curImage.src = images[curIndex];
  });
}

// curImage.setAttribute("src", "https://picsum.photos/200/300?grayscale");
//   curImage.setAttribute("src", "https://picsum.photos/200/300");
//   gallery.appendChild(curImage);
