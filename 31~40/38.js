const input = prompt("점수 입력").split(" ").sort();
console.log(input);
let arr = [];
let count = 0;
while (arr.length < 3) {
  let n = input.pop();
  if (!arr.includes(n)) {
    arr.push(n);
  }
  count += 1;
}
console.log(count);
