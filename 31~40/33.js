// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램
const numbers = prompt("여러개의 숫자 입력").split(" ").reverse();
console.log(...numbers);
