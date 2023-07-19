const rawText = document.querySelector("textarea[name=txtarea]");
const finishedText = document.querySelector("textarea[name=output]");
const btnEl = document.querySelector("button");
const counterEl = document.querySelector(".counter");
let mytimer;

btnEl.addEventListener("click", () => {
  // console.log("click")

  let temp = rawText.value;
  //   console.log(temp);

  let exp = /([A-Za-z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/gi;

  let holder = [];
  let emailData = temp.match(exp);
  if (temp !== "") {
    // console.log(emailData);

    for (let i = 0; i < emailData.length; i++) {
      if (holder.indexOf(emailData[i]) == -1) {
        holder.push(emailData[i]);
      }
    }
  }
//   console.log(temp);

  if (temp === "") {
    rawText.textContent = "Please enter text for processing";
    setInterval(() => {
      rawText.innerHTML = "";
      rawText.focus();
    }, 3000);
  } else {
    counterEl.classList.toggle("hide");
    let tempHolder = holder.join(";");
    counterEl.innerText = "Email Found : " + emailData.length;
    finishedText.innerHTML = tempHolder;
  }

  //     counterEl.classList.toggle("hide");
  //   if (temp !== "") {
  //     let tempHolder = holder.join(";");
  //     counterEl.innerText = "Email Found : " + emailData.length;
  //     finishedText.innerText = tempHolder;
  //   } else {
  //     rawText.textContent = "Please enter text to process";
  //     setInterval(() => {
  //       //   clearInterval(mytimer);
  //       // rawText.textContent = "Enter text to process";
  //       rawText.innerHTML = "";
  //       rawText.focus();
  //     }, 3000);
  //   }
  finishedText.addEventListener("click", () => {
    finishedText.select();
  });
});

// /([A-Za-z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/gi

// Lorem ijackson@live.com ipsum dolor zwood@live.com sit, amet rgarton@live.com consectetur adipisicing elit. Itaque, laboriosam expedita ea architecto autem consectetur ex totam voluptatem iure? Ex illo minus nulla sed jkegl@yahoo.com stecoop@mac.com reiciendis voluptatibus tedrlord@outlook.com voluptate placeat magni benanov@att.net earum facere, voluptatem ducimus! Voluptatum quis ipsa nihil, dolor at quidem aperiam satishr@sbcglobal.net rem non officiis dolorum magnam, gward@sbcglobal.net cupiditate, atque noahb@comcast.net hic totam! Ea ad reprehenderit impedit sed mhassel@icloud.com quisquam enim obcaecati josem@yahoo.ca pariatur earum!
