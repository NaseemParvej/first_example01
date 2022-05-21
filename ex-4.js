let arr1 = [10, 20, 20, 10, 10];
let count = 1;
let pairCount = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (typeof arr1[i] === "number" && arr1[i] === arr1[j]) {
      arr1[j] = "abc";
      count++;
    }
  }
  pairCount = parseInt(count / 2) + pairCount;
  count = 1;
}
console.log(pairCount);
