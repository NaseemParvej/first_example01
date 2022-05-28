///-----------how many time repeat elements in array-----------------------------

// let arr1 = ["a", "b", "c", "d", "e", "c", "a", "c", "b"];
// function outPut(arr) {
//   let arr2 = [];
//   let count = 1;
//   arr2 = arr.sort();
//   console.log(arr2);
//   for (let i = 0; i < arr2.length; i = i + count) {
//     count = 1;
//     for (let j = i + 1; j < arr2.length; j++) {
//       if (arr2[i] === arr2[j]) {
//         count++;
//       }
//     }

//     console.log(arr2[i], "=", count + " time repeat");
//   }
// }
// outPut(["a", "b", "c", "a", "e", "c", "a", "c", "b"]);
//------------------------------------------------------------

// function uniqueFn(arr) {
//   let count_1 = {};
//   arr.forEach(function (i) {
//     count_1[i] = (count_1[i] || 0) + 1;
//   });
//   console.log(count_1);
// }
// uniqueFn(["a", "b", "c", "d", "e", "c", "a", "c", "b"]); //{ a: 2, b: 2, c: 3, d: 1, e: 1 }

//----------------------------------------------------------------------------------------
// let arr = [1, 2, 11, 14, 3, 9, 5, 7];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

//----------------------------------------------------------------------

let arr = ["Ankit Singh", "Naseem Parvej", "Asif Ali"];
let arr1 = [];

for (let i = 0; i < arr.length; i++) {
  //   let val = arr[i].split(" ");
  //   arr1.push(val[val.length - 1]);
  arr1.push(arr[i].split(" ")[arr[i].split(" ").length - 1]);
}
console.log(arr1); //[ 'Singh', 'Parvej', 'Ali' ];

//-------------------------------------------------------------------------------
