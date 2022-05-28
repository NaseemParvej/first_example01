//-----------------for in loop--------------------------------------------------------------------------

// let names = {
//   name: "Naseem Parvej",
//   age: 28,
//   city: "Deoria",
//   Mobile: "9569169810",
//   pincode: "274001",
// };

// for (let i in names) {
//   console.log(i, "is", names[i]);
// }

// The for...in loop is used to iterate through the keys of an object.

//---------------for of loop------------------------------

// let student = [
//   {
//     name: "Ankit Singh",
//     class: "Designer",
//     rollNumber: 275,
//     Mobile: "9569169810",
//     pincode: "274001",
//   },
// ];

// for (let i of student) {
//   console.log(i);
// }

// The for..of loop in JavaScript allows you to iterate over
// iterable objects (arrays, sets, maps, strings etc).

//-----------------------------------------------------------------------

//------------------------------------------------------------------------------

// // define Map
// let map = new Map();

// // inserting elements
// map.set("name", "Jack");
// map.set("age", "27");

// // looping through Map
// for (let [key, value] of map) {
//   console.log(key + "- " + value);
// }

//----------------------constructor function-----------------------------------------
// ["constructor=",'creat an object in javascript using object constructor function']
// {"Prototypes=",'every function and object has a property named prototypes by default.'}
// ['before asign the value of prototypes is shows an empty object {....}']
// [prototype='adding prop. methods to a constuctor function']
// [object='and inherit properties and method from a prototypes']

//constructor function
// function strEx() {
//   this.names = "Naseem";
// }

// //creat object
// let str1 = new strEx();
// strEx.prototype.gender = "male";
// // console.log(strEx.prototype);
// console.log(str1._proto_);
// console.log(str1.gender);

// let arr = new Array("gogo", "bhogo");
// console.log(arr);//[ 'gogo', 'bhogo' ]
//------------------------------------------------------
let stData = [
  ["Jack", 24],
  ["Sara", 23],
];
// stData.forEach((st) => {
//   st.forEach((data) => {
//     console.log(data);
//   });
// });
for (let i of stData) {
  for (let j of i) {
    console.log(`${j}`);
  }
}
