// let secretNumber = 5;
// let guess;
// guesser();

// function guesser() {
//   guess = prompt("Please guess the secret number");
//   let guessNumber = Number(guess);

//   if (guessNumber === secretNumber) {
//     alert("You got it");
//     return;
//   } else {
//     let message = guessNumber < secretNumber ? "higher" : "lower";

//     alert("Wrong GO " + message);
//     guesser();
//   }
// }

const myWork = [];

for (let i = 0; i < 10; i++) {
  let stat = i % 2 ? true : false;
  let temp = { name: `Lesson ${i}`, status: stat };
  myWork.push(temp);
}
// console.log(myWork);

const getTrue = myWork.filter(function (item) {
  return item.status === true;
});
// console.log(getTrue);

const obj = { name: "Samuel", gender: "Male", status: "assigned" };
// console.log(obj);

for (let prop in obj) {
  //   console.log(prop, obj[prop]);
}

const arr1 = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < arr1.length; i++) {
  //   console.log(i, arr1[i]);
}

arr1.forEach(function (el, index, array) {
  console.log(array);
  //   console.log(index, el);
});

const numArray = [4, 543, 12, 34, 234, 54, 2, 3, 443, 434334, 3255];
let mapArray = numArray.map(function (x) {
  console.log(x);
  return x * 50;
});
console.log(mapArray);
