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
function dd(num) {
  let newpt = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i === 0 || i === num - 2) {
        newpt += " *";
      } else {
        newpt += "g ";
      }
    }
    newpt += "\n";
  }
  return newpt;
}
console.log(dd(5));
