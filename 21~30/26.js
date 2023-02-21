const 태양계 = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
const input = prompt("행성 입력");
let index;
switch (input) {
  case "수성":
    index = 0;
    break;
  case "금성":
    index = 1;
    break;
  case "지구":
    index = 2;
    break;
  case "화성":
    index = 3;
    break;
  case "목성":
    index = 4;
    break;
  case "토성":
    index = 5;
    break;
  case "천왕성":
    index = 6;
    break;
  case "해왕성":
    index = 7;
    break;
}
console.log(태양계[index]);
