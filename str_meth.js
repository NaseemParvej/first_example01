// let text1 = "Ankit";
// let text2 = "Prateek";
// let text3 = "The developer!";
// let result = text1.concat(" & ", text2, " or ", text3);
// let out_put = `Welcome ${text1}, ${text2}!`;
// console.log(out_put);
// console.log(result);

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log(html);

//--------------------------------------------
const text1 = "hello";
const text2 = "world";
const text3 = "     JavaScript    ";

// concatenating two strings
// const result1 = text1.concat(" ", text2);
// console.log(result1); // "hello world"

// // converting the text to uppercase
// const result2 = text1.toUpperCase();
// console.log(result2); // HELLO

// // removing whitespace from the string
// const result3 = text3.trim();
// console.log(result3); // JavaScript

// // converting the string to an array
// const result4 = text1.split();
// console.log(result4); // ["hello"]

// // slicing the string
// const result5 = text1.slice(1, 3);
// console.log(result5); // "el"

//first string---
// let str = "This is Heading";
// console.log(str);
// var position = str.indexOf("is");
// console.log(position); //2
// position = str.lastIndexOf("is");
// console.log(position); //5
// var replace_text = str.replace("is", "is not");
// console.log(replace_text);

//--split("")-----------------

let str1 = "The great day of life";
// console.log(str1.length - 2);
// let remove = str1.split("e");
// console.log(remove); //[ 'Th', ' gr', 'at day of lif', '' ];
let result = "";
for (let i = str1.length - 1; i >= 0; i--) {
  result += str1[i];
}
console.log(`${str1}= reverse is= ${result}`); //The great day of life= reverse is= efil fo yad taerg ehT;
console.log(result); //efil fo yad taerg ehT;
