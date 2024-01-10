// Here we talk about the Number ;

console.log("How to define a Number");

const num = 300;
console.log(num);

console.log("Another way by creating object");

const num1 = new Number("500");
console.log(num1);

// You can checkkk the diffence of both the number;
// in  1st tere is no any type shows in output whereas in 2nd there shows type of the variable;

console.log("Some Properties Of Number");

// 1> toString();
console.log(num1.toString());

// 2> toString().length;
console.log(num1.toString().length);

// 3> toFixed(); -- it put 0s after the digit 1,2,3,
console.log(num1.toFixed(1));
console.log(num1.toFixed(2));

// 4> toPrecision(); -- used when you want to control the total number of significant digits in a number, including both the integer and fractional parts.

console.log(num1.toPrecision(3));
console.log(num1.toPrecision(4));

// 4> toLocalString(); -- whenever we have large number of digits .. this method formate with commas(,);

let hundreds = 10000;
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-US')); // Replace 'en-IN' with the desired locale code

// MIN_VALUE in javaScript ;
let count = Number.MIN_VALUE;
console.log(count); // Outputs: 5e-324

// MIN_VALUE in javaScript ;
let count2 = Number.MAX_VALUE;
console.log(count2); // Outputs: 1.7976931348623157e+308





// +++++++++++++++++++++++++++  MATHS +++++++++++++++++++++++++++++++++++++++++
console.log("+++++++++++++++++++++++ MATH ++++++++++++++++++++++++");


console.log(Math);

// some funcitons which we will generally  use;

// when we want to absoluet the digit we use Math.abs(digit);
console.log(Math.abs(4));

// when we roundof the decimal number.
console.log(Math.round(4.56));
console.log(Math.round(4.34));

// flor
console.log(Math.floor(5.3));

// ceil
console.log(Math.ceil(6.8));

// find min val
console.log(Math.min(6,3,2,1,8,8,9,0));

// find max val
console.log(Math.max(6,3,2,1,8,8,9,0));















