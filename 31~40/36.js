const num = Number(prompt("숫자 입력"));

console.log(`입력 : ${num}\n`);
let array = "";
for (let i = 1; i <= 9; i++) {
  array += i * num + " ";
}
console.log(`출력 : ${array}`);
