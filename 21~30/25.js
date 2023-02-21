// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수
const input = prompt("반지름 입력(정수)");
const circle = (input) => input ** 2 * Math.PI;
console.log(circle(input));
