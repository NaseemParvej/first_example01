// //--------------------------------------------------------------------------
// [ substr() – removes a character from a particular index in the String.
// replace() – replaces a specific character/string with another character/string.
// slice() – extracts parts of a string between the given parameters.]

//------Slice method(index, remove) -- remove elments from an array---------

// let charAt = "Get remove characters of string";
// console.log(charAt.length / 2);

//------------------------------------------------------------------

// function abc(str) {
//   console.log(str.slice(1, 6));
// }
// abc("the path is not found.");
// console.log("remove element".slice(-3));
// // console.log("Temove element".substring(4, 6));
// console.log(false < 1);

//----------------------------------------------------------

// function occurse(a, b) {
//   b = a.replace(/e/g, "");
//   console.log(b);
// }
// occurse("remove character", "tell");

//----------------------------------------------------------

// var ret = "data-123".replace('data-','');
// console.log(ret);   //prints: 123

//------remove str-----------------------------------------------

// var removeUselessWords = function (txt) {
//   var uselessWordsArray = [
//     "a",
//     "at",
//     "be",
//     "can",
//     "cant",
//     "could",
//     "couldnt",
//     "do",
//     "does",
//     "how",
//     "i",
//     "in",
//     "is",
//     "many",
//     "much",
//     "of",
//     "on",
//     "or",
//     "should",
//     "shouldnt",
//     "so",
//     "such",
//     "the",
//     "them",
//     "they",
//     "to",
//     "us",
//     "we",
//     "what",
//     "who",
//     "why",
//     "with",
//     "wont",
//     "would",
//     "wouldnt",
//     "you",
//   ];
//   var expStr = uselessWordsArray.join("|");
//   return txt
//     .replace(new RegExp("\\b(" + expStr + ")\\b", "gi"), " ")
//     .replace(/\s{2,}/g, " ");
// };
// var str =
//   "The person is going on a walk in the park. The person told us to do what we need to do in the park";
// console.log(removeUselessWords(str));

// --------------remove first&last character-------------------------------------------------------

// function still(text, n) {
//   n *= -1;
//   return text.slice(0, n);
// }
// console.log(still("abcdefg", 2));

// let Take = "Maths, Chemistry, Geography,Webar";
// let result = Take.slice(1, -1);
// console.log(result);
// (result = aths, Chemistry, Geography, Weba);

//---------------------------------------------------------------------------------------------------

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
// find_latter(str); //output-17;

//------------Remove dublicate ele--------------------------------------

// let array = [
//   "Manish",
//   "Chandan",
//   "Piyush",
//   "Sunil",
//   "Pankaj",
//   "Piyush",
//   "Pankaj",
//   "Tiny",
//   "Chandan",
//   "Manish",
// ];

// let outputArray = [];
// let count = 0;
// let start = false;

// for (i = 0; i < array.length; i++) {
//   for (j = 0; j < outputArray.length; j++) {
//     if (array[i] == outputArray[j]) {
//       start = true;
//     }
//   }
//   count++;
//   if (count == 1 && start == false) {
//     outputArray.push(array[i]);
//   }
//   start = false;
//   count = 0;
// }
// console.log(outputArray);

//-----------------dublicate--------------------------

// let name = [
//   "asif",
//   "prtk",
//   "prtk",
//   "asif",
//   "ankit",
//   "ankit",
//   "prtk",
//   "clove",
//   "asif",
// ];
// let dublicate_Char = [...new Set(name)];
// console.log(dublicate_Char);

//----------dublicate--------------------------------------------------------------------

// let array = [
//   "Manish",
//   "Chandan",
//   "Piyush",
//   "Sunil",
//   "Pankaj",
//   "Piyush",
//   "Pankaj",
//   "Tiny",
//   "Chandan",
//   "Manish",
// ];

// let outputArray = [];

// let count = 0;

// let start = false;

// for (i = 0; i < array.length; i++) {
//   for (j = i; j < array.length; j++) {
//     if (array[i] == array[j]) {
//       outputArray.push(array[i]);
//     }
//   }
// }
// console.log(outputArray);

//-------------------------------------------------------------------------

let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits.copyWithin(2, 2));

// const array1 = ["apple", "ball", "cap", "door", "eather"];
// console.log(array1.copyWithin(3, 0));

//----------------------------------------------------------------------
// let phone = [
//   { brand: "apple", price: 100 },
//   { brand: "micromax", price: 100 },
//   { brand: "CellOne", price: 100 },
//   { brand: "redmi", price: 100 },
// ];
// console.log(phone.f(brand));
