//------Check prime------------------------------------------

// function isPrime(num) {
//   let output = true;
//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) {
//       output = false;
//       break;
//     } else {
//       output = true;
//     }
//   }
//   return output;
// }
// console.log(isPrime(8));

//---------prime number up to-------------------------------

// function Prime(num) {
//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function Find_prime(n) {
//   let arr = [];
//   for (let i = 1; i < n; i++) {
//     if (Prime(i) === true) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(Find_prime(11));
//result=[ 1, 2, 3, 5, 7 ];

//------find n prime number----------------------------------------------

function Prime(num) {
  let arr = [];
  for (i = 2; arr.length < num; i++) {
    let value = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && i > j) {
        value = 1;
      } else if (i % j === 0 && value != 1) {
        arr.push(i);
      }
    }
  }
  return arr;
}
console.log(Prime(9));
//result=[2,  3,  5,  7, 11,13, 17, 19, 23];
