//add an element at the start--------unshift method--------------------

// let dailyActivitie = ['eat', 'sleep'];

// dailyActivities.unshift('work');

// console.log(dailyActivitie); // ['work', 'eat', 'sleep']

// remove the last element-------pop()----------------------------------

// let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// dailyActivities.pop();
// console.log(dailyActivities); // ['work', 'eat', 'sleep']

// // remove the last element from ['work', 'eat', 'sleep']
// const removedElement = dailyActivities.pop();

// //get removed element
// console.log(removedElement); // 'sleep'
// console.log(dailyActivities);  // ['work', 'eat']

// remove the first element--------------shift()-----------------------------

// let dailyActivities = ['work', 'eat', 'sleep'];
// dailyActivities.shift();
// console.log(dailyActivities); // ['eat', 'sleep']

// //---------------------------------------
// let dailyActivities = ['sleep', 'work', 'exercise']
// let newRoutine = ['eat'];

// // sorting elements in the alphabetical order
// dailyActivities.sort();
// console.log(dailyActivities); // ['exercise', 'sleep', 'work']

// //finding the index position of string
// const position = dailyActivities.indexOf('work');
// console.log(position); // 2

// // slicing the array elements
// const newDailyActivities = dailyActivities.slice(1);
// console.log(newDailyActivities); // [ 'sleep', 'work']

// // concatenating two arrays
// const routine = dailyActivities.concat(newRoutine);
// console.log(routine); // ["exercise", "sleep", "work", "eat"]

//--------------------------------------------------------------------

// let studentsData = [
//   ["Jack", 24],
//   ["Sara", 23],
// ];

// // iterating over the studentsData
// studentsData.forEach((student) => {
//   student.forEach((data) => {
//     console.log(data);
//   });
// });
/* 24
 Sara
 23*/

//-------------------------------------------------------------

// let studentData = [
//   ["Naseem", 28],
//   ["Ankit", 27],
//   ["Prateek", 27],
// ];
// for (let i = 0; i < studentData.length; i++) {
//   let innerArr = studentData[i].length;
//   for (let j = 0; j < innerArr; j++) {
//     console.log(studentData[i][j]);
//   }
// }

// var str = [
//   ["Naseem", 28],
//   ["Ankit", 27],
//   ["Prateek", 27],
// ];

// for (let i = 0; i < str.length; i++) {
//   console.log(str.filter(i));
// }

//-----------------------------------------------------------
// function sum(num) {
//   if (num > 13) {
//     console.log((num - 13) * 2);
//   } else {
//     console.log(num - 13);
//   }
// }
// sum(3);

//-------------------------------------------------------------------

// function sum_int(a, b) {
//   if (a === b) {
//     console.log((a + b) * 3);
//   } else {
//     console.log(a + b);
//   }
// }
// sum_int(6, 6);

//------------17--------------------------------

// function integer(num) {
//   if (num < 19) {
//     console.log(19 - num);
//   } else {
//     console.log((num - 19) * 3);
//   }
// }
// integer(22);//9

///-------------18---------------------------------

// function reTrue(a, b) {
//   if (a === 50 || b === 50 || a + b === 50) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(reTrue(20, 30));

//------------19------------------------------------

// function findInt(num) {
//     if (n) {

//     }
// }

//------------20------------------------------------

// function findInt(a, b) {
//   if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
//     console.log("positive");
//   } else {
//     console.log("negative");
//   }
// }
// findInt(-4, 6);

//------------21------------------------------

// let str = "Ankit";
// let newStr = str.unshift("Py");
// console.log(newStr);
