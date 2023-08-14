const myInput = document.querySelector('input[type="color"]');
const holder = [];

const main = document.createElement("div");
document.body.prepend(main);

const btn = document.createElement("button");
const btn2 = document.createElement("button");
btn.textContent = "Save Color";
btn2.textContent = "List of Saved Color";
// main.append(btn);
document.body.prepend(btn);
document.body.prepend(btn2);

btn2.onclick = () => {
  holder.forEach((ele) => {
    const span = document.createElement("span");
    document.body.append(span);
    span.style.backgroundColor = ele;

    span.onclick = () => {
      span.remove();
    };
  });
};

btn.onclick = () => {
  holder.push(myInput.value);
  // main.textContent = holder.toString();
  const btn1 = document.createElement("button");
  main.append(btn1);
  btn1.textContent = myInput.value;
  btn1.style.backgroundColor = myInput.value;
  btn1.style.border = "1px solid black";

  btn1.onclick = () => {
    document.body.style.backgroundColor = btn1.textContent;
  };
};

myInput.onchange = (e) => {
  console.log(e.target.value);
  console.log(myInput.value);
  document.body.style.backgroundColor = myInput.value;
};
