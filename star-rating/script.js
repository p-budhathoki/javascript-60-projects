const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

for (let i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;
  // console.log(stars[i].starValue);
  // console.log(stars[i])

  // stars[i].addEventListener('click', starRate);
  ["mouseover", "mouseout", "click"].forEach(function (e) {
    stars[i].addEventListener(e, starRate);
  });
}

function starRate(e) {
  let t = e.type;
  let starValue = this.starValue;
  if (t === "click") {
    if (starValue >= 1) {
      output.innerHTML = "You rated " + starValue + " stars";
    }
  }

  stars.forEach(function (ele, ind) {
    // console.log(ele);
    //   console.log(ind);
    if (t === "click") {
      if (ind < starValue) {
        ele.classList.add("orange-red");
      } else {
        ele.classList.remove("orange-red");
      }
    }
    if (t === "mouseover") {
      if (ind < starValue) {
        ele.classList.add("gold");
      } else {
        ele.classList.remove("gold");
      }
    }
    if (t === "mouseout") {
      ele.classList.remove("gold");
    }
  });
}
