// const person = {
//   name: "Jack",
//   age: 25,

//   // this inside method
//   // this refers to the object itself
//   greet() {
//     console.log(this); // {name: "Jack", age ...}
//     console.log(this.age); // 25

//     // inner function
//     let innerFunc = () => {
//       // this refers to the global object
//       console.log(this); // Window { ... }
//       console.log(this.age); // undefined
//     };

//     innerFunc();
//   },
// };

// person.greet();

///////------------fabbinaci number-----------------------------------------------------

// let i = 0,
//   j = 1,
//   k;
// while (i < 40) {
//   console.log(i);
//   k = i + j;
//   i = j;
//   j = k;
// }

// //-----constructor function to creat object and its prototypes------------------------------------

// creat constructor function
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

// function home (name, energy) {
//     let animal = Object.create(home.prototype)
//     animal.name = name;
//     animal.persons=persons;

//     return animals;
//   }

// let home = { name: "Naseem" };

// home.persons = 10;
// let room = Object.create(home);
// room.name = "Classic";
// room.count = 4;
// console.log(room);

// home.food = function (amount) {
//   console.log(`${this.name} is eating`);
//   this.persons += amount;
// };
// home.rest = function (length) {
//   console.log(`${tgis.name} is in rest`);
//   this.persons += length;
// };
// home.work = function (length) {
//   console.log(`${this.name} is working`);
//   this.persons -= length;
// };
// console.log(home);

// //---------------------------------------------------------

// // let Istr = "the prototype chain allows";
// // Istr.replace(Istr[0], Istr[0].toUpperCase());
// // console.log(Istr.replace(Istr[0], Istr[0].toUpperCase()));
// let Istr = "the prototype chain allows";
// function finUpper(str) {
//   let str1;
//   let str2 = [];

//   str1 = str.split(" ");
//   let arr = [];
//   console.log(str1);
//   for (let i = 0; i < str1.length; i++) {
//     arr.push(str1[i].replace(str1[i][0], str1[i][0].toUpperCase()));

//     str2.push(str1[i].replace(str1[i][3], str1[i][3].toUpperCase()));
//     // arr.push(str1[i][0].replace(i, 0).toUpperCase());
//   }

//   console.log(arr, str2);
// }
// finUpper(Istr);

// let n = 10; // row or column count
// // defining an empty string
// let string = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (i === 0 || i === n - 1 || i === n - 3) {
//       string += " *";
//     } else {
//       if (j === 0 || j === n - 1) {
//         string += " ";
//       } else {
//         string += " *";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// function findP(num) {
//   for (let i = 2; i < num/2; i++) {
//     if (num % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// function outPut(a, b) {
//   let arr1 = [];
//   for (let j = a; j < b; j++) {
//     if (findP(j) === true) {
//       arr1.push(j);
//       return arr1;
//     }
//   }
// }
// console.log(outPut(10, 20));

///-------------------------------------------------

// let num1 = 15;
// let num2 = 25;

// function LCM(n1, n2) {
//   let find_lcm;
//   for (let i = n2; i < n1 * n2; i++) {
//     if (i % n1 === 0 && i % n2 === 0) {
//       find_lcm = i;
//       break;
//     }
//   }
//   return find_lcm;
// }
// console.log(LCM(num1, num2));

//-------------------------------------------------------------

// function fact(num) {
//   let find_fact;
//   let value = [];
//   for (let i = 1; i <= 10; i++) {
//     find_fact = num * i;
//     value.push(find_fact);
//     console.log(num + "*" + i + "=" + find_fact);
//   }
// }
// fact(4);

///----------------------------------------------------------------

// let arr = [5, -2, 8, 4, -6, 15];
// function out(arr) {
//   let str2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       let stArr = [];
//       if (arr[i] + arr[j] > 10) {
//         stArr.push(arr[i]);
//         stArr.push(arr[j]);
//         str2.push(stArr);
//       }
//     }
//   }
//   return str2;
// }
// console.log(out(arr));

// let str = "the asifa is a adult";
// let vovel = "aeiou";
// function find_vovel(str) {
//   let result_vovel = [];

//   for (let i = 0; i < vovel.length; i++) {
//     let findvov = "";
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (vovel[i] === str[j]) {
//         findvov = vovel[i];
//         count++;
//       } else {
//         findvov = vovel[i];
//       }
//     }
//     result_vovel.push(findvov + count);
//   }
//   return result_vovel;
// }
// console.log(find_vovel(str));

//--------------------palindrome---------------------------------------

// let text = "madam this is a level of water";

// function pelindrome(str) {
//   let new_arr = text.split(" ");
//   let arr2 = [];

//   for (let i = 0; i < new_arr.length; i++) {
//     if (new_arr[i] === new_arr[i].split("").reverse().join("")) {
//       arr2.push(new_arr[i]);
//     }
//   }
//   return arr2;
// }
// console.log(pelindrome(text));//[ 'madam', 'a', 'level' ]
