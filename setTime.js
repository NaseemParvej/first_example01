//-------------setTimeout function-----------------------------------
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

//------------------count down number to 1------------------------------------------

function count_down(num) {
  console.log(num); //6 5 4 3 2 1;
  let new_num = num - 1;
  if (new_num > 0) {
    count_down(new_num);
  }
  //   console.log(num);//1 2 3 4 5 6;
}
count_down(6); //6 5 4 3 2 1; in array
