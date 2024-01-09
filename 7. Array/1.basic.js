//creating an array
const fruits = ["apple", "banana", "oranges"];

//accessing elements
console.log(fruits[2]);
console.log(fruits[1]);

//changing values
fruits[2] = "Grapes";
console.log(fruits[2]);

//adding elements
fruits.push("Kiwi");
console.log(fruits);

//array length
console.log(fruits.length);

//looping through array
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}
