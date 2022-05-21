function output(array, target) {
  let result = [];
  let second_re = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= array.length; j++) {
      if (array[i] + array[j] === 6) {
        result.push(array[i], array[j]);
      }
    }
  }
  return result;
}
console.log(output([2, 4, 3, 1, 5], 6));
//output- [ { i: 0, j: 1 }, { i: 2, j: 2 }, { i: 3, j: 4 }, { i: 4, j: 3 } ]

//----------------------------------

// const arraySparse = [1, 3, , 7];
// let numCallbackRuns = 0;

// arraySparse.forEach((element) => {
//   console.log({ element });
//   numCallbackRuns++;
// });

// console.log({ numCallbackRuns });

// 1
// 3
// 7
// numCallbackRuns: 3
// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.

// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });
// console.log(copyItems);
//result=[ 'item1', 'item2', 'item3', 'item1', 'item2', 'item3' ]

//----------form method-------------------------------------------------------------------------------------------

// const map = new Map([[1, 2], [2, 4], [4, 8]]);
// Array.from(map);
// // [[1, 2], [2, 4], [4, 8]]

// const mapper = new Map([['1', 'a'], ['2', 'b']]);
// Array.from(mapper.values());
// // ['a', 'b'];

// Array.from(mapper.keys());
// // ['1', '2'];

//---------------------------
// Using an arrow function as the map function to
// manipulate the elements
console.log(Array.from([1, 2, 3], (x) => x + x));
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
console.log(Array.from({ length: 5 }, (v, i) => i));
// [0, 1, 2, 3, 4]
