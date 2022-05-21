// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

//---------------remove dublicate element------------------------------------
let array = [1, 2, 3, 4, 2, 6, 1, 5, 6, 4];
// array.sort(function (a, b) {
//   return a - b; //for accending & decending order
// });
// console.log(array);
let newRemove_array = [...new Set(array)];
console.log(newRemove_array);
// let outputArray = [];
// for (i = 0; i < array.length; i++) {
//   for (j = 0; j < i; j++) {
//     if (array[i] == array[j]) {
//       outputArray.push(array[i]); //for remove dublicate element
//       //   outputArray=arr[i] //for how may dublicate//result=4
//     }
//   }
// }
// console.log(outputArray);//result=2,1,3,4,5,6;

////-------------------------------------------

// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for (var i = 1; i < Arr.length; i++)
//   for (var j = 0; j < i; j++)
//     if (Arr[i] < Arr[j]) {
//       var x = Arr[i];
//       Arr[i] = Arr[j];
//       Arr[j] = x;
//     }

// console.log(Arr);

///////--------------------------
