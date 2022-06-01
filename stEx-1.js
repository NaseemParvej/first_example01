// let capitalize = function (str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };
// console.log(capitalize("the developer in India"));

// function toCamelCase(str) {
//   return str
//     .split(" ")
//     .map(function (word, index) {
//       // If it is the first word make sure to lowercase all the chars.
//       if (index == 0) {
//         return word.toLowerCase();
//       }
//       // If it is not the first word only upper case the first char and lowercase the rest.
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     })
//     .join(" ");
// }
// console.log(toCamelCase("this IS a program"));

function toCamelCase(str) {
  return str
    .split(" ")
    .map(function (word, index) {
      // If it is the first word make sure to lowercase all the chars.
      if (index == 0) {
        // return word.toLowerCase();
      }
      // If it is not the first word only upper case the first char and lowercase the rest.
      //   return word.charAt(0).toUpperCase();//T I A P;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); //This Is A Program;
    })
    .join(" ");
}
console.log(toCamelCase("this IS a program")); //This Is A Program;

/////////////=================================================================

function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
console.log(isValidJSON("10"));
