// let str = "You can make a tax-deductible donation here";
// let latter = ["c", "e", "n", "k", "t", "d"];
// function find_latter(str) {
//   let result = 0;
//   let array = str.split(" ");

//   for (let i = 0; i < str.length; i++) {
//     if (latter.includes(array[i])) {
//       result++;
//     }
//   }
//   console.log(result);
// }
// find_latter(str);//output-17;
//---------------------------------------------------------
// let str = "gooegke is software";
// let val = str.substring(0, 4);
// let value = str.split(" ");
// console.log(value);

//--------------------------------------------------
// function find_str(str) {
//   for (let i = 0; i < str.length; i++) {
//     val.push(value[i]);
//     console.log(val);
//   }
// }
// find_str(str);

// let sum = 0;
// let num = 100;
// for (let i = 1; i <= num; i++) {
//   sum = sum + i;
// }
// console.log("sum=", sum);
//--------------------------------------------------------
// let target = 6;
// let result = [];
// function output(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j <= array.length; j++) {
//       if (array[i] + array[j] === 6) {
//         result.push({ i, j });
//       }
//     }
//   }
//   return result;
// }
// console.log(output([2, 4, 3, 1, 5]));
//output- [ { i: 0, j: 1 }, { i: 2, j: 2 }, { i: 3, j: 4 }, { i: 4, j: 3 } ]

//--------------------------------------------------------------------------------

// function find_num(arr) {
//   let max_val = [0];
//   let min_val = [0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         max_val.push(arr[i]);
//         console.log(max_val);
//       } else {
//         min_val = +1;
//         console.log(min_val);
//       }
//     }
//   }
// }
// // find_num([11, 23, 33, 5, 55, 69]);

// function find(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   let sec_max = arr[2];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > sec_max) {
//       max = arr[i];
//       sec_max = max;
//     } else if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return sec_max;
// }
// console.log(find([11, 23, 33, 5, 55, 69]));
//-----------------------------------------------------------------

// function nextBiggest(arr) {
//   let max = -Infinity,
//     result = -Infinity;

//   for (const value of arr) {
//     const sec_max = Number(value);

//     if (sec_max > max) {
//       [result, max] = [max, sec_max]; // save previous max
//     } else if (sec_max < max && sec_max > result) {
//       result = sec_max; // new second biggest
//     }
//   }

//   return result;
// }

// const arr = ["20", "120", "111", "215", "54", "78"];
// console.log(nextBiggest(arr));

////----------------------------------------------------------

// function FindSec_max(arr) {
//   let max = arr[0];
//   let sec_max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//       sec_max = max;
//       max = arr[i];
//     } else if (arr[i] > sec_max) {
//       sec_max = arr[i];
//     }
//   }
//   console.log(sec_max);
// }
// FindSec_max([11, 22, 33, 44, 65, 76]);//output-65;

/////---------------------------------------------------

// program to remove duplicate value from an array

// function getUnique(arr) {
//   let removeArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (removeArr.indexOf(arr[i]) === -1 && arr[i] != "") {
//       removeArr.push(arr[i]);
//     }
//   }
//   console.log(removeArr);
// }
// getUnique([1, 2, 3, 2, 4, 3, 7, 2, 7]);

//--sum of prime number----------------

// let sum = 0;
// let num = 10;
// for (let i = 1; i <= num; i++) {
//   sum = sum + i;
//   i++;
// }
// console.log("sum=", sum);

//-------assending order----------------------------

// function getUnique(arr) {
//   let reArr = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         reArr = arr[j];
//         arr[j] = arr[i];
//         arr[i] = reArr;
//       }
//     }
//   }

//   console.log(arr);
// }
// getUnique([1, 2, 3, 6, 4, 8, 5, 9, 7]);

//--------------------------------------------------

// function out(num) {
//   for (let i = 1; i < num; i++) {
//     if (i % 15 === 0) {
//       console.log(i, "prtk", "ankit");
//     } else if (i % 3 === 0) {
//       console.log(i, "=", "ankit");
//     } else if (i % 5 === 0) {
//       console.log(i, "=", "prtk");
//     }
//   }
// }
// out(20);
///--------------------------------

function charAt(str) {
  let ex_str = [];
  for (let i = 0; i < str.length; i++) {
    ex_str.push(str[i]);
    let result = [];
    for (let j = 0; j < ex_str.length; j++) {
      if (ex_str[i] === "t" || ex_str[i] === "c") {
        console.log(786);
      }
    }
  }
}

charAt("Get remove characters of string");
