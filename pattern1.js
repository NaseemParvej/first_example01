//---------------------------------------

// function reverse_n(num) {
//   let arrval = 0;
//   let new_arr;
//   while (num != 0) {
//     new_arr = num % 10;
//
//     arrval = arrval * 10 + new_arr;
//     num = Math.floor(num / 10);
//   }
//   return arrval;
// }
// console.log(reverse_n(123456));

//---------------------------------------------------------------------

// function pattern(num) {
//   let str = "";
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       str += " ";
//     }
//     str += " *";
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));

//------------------------------------------------------------------

// function finalFun(a, b) {
//   let arr_final = [];
//   let arr1 = [];
//   let arr2 = [];

//   for (let i = 0; i < a.length; i++) {
//     let extra = [];

//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         // <----   //[ 2, 2, 6, 6 ];
//         arr1.push(a[i], b[j]);
//       }
//       if (a[i] > b[j]) {
//         extra.push(a[i], b[j]);

//         arr2.push(extra);
//       }
//     }
//   }
//   arr_final.push(arr1, arr2);
//   return arr_final;
// }
// console.log(finalFun([1, 2, 4, 6], [8, 2, 6, 7]));

//------------------------------------------------------------------------

// console.log("start");
// setTimeout(function job() {
//   console.log("console after 5 seconds");
// }, 3000);
// console.log("End");

//----------------------------------------------------------------------

function named(num) {
  setTimeout(() => {
    console.log(num);
  }, 5000);
}
named(5);
