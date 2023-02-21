const name = prompt("이름 입력(공백 구분)").split(" ");
const score = prompt("점수 입력(공백 구분)").split(" ");

console.log(name);
console.log(score);
const obj = {};
for (let i = 0; i < score.length; i++) {
  obj[name[i]] = score[i];
}
console.log(obj);
