// Lexical Scope defines how variable names are resolved in nested functions.
// Nested(child) functions have access to the scope of their parent functions.
// This is often confused with closure, but lexical scope is only an important part of closure

// CLOSURE
// w3schools : "A closure is a function having access to the parent scope, even after the parent function has closed"

// A closure is created when we define a function, not when a function is executed

// global scope
let x = 1;

const parentFunction = () => {
  // local scope
  console.log("Parent function");
  let myValue = 2;
  console.log(x);
  console.log(myValue);

  console.log("Child function");
  const childFunction = () => {
    console.log((x += 5));
    console.log((myValue += 1));
  };
  childFunction();
};
parentFunction();

let y = 1;
// closure
console.log("===========CLOSURE=========");
const parentFunction1 = () => {
  // local scope
  console.log("Parent function");
  let myValue1 = 2;
  console.log(y);
  console.log(myValue1);

  console.log("Child function");
  const childFunction1 = () => {
    console.log((y += 5));
    console.log((myValue1 += 1));
  };
  return childFunction1;
};
const result = parentFunction1(); // 1 2
console.log(result); // 1 2 and returns function definition
result(); // 6 3
result(); // 11 4

console.log(y); // 11
// console.log(myValue1); // reference error as it is private variable

// IIFE (Immediately Invoked Function Expression)
const privateCounter = (() => {
  let count = 0;
  console.log(`initial value : ${count}`);
  return () => {
    count += 1;
    console.log(count);
  };
})();
privateCounter(); // 1
privateCounter(); // 2
privateCounter(); // 3

console.log("=============================");

const credits = ((num) => {
  let credits = num;
  console.log(`initial credits value : ${credits}`);

  return () => {
    credits -= 1;
    if (credits > 0) {
      console.log(`Playing game, ${credits} credit(s) remaining`);
    }
    if (credits <= 0) {
      console.log(`Not enough credits remaining`);
    }
  };
})(3);

credits(); // 2
credits(); // 1
credits(); // 0

console.log("===================================");

const val1 = 10;
function outerFun(x) {
  const val2 = 10;
  // inner function
  function innerFun() {
    return x + val2 + val1;
  }
  return innerFun;
}

const val3 = outerFun(15);
console.log("val3 : " + val3())

for (let i = 0; i < 10; i++) {
  console.log(outerFun(i + 2)());
}

console.log("===================================");

const a = "infinity";
console.log(a)
abc();

function abc() {
  const a = "beyond-infinity";
  console.log(a)
}

function myCount() {
  let count = 0;
  return function () {
    return count++;
  }
}

let cnt = myCount();
// console.log(cnt)
for (let i = 0; i < 10; i++) {
  console.log(cnt())
 }
