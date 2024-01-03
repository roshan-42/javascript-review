//write a program to swap the values of two numbers in javascript

//Using a temporary variable

let a = 5;
let b = 10;
console.log("before swapping: a= ", a, ",b=", b);

let temp = a;
a = b;
b = temp;

console.log("After swapping: a=", a, ",b=", b);

// Whitout using 3f

let c = 2;
let d = 3;
console.log("before swapping: c=" + c + ",d=" + d);

// console.log ("before swapping: d="+d); arko line maa lina ko laagi naya console

c = c + d;

d = c - d;

c = c - d;

console.log("After swapping: c=", c, ",d=", d);

console.log("commit");
