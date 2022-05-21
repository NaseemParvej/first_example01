// // program to generate a multiplication table---------------------------

// // let number = 8;
// function outPut(number) {
//   for (let i = 1; i <= 10; i++) {
//     const result = i * number;

//     console.log(number, "*", i, "=", result);
//     //   console.log({ number, i, result });
//   }
// }
// outPut(11);

//--------power of number----------------------
function power_num(num, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result = result * num;
  }
  return result;
}
console.log(power_num(2, 6));
//result=64;
