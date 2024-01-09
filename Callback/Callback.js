function add(num1, num2, callback) {
  callback(num1 + num2);
}
function sub(num1, num2, callback) {
  callback(num1 - num2);
}
add(1, 2, (sum) => {
  console.log(sum);
  sub(sum, 1, (sub) => {
    console.log(sub);
  });
});
