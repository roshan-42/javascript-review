// Rules:
//Data in array is comma seperated way
//every data is stored in key value pair (key= index)
// last_index = size-1

// Normal way
let a = [
  "Roshan", //0
  "Roshan@gmail.com", //1
  9847829043, //2
];
console.log(a[1]);

//array using with constructor
let b = new Array(
  "Roshan", //0
  "dang", //1
  "r@gmail.com", //2
  9847829043 //3
);
console.log(b[1]);
console.log("The next part begin from here");

//Array are of two types :
// (1) Single dimention array
//------an array consisting of non-array/object/json elements
//(2) Multi dimention array
//-------Array bhitra array aayo bhaney hami teslai multidimention array bhanchau

// let learn_array = [
//   [
//     "Roshan", //0
//     "Roshan@gmail.com", //1
//     9847829043, //2
//   ],
//   [
//     "Acharya", //0
//     "something@gmail.com", //1
//     984888888, //2
//     "nawalpur", //3
//   ],
//   new Array(
//     "third array", //0
//     "third@gmail.com", //1
//     98477777777, //2
//     "ghorahi"
//   ),
// ];
// console.log(learn_array[0][0]);
// console.log(learn_array[1][0]);
// console.log(learn_array[2][0]);

//Inserting elements in array

// let new_products = [
//   "Name", //0
//   "Address",
//   984893333,
//   "email",
// ];
// console.log(learn_array);
//push operation
// learn_array.push(new_products);
// console.log(learn_array);

let secondarray = [
  ["Roshan Acharya", 985478778787, "roshanacharya@gmail.com"],
  ["Arko maanchey", 9882932349238, "teskoemail@gmail.com"],
  ["tesro maanchey", 988949390, "tesro@gmail.com"],
];
console.log(secondarray);

let third = ["Cahutho maanchey", 983243423412, "chauthoemail@gmail.com"];

secondarray.push(third);
console.log(secondarray);
