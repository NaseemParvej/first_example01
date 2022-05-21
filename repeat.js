function replace_str(a, b) {
  let new_str = "";
  for (let i = 0; i < b.length; i++) {
    if (b(i) === "e") {
      new_str = b(i);
    }
  }
  return new_str;
}
console.log(replace_str("e", "Remove character in this sentence?"));
