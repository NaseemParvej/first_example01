//first loop--
for (let i = 1; i <= 3; i++) {
  // second loop--
  for (let j = 1; j <= 3; j++) {
    if (i == 2) {
      break;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
// result--
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 3, j = 1
// i = 3, j = 2
// i = 3, j = 3
