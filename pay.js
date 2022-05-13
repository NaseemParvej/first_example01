// function val(num) {
//   for (let i = 1; i <= num * 2 - 1; i++) {
//     if (i <= num) {
//       console.log(i);
//     } else {
//       console.log(num - (i - num));
//     }
//   }
// }
// val(4); //output-1234321

//---------------------------------------

// function find_factor(n) {
//   for (let i = 0; i <= n; i++) {
//     if (n % i === 0) {
//       console.log(i);
//     }
//   }
// }
// find_factor(15); ///output-: 1,3,5,15

//------------------------------------
// function isPrime(n) {
//   for (let i = 2; i <= n; i++) {
//     if (i % 2 == 0) {
//       console.log(false);
//     } else {
//       console.log(true);
//     }
//   }
// }
// let find_num = 0;
// for (let j = 2; j <= i; j++) {
//   if (isPrime() === true) {
//     find_num = 1;
//     console.log(j);
//   }
// }

// find_num(6);

// function primeNum(num) {
//   for (let i = 1; i < num; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (j % i === 0) {
//       }
//     }
//   }
// }

//---------------------------------

// function factorial(n) {
//   let first_f = 1;
//   if (n === 0 || n === 1) {
//     return first_f;
//   } else {
//     for (let i = n; i >= 1; i--) {
//       first_f = first_f * i;
//     }
//     console.log(first_f);
//   }
// }
// console.log(factorial(6));

// function sockMerchant(n, ar) {
//   let pair = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i === j) {
//         pair++;
//       } else {
//         pair = 0;
//       }
//     }
//   }
// }
// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

//-------------------------------------------------------------------------------

// function numberVal(arr) {
//   let odd = 0;
//   let even = 0;
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   }
//   output.push(even, odd);
//   return output;
// }
// console.log(numberVal([13, 11, 12, 18, 23]));//output-[2,3]
//----------------------------------------------------------------------
// function findNum(num, arg) {
//   for (let i = num; i <= arg; i++) {
//     if (i % 2 === 0) {
//       console.log(i + "=" + "even");
//     } else {
//       console.log(i + "=" + "odd");
//     }
//   }
// }
// findNum(17, 29);//ex-23=odd,24=even;
//---------------------------------------------------

// let array = [1, "prtk", 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index <= array.length; index++) {
//   console.log(array[index]);
// }

//array[0]
//array[1]

// function assendingOrder(a,b) {
//   let result= array.short
// return a-b;
// }
// assendingOrder();

// function num(arr, index) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i === index) {
//       console.log("No");
//     } else {
//       console.log("yes");
//     }
//   }
// }
// console.log(num([11, 12, 13, 14, 15, 16], 4));

//------------------------------------------------------------------
// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     if (num[i] > 0) {
//       result = num[i] * (num[i] - 1);
//       console.log(result);
//     }
//   }
// }
// factorial(4);

//----------------------------------------

// let str = "THE google is a fastest search engin";
// let vovel = ["a", "e", "i", "o", "u"];
// function findVal(str) {
//   let find_vovel = [];
//   let find_cons = [];
//   let arr = str.split("");

//   for (let i = 0; i < str.length; i++) {
//     if (vovel.includes(arr[i])) {
//       find_vovel.push(arr[i]);
//     } else {
//       find_cons.push(arr[i]);
//     }
//   }
//   console.log(find_vovel.join("\n") + "\n" + find_cons.join("\n"));
// }
// findVal("THE google is a fastest search engin");

let str = "THE google is a fastest search engin";
let vovel = ["a", "e", "i", "o", "u"];

function findVal(str) {
  let find_vovel = 0;
  let find_cons = 0;
  let arr = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (vovel.includes(arr[i])) {
      find_vovel++;
    } else {
      find_cons++;
    }
  }
  console.log("vovel_No.=" + find_vovel);
  console.log("cons_No.=" + find_cons);
}
findVal(str);
