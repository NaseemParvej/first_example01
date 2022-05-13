function find_factorial(num) {
  let find = 1;
  for (let i = 1; i <= num; i++) {
    find = find * i;
  }
  return find;
}
console.log(find_factorial(4));
//result=24;
