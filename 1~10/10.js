/*
입력
5

출력
    *
   ***
  *****
 *******
*********
*/
const input = prompt("입력");
for (let i = 0; i < input; i++) {
  let star = "";
  for (let j = 0; j < input - i; j++) {
    star += " ";
  }
  for (let k = 1; k <= 2 * i + 1; k++) {
    star += "*";
  }
  console.log(`${star}\n`);
}
