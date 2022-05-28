//-----------------1-----
// let rep = 0;
// let num = 231;
// rep = Number(String(num).split("").reverse().join(""));
// console.log(+rep);
//---------------reverse number------------------

// function reverse_n(num) {
//   let arrval = 0;
//   let new_arr;
//   while (num != 0) {
//     new_arr = num % 10;
//     console.log(new_arr);
//     arrval = arrval * 10 + new_arr;
//     num = Math.floor(num / 10);
//   }
//   return arrval;
// }
// console.log(reverse_n(231));

//-----------------------------------------------------------

// let arr_num = [11, 2, 12, 9, 6, 1, 23, 3, 7, 133];
// function mixtarr(arr) {
//   let arr1;
//   let new_arr = [];
//   let find_even = [];
//   let find_odd = [];
//   let find_prime = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1 || arr[i] === 2) {
//       find_prime.push(arr[i]);
//     }
//     if (arr[i] % 2 == 0) {
//       arr1 = arr[i];
//       find_even.push(arr1);
//     }
//     if (arr[i] % 2 !== 0) {
//       for (let j = 3; j <= arr[i]; j++) {
//         if (arr[i] % j === 0) {
//           find_odd.push(arr[i]);
//         } else {
//           find_prime.push(arr[i]);
//           break;
//         }
//       }
//     }
//   }

//   new_arr.push("Even=" + find_even, "Odd=" + find_odd, "Prime=" + find_prime);
//   return new_arr;
// }

// console.log(mixtarr(arr_num));

// function FindEven(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(FindEven(16));

// function oddEven(num) {
//   for (let i = 1; i <= num; i++) {
//     if (num % 2 !== 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// function primeNum(num) {
//   if (num === 1 || num === 2) {
//     return true;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(primeNum(31));
//-------------------------------------------------------------------
// let arr_num = [11, 2, 12, 9, 6, 1, 23, 3, 7, 133];
// function output(arr) {
//   function Even(num) {
//     for (let i = 1; i <= num; i++) {
//       if (i % 2 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }

//   function odd(num) {
//     for (let i = 1; i <= num; i++) {
//       if (num % 2 !== 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }

//   function primeNum(num) {
//     if (num === 1 || num === 2) {
//       return true;
//     }
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   let arr1;
//   let new_arr = [];
//   let find_even = [];
//   let find_odd = [];
//   let find_prime = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1 || arr[i] === 2) {
//       if (arr[i] === 1) {
//         find_prime.push(arr[i]);
//         find_odd.push(arr[i]);
//       }
//       if (arr[i] === 2) {
//         find_prime.push(arr[i]);
//         find_even.push(arr[i]);
//       }
//     } else {
//       if (Even(arr[i])) {
//         find_even.push(arr[i]);
//       }
//       if (odd(arr[i])) {
//         find_odd.push(arr[i]);
//       }
//       if (primeNum(arr[i])) {
//         find_prime.push(arr[i]);
//       }
//     }
//   }
//   new_arr.push("Even=" + find_even, "Odd=" + find_odd, "Prime=" + find_prime);
//   return new_arr;
// }
// console.log(output(arr_num));

//--------------------------------------------------------------------------------------------

function checkPelindrome(num) {
  let str = [];
  function reverse_n(num) {
    let arrval = 0;
    let new_arr;
    while (num != 0) {
      new_arr = num % 10;
      console.log(new_arr);
      arrval = arrval * 10 + new_arr;
      num = Math.floor(num / 10);
    }
    return arrval;
  }
  if (reverse_n(num)) {
    str.push(true);
  } else {
    str.push(false);
  }
  return str;
}
console.log(checkPelindrome(110021));
