// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 5000); // 5 5 5 5 5
// }

///-----number Pattern---------------------------------------------

// function printPattern(range) {
//   for (var i = 1; i <= range; i++) {
//     var str = "";
//     for (var j = 1; j <= i; j++) {
//       str += j + " ";
//     }
//     console.log(str);
//   }
// }
// printPattern(8);

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */

//-------------Nested loop----------------------------

// first loop--
// for (let i = 1; i <= 3; i++) {

//   // second loop--
//   for (let j = 1; j <= 3; j++) {
//       if (i == 2) {
//         break;
//       }
//       console.log(`i = ${i}, j = ${j}`);
//   }
// }

//--------------------------------------------------------

// program to print the text
// declaring a function
function greet(name) {
  console.log("Hello " + name);
}

// variable name can be different
let name = "Naseem";

// calling function
greet(name); //Hello Naseem;
