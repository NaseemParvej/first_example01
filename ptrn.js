// function pattern(num) {
//   let star = "";
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       if (i == 0 || i == num - 1) {
//         star += "*";
//       } else {
//         if (j == 0 || j == num - 1) {
//           star += "*";
//         } else {
//           star += " ";
//         }
//       }
//     }
//     star += "\n";
//   }
//   return star;
// }
// console.log(pattern(5));

//-------------------------------------------------------------------------------------

// function rightTr(num) {
//   let newpt = "";
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       newpt += j;
//     }
//     newpt += "\n";
//   }
//   return newpt;
// }
// console.log(rightTr(5));
// 1
// 12
// 123
// 1234
// 12345

//-------------------------------------------------

// function rightTr(num) {
//   let newpt = "";
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       newpt += i;
//     }
//     newpt += "\n";
//   }
//   return newpt;
// }
// console.log(rightTr(5));
// 1
// 22
// 333
// 4444
// 55555

//--------------------------------------------------------

// function rigthTriangle(n) {
//   let str = "";
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i + 1; j++) {
//       str += j;
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(rigthTriangle(5));

// str += count;\\use in loop str add count and fund reverse traingle
//       count++;
// 0123
// 456
// 78
// 9
let text1 = new Date(); //2022-05-31T07:20:52.858Z
let text = String(new Date()); //2022-05-31T07:20:52.858Z
console.log(text1);
console.log(text);
