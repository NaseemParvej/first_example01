// let student = {
//   name: "Naseem",
//   field: "UI Developer",
//   experiance: 02,
// };
// for (let key in student) {
//   console.log(`${key}=${student[key]}`);
// }

// let sale = { Jacket: 5000, mobile: 11000, drive: 4000 };
// for (let i in sale) {
//   let output = "$" + sale[i];
//   //   console.log(i, output); //Jacket $5000;
//   console.log(`${i}:${output}`);//Jacket:$5000;
// }

// let str = "1a2b3c";
// for (let i in str) {
//   console.log(str[i], i, { i });
// }

// let a = 0.1 + 0.2;
// console.log(a); // 0.30000000000000004;

// let id = Symbol("id");

// let person = {
//   name: "Jack",
//   age: 25,
//   [id]: 12,
// };

// // using for...in
// for (let key in person) {
//   console.log(`${key} ${person[key]}`);//name Jack;
// }
// console.log(person); //{ name: 'Jack', age: 25, [Symbol(id)]: 12 };

//-----------------------------------------------------------------------

// program to print the text
// declaring a function
function greet(name) {
  console.log("Hello " + name);
}

// variable name can be different
let name = "Naseem";

// calling function
greet(name);
