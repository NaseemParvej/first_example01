//
// let str = new Object();
// str.name = "naseem";
// str.age = 28;
// str.gender = "male";
// console.log(str);

// let pro = {
//   slogan: function () {
//     return `the hello`;
//   },
//   changeName: function (newName) {
//     this.name = newName;
//   },
// };

/* creat a new object;
// let naseem = Object.create(pro); //creat new object;
// naseem.name = "Naseem Parvej";
// naseem.role = "Programmer";       
*/

// let nam2 = Object.create(pro, {
//   name: { value: "Naseem", writable: true },
//   role: { value: "Designer" },
// });
// nam2.changeName("ankit");
// // console.log(nam2["role"]);//Designer;
// console.log(nam2);

//-----------------------------------------------------------------------
// let meeting = {
//   attendees: [],
//   add(attendee) {
//     console.log(`${attendee} joined the meeting.`);
//     this.attendees.push(attendee);
//     return this;
//   },
//   get latest() {
//     let count = this.attendees.length;
//     return count == 0 ? undefined : this.attendees[count - 1];
//   },
// };

// meeting.add("Prateek").add("ankit").add("Asif");
// console.log(`The latest attendee is ${meeting.latest}.`);

//-------------------------------------------------------------------

// let student = {
//   name: "John",
//   age: 20,
//   marks: {
//     science: 70,
//     math: 75,
//   },
// };
// let key = Object.keys(student);
// let val = Object.values(student);
// let entries = Object.entries(student);
// let sealmd = Object.seal(student);
// console.log(sealmd);

//-----------------------------------------------------------------
// let items = [1, 2, 3, 5];
// let pluse = 0;
// for (let i in items) {
//   pluse += items[i];
// }
// console.log(pluse);

let cat = { type: "Cat", sound: "Meow" };
let dog = { type: "Dog", sound: "Woof" };

const say = function (message) {
  console.log(message);
  console.log(this.type + " says " + this.sound);
};

say.apply(cat, ["What does a cat say?"]);
say.apply(dog, ["What does a dog say?"]);
