const output = document.querySelector(".output");

output.addEventListener("click", testFun);

function testFun() {
  console.log("ready");
  //   fun();
  const x = 10;
  if (x > 5) {
    console.log("Works okay");
  } else {
    throw "x is too small";
  }

  try {
    fun();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("complete");
  }
}

const arr1 = [1, 5, 7, 8, 23, 342, 2, 3, 4];

const arr2 = arr1.map((val, ind, arr) => {
  console.log(val, ind);
  return val * val;
});

const arr3 = arr1.map((val) => val * val);
const arr4 = arr1.map(callbackFun);

function callbackFun(val) {
  return val * val;
}

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
