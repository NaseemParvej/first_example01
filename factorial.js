// function find_factorial(num) {
//   let find = 1;
//   for (let i = 1; i <= num; i++) {
//     find = find * i;
//   }
//   return find;
// }
// console.log(find_factorial(4));
//result=24;

//-----------------------------------------------------------

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
let n = 4;
if (n > 0) {
  let result = factorial(n);
  console.log(`The factorial of ${n} = ${result}`); //The factorial of 4 = 24;
}
