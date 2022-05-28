// let arr1 = [10, 20, 20, 10, 10];
// let count = 1;
// let pairCount = 0;
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = i + 1; j < arr1.length; j++) {
//     if (typeof arr1[i] === "number" && arr1[i] === arr1[j]) {
//       arr1[j] = "abc";
//       count++;
//     }
//   }
//   pairCount = parseInt(count / 2) + pairCount;
//   count = 1;
// }
// console.log(pairCount);

//---------------------------------------------------------------------

// function findStr(a, b) {
//   let ar = a.split("");
//   let arr = b.split("");
//   if (ar.length === arr.length) {
//     for (let i = 0; i < ar.length; i++) {
//       if (arr.includes(ar[i])) {
//         let val = arr.indexOf(ar[i]);
//         arr.splice(val, 1);
//       } else {
//         return false;
//       }
//       return true;
//     }
//   } else {
//     return false;
//   }
// }
// console.log(findStr("wolf", "flow"));
//------------------------------------------------------------------------------------

// let str = "welcome to Deoria";
// let str1 = str.split(" ");
// console.log(str1);
// let arr = [];
// for (let i = 0; i < str1.length; i++) {
//   let array1 = [];
//   console.log(str1[i]);
//   for (let j = str1[i].length - 1; j >= 0; j--) {
//     array1[str1[i].length - 1 - j] = str1[i][j];
//   }

//   str1[i] = array1.join("");
//   console.log(str1[i]);
// }
// console.log(str1);

//-----------------------------------------------------------------------------------

// let string = "The Grate way to move";
// let namffe = "Naseem";
// var str = [];
// for (let i = namffe.length - 1; i >= 0; i--) {
//   str[str.length] = namffe[i];
//   console.log(str);
// }
// console.log(str.join(""));
//---------------------------------------------------------------

// let arr1 = [1, 2, 3, 4];
// arr1[arr1.length] = 7;
// console.log(arr1);
// let arr2 = [5, 6, 7, 8];

// for (let i = 0; i < arr2.length; i++) {
//   arr1[arr1.length] = arr2[i];
// }
// console.log(arr1);

//---------------------------------------------------------------

// function hcf_lcm(a, b) {
//   let highfactor = 1;
//   let lcm_num = 1;
//   if (a < b) {
//     let c = a;
//     a = b;
//     b = c;
//   }
//   if (a % b === 0) {
//     highfactor = b;
//   } else {
//     return hcf_lcm(b, a % b);
//   }

//   console.log(highfactor, "hcf");

//   //    if (a > b) {
//   //       for (let i = 2; i <= b; i++) {
//   //         if (b % i === 0 && a % i === 0) {
//   //           highfactor = i;
//   //         }
//   //       }
//   //       console.log(highfactor);
//   //     }
// }
// hcf_lcm(20, 21);

//-----------------------------------------------------------------------

// function factorials(n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factorials(n - 1);
//   }
// }
// console.log(factorials(5));
//------------------------------------------------------------------
// function abc(str) {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
//   }
//   return reverse;
// }
// console.log(abc("Naseem"));//meesaN

//--------------------------------------------------------------------

// function secMax(arr) {
//   let max = 0;
//   let max2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max2 = max;
//       max = arr[i];
//     } else if (arr[i] > max2) {
//       max2 = arr[i];
//     }
//   }

//   console.log("max=" + max, "secMax=" + max2);
// }
// secMax([11, 23, 10, 44, 7, 18]);
//--------------------------------------------------------------------------------
// let a = [11, 23, 10, 44, 7, 18, 32];
// console.log(a.sort((a, b) => a - b)[a.length - 2]);

//---------------------------------------------------------------------------------------------------------------------------------------------

// let text = "The binary function";
// let element = "n";
// let new_text = text.split("");
// for (let i = 0; i < new_text.length; i++) {
//   let remove = "";
//   if (element.includes(new_text[i])) {
//     new_text.splice(i, 1);
//   }
// }
// console.log(new_text.join(""));

//==------------------------sorting---loop--------------------
let arr = [4, 32, 2, 5, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Sorted array=>", arr);
