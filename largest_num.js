//-------max,min in array------------------------------------------

// function largest_num(marks) {
//   let max_num = marks[0];
//   let min_num = marks[0];
//   for (let i = 0; i < marks.length; i++) {
//     if (max_num < marks[i]) {
//       max_num = marks[i];
//     } else if (min_num > marks[i]) {
//       min_num = marks[i];
//     }
//   }
//   console.log(max_num + "max_num" + " " + min_num + "min_num");
// }
// largest_num([50, 30, 43, 33, 20, 56, 88, 7, 40]);

//-------------------secont max-----------------------------------

// function largest_num(marks) {
//   let max_num = marks[0];
//   let sec_max = marks[0];
//   let min_num = marks[0];
//   for (let i = 0; i < marks.length; i++) {
//     if (max_num < marks[i]) {
//       sec_max = max_num;
//       max_num = marks[i];
//     } else if (marks[i] > sec_max) {
//       sec_max = marks[i];
//     } else if (min_num > marks[i]) {
//       min_num = marks[i];
//     }
//   }
//   console.log(max_num + "=max_num", min_num + "=min_num", sec_max + "=sec_max");
// }
// largest_num([50, 30, 43, 73, 20, 56, 88, 7, 40]);

//--------------------another example  second max--------------------------------
// function find(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   let sec_max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       sec_max = max;
//       max = arr[i];
//     } else if (arr[i] > sec_max) {
//       sec_max = arr[i];
//     } else if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   console.log(max + "=max_num", sec_max + "=sec_max", min + "=min_num");
// }
// find([5, 3, 4, 7, 2, 6, 8, 1, 9]);
