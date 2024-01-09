function generate(rows) {
  for (let i = 1; i <= rows; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}
generate(5);
