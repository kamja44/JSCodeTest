const array = prompt("이름 입력").split(" ");
let result = {};
let winner = "";
for (let index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}
winner = Object.keys(result).reduce((a, b) => {
  return result[a] > result[b] ? a : b;
});
console.log(`${winner} ${result[winner]}`);
