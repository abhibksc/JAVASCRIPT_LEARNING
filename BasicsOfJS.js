// how to print somethingg in javascripts
console.log("love you abhishek");

// constant keyword : A constant is a variable whose value cannot be changed after it's been declared.

const name = "Abhishek";
console.log(name);

// let Keyword : Declares variables that have block scope.
// Variables declared with let are only accessible within the block (usually enclosed in curly braces {}) where they're declared.


let age = 24;
console.log(age);


// Var Keyword :  var variables, which have function scope and can be accessed throughout the entire function.

// print all the let veriable and constant together;

console.table({ name, age });

// default value of let is undefined;

// Data types

// there are 7 primitive data types and 1 non primitive data types;

/* 1.> Boolean. true and false.

2.> null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)

3.> undefined. A top-level property whose value is not defined.

4.> Number. An integer or floating point number. For example: 42 or 3.14159.

5.> BigInt. An integer with arbitrary precision. For example: 9007199254740992n.

6.> String. A sequence of characters that represent a text value. For example: "Howdy".

7.> Symbol. A data type whose instances are unique and immutable.

8.> and Object */


// what type of datatype "null" , "undefined" , "Boolean" , "Number" , "BigInt" , "String" , "Symbol" , "Object" ?
// ans......

console.log(typeof null);
console.log(typeof undefined); 
console.log(typeof Boolean);
console.log(typeof Number);
console.log(typeof BigInt);
console.log(typeof String);
console.log(typeof Symbol);
console.log(typeof object);


// DataType Conversion : 

console.log("DATATYPE Conversion");

let num = 33;

console.log(num);

// but num is in STring "";

let num2  = "33";

// we want to find what type of num2 ;

let num3 = Number(num2);
console.log(typeof(num3));
console.log(num3);

// if we change nums2 = "33abcds";
console.log("AFTER CHanging");

num2 = "33absc";
num3 = Number(num2);

console.log(typeof num3)
console.log(num3);

// if the particular Data types is not in their condition it can gives NaN, 1 or 0, 
// "33" ==>> 33 easily converatble ;
// "33abc" ==>> Nan (not in number) ; but it is in number datatype ,, it cant gives any value;
// true ==>> 1 or 0;


console.log("Operations");

// 
// 
// 
// 
// 

console.log("Stack Memory and Heap Memory in JavaScript");

// In JavaScript, memory management is handled by the JavaScript engine of the browser or the runtime environment where the JavaScript code is executed. 

// In JavaScript, variables and objects are stored in memory, and memory is typically divided into two main areas: the stack and the heap.

//  1. Stack Memory :-  The stack is a region of memory that operates in a Last In, First Out (LIFO) manner.
//                      Primitive data types (like numbers, booleans, and references to objects) are stored on the stack. 
//                      When a function is called, a new stack frame is created, and when the function completes, the stack frame  is popped off.

// eg.

console.log("Stack Memory");

let name_ = "abhis";
let name2 = name_;

name2 = "kumar";
console.log(name2);
console.log(name_);
//  ther is no any changes in orginal name_; 


// Heap Memory :- The heap is a region of memory used for dynamic memory allocation.
//                Non primitive or Objects and complex data structures (arrays, objects) are stored in the heap.

// whenever we create an object or non primitive datatype .. that material or information store in heap memory and the variable name stores in stack memory .. whenever we change the value of  particular attribute in the object .. that always changes. because whenever we change the objects detail by creating new variale or objects. which  targets the orginal data in heap memory.

//  eg.

console.log("Heap Memory");

let obj1 = {
    name5: 'abhishek'
};

console.log(obj1.name5);

// if we want to change the name5 ; it will happens

// Here both obje got same reference that why we change obj2 then obj1 automatically will changed;

let obj2 = obj1;

obj2.name5 = "Kumar";
console.log(obj1.name5);
console.log(obj2.name5);





