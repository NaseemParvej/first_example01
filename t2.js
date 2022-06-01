function reNumb(num) {
  let count = [];
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  return str;
}

console.log(reNumb(5));
