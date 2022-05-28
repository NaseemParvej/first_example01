let n = 10; // row or column count
// defining an empty string
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0) {
      string += "*";
    } else {
      if (j === 0 || j === n - 1) {
        string += " ";
      } else {
        string += "*";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
//------------------------------------------------------
