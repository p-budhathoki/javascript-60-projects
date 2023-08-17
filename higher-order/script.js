const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(nums);

const dou = nums.map((val) => val * 2);
console.log(dou);

const even = nums.filter((val) => val % 2 === 0);
console.log(even);

const odd = nums.filter((val) => val % 2 !== 0);
console.log(odd);

const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum);

function repeat(oper, num) {
  for (let i = 0; i < num; i++) {
    oper(i, num);
  }
}

function hello(val, total) {
  console.log(`${val + 1} of ${total} Hello`);
}

repeat(hello, 5);

function greater(a) {
  return function (b) {
    return b > a;
  };
}

let greater10 = greater(10);
// console.log(greater10)
for (let i = 0; i < 10; i++) {
  console.log(`${5+i} is Greater than 10 ${greater10(5 + i)}`);
}
