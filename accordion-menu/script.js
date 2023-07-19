const mainEl = document.querySelectorAll(".main");
const contentEl = document.querySelectorAll(".content");

for (let i = 0; i < mainEl.length; i++) {
  let activeClass = false;
  // console.log(mainEl[i]);
  mainEl[i].addEventListener("click", () => {
    // const showContentEl = document.getElementsByClassName("content");
    // console.log(showContentEl);
    // console.log(mainEl[i]);
    // console.log(mainEl[i].nextElementSibling);
    // console.log(mainEl[i].childNodes);
    //   console.log(mainEl[i].getElementsByClassName("content"))

    // mainEl[i].classList.toggle("active");
    // contentEl.add("active");
    
      clearActive();
      contentEl[i].classList.toggle("active");

  
        

  });
}

function clearActive() {
  for (let i = 0; i < contentEl.length; i++) {
    contentEl[i].classList.remove("active");
  }
}
