// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램
const input = prompt("알파벳 입력");
const program = (input) => {
  if (input === input.toUpperCase()) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};
program(input);
