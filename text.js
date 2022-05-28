// function prime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(prime(13));
// function prime_num(a,b) {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     if (prime(i)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(prime_num(10, 20));

// function Prime(num) {
//   let arr = [];
//   for (i = 2; arr.length < num; i++) {
//     let value = 0;
//     for (let j = 2; j <= i; j++) {
//       if (i % j === 0 && i > j) {
//         value = 1;
//       } else if (i % j === 0 && value != 1) {
//         arr.push(i);
//       }
//     }
//   }
//   return arr;
// }
// console.log(Prime(9));

// let strg = "abcdbreadbaejanbh";
// let str1 = "";
// function changeLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a") {
//       //   str[i] = "b";
//       str1 = str1 + "b";
//     } else if (str[i] === "b") {
//       //   str[i] = "a";
//       str1 = str1 + "a";
//     } else {
//       str1 = str1 + str[i];
//     }
//   }
//   console.log(str1);
// }
// changeLetter(strg);

// let str = "abcdefgh";
// // str[0] = "z";
// let str2 = "";
// str2 = str2 + str[0];
// console.log(str2);

let arr11 = [2, 5, 8, 12, 53, 4, 7, 1, 9];
let Farray = arr11;
let arr22 = [1, 2, 8, 5, 53];
function deleteNum(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr1.splice(i, 1);
      i--;
    }
  }
  return arr1;
}
console.log(deleteNum(arr11, arr22));

// function myFunction(num1, num2) {
//   for (let i = num1; i <= num2; i++) {
//     let alpha = "";
//     if (i % 2 === 0) {
//       alpha += "a";
//     } else {
//       alpha += "b";
//     }
//     if (i % 3 === 0) {
//       alpha += "c";
//     }
//     if (i % 5 === 0) {
//       alpha += "d";
//     }
//     console.log(i, alpha);
//   }
// }
// myFunction(10, 20);
