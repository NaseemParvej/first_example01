// let arr = ["T", "h", "e"];
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//   str = str + arr[i];
// }
// console.log(str);

// let str1 = ["Javascript"];
// let str = "a";
// console.log(str);
// let reStr = "";
// for (let i = 0; i < str1.length; i++) {
//   if (str1[i] === "a") {
//     str1[i] = "8";
//   }
//   console.log(str1);
// }

// const arr = ["a", "b", "c"];
// let i = 0;
// while (i < arr.length) {
//   if (arr[i] === "a") {
//     arr[i] = "z";
//   }
//   i++;
// }
// console.log(arr);

///--------------------------------------------------------

// let obj = { name: "asif ali", age: 29, mob: "9336369290" };
// console.log(obj.age);

// let arr1 = ["a", "b", "c", "d", "e", "c", "a", "c", "b"];
// function outPut(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {

//     if (Object.hasOwn(obj, arr[i])) {
//       obj.arr[i] = parseInt(obj.arr[i]) + 1;
//     } else {
//       obj.arr[i] = "1";
//     }
//   }
//   console.log(val, count);
// }
// outPut(["a", "b", "c", "d", "e", "c", "a", "c", "b"]);

//----------------------------------------------------------------------------------------------

// function uniqueFn(arr) {
//   let count = {};
//   arr.forEach(function (i) {
//     count[i] = (count[i] || 0) + 1;
//   });
//   console.log(count);
// }
// uniqueFn(["a", "b", "c", "d", "e", "c", "a", "c", "b"]);//{ a: 2, b: 2, c: 3, d: 1, e: 1 }
//------------------------------------------------------------------------------------------------------------
// let arr1 = ["a", "b", "c", "d", "e", "c", "a", "c", "b"];
// function outPut(arr) {
//   let arr2 = [];
//   let count = 1;
//   arr2 = arr.sort();
//   console.log(arr2);
//   for (let i = 1; i < arr2.length; i = i + count) {
//     count = 1;
//     for (let j = i + 1; j < arr2.length; j++) {
//       if (arr2[i] === arr2[j]) {
//         count++;
//       }
//     }

//     console.log(arr2[i], "=", count + " time repeat");
//   }
// }
// outPut(["a", "b", "c", "d", "e", "c", "a", "c", "b"]);
//--------------------------------------------------------------
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

//--------------------------------------------------------
// let arr = [
//   {
//     name: "Naseem Parvej",
//     age: 22,
//     city: "Deoria",
//     Mobile: "9569169810",
//     pincode: 201,
//   },
//   {
//     name: "Ankit Singh",
//     age: 22,
//     city: "Deoria",
//     Mobile: "9569169810",
//     pincode: 402,
//   },
//   {
//     name: "Asif Ali",
//     age: 30,
//     city: "Deoria",
//     Mobile: "9569169810",
//     pincode: 101,
//   },
//   {
//     name: "Deepak Shukla",
//     age: 36,
//     city: "Deoria",
//     Mobile: "9569169810",
//     pincode: 901,
//   },
//   {
//     name: "Prateek Singh",
//     age: 22,
//     city: "Deoria",
//     Mobile: "9569169810",
//     pincode: 401,
//   },
// ];
// //age>30, age<40 data find;
// let arr_name;
// let arr_name2 = [];
// let pincode_Add;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i].age === arr[j].age) {
//       pincode_Add = arr[i].pincode + arr[j].pincode;
//       arr_name = arr[i].name + "-" + arr[j].name;
//       arr_name2.push(pincode_Add + "=" + arr_name);
//     }
//   }
// }
// console.log(arr_name2);
// output: [ '602=Naseem Parvej-Prateek Singh', '503=Ankit Singh-Asif Ali' ]

//-------------------------------------------------------------------------------------------

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
// ///---------------------------------------------

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
