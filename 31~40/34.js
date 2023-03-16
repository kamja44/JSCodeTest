const array = prompt("키 입력").split(" ");
console.log(array);
let sort = true;
for (let i = 0; i < array.length; i++) {
  if (array[i] > array[i + 1]) {
    sort = false;
  }
}
if (sort) {
  console.log("Yes");
} else {
  console.log("No");
}
