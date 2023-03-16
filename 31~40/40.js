const limit = prompt("최대 무게");
const mem = Number(prompt("인원수"));
let total = 0;
let count = 0;
for (let i = 1; i <= mem; i++) {
  total += parseInt(prompt("무게 입력"), 10);
  if (total <= limit) {
    count++;
  }
}
console.log(count);
