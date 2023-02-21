// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
const input = prompt("입력");

for (let i = 0; i < input.length; i++) {
  if (input[i + 1] === undefined) {
    break;
  }
  console.log(`${input[i]} ${input[i + 1]}`);
  console.log(" ");
}
