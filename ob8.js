// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
//   return obj;
// }
// console.log(createPerson());

///----------------------------------------------

// let strr = "fundamnnental JavaScript";
// let str2 = "an";
// function output(str) {
//   let checkA = 0;
//   let checkN = 0;
//   let new_arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str2[0]) {
//       checkA += 1;
//     }
//     if (str[i] === str2[1]) {
//       checkN += 1;
//     }
//   }
//   if (checkA === checkN) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(output(strr));

// ///--------------------------sorting array---------------------------------------------------------
// let array1 = [2, 4, 9, -5, 16, 3];
// function sorting(arr) {
//   let new_arr = [];
//   let newIndex2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let newIndex = 0;

//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         newIndex2 = arr[i];
//         arr[i] = arr[j];
//         arr[j] = newIndex2;
//       }
//     }
//   }

//   return arr;
// }
// console.log(sorting(array1));//[ -5, 2, 3, 4, 9, 16 ]

//----------------------------------------str----------------------------------------------
// console.log(repeatStringNumTimes("abc", 3));

// let text = "abc";
// function repetStr(str, time) {
//   let str1 = str;

//   for (let i = 0; i < str.length; i++) {
//     if (time > 0) {
//       str1 += str[i];
//     }
//   }
//   return str1;
// }
// console.log(repetStr(text, 3));

//-----------------------------------------------------------

// let n1 = 231;
// console.log(n1.reverse());
