// What is String in JavaScript?

//  ans : Strings in javascript represent sequences of characters and are one of the fundamental data types in the language. 

// String Declearation;  ((' ') , (" ") , (` `)) three way; this is called literals ;

let singleQuotes = 'abhishek';
let doubleQuotes = "Abhishek Kumar";
let backticks = `Ahishek Kumar`;

//  here if we print all three string with modern way; ( ${Variable name}  ${another variable name}); which is called String Interpolation;
console.log("How to print all the string with concatenation --->> STRING INTERPOLATION");

console.log(`${singleQuotes} ${doubleQuotes} ${backticks}`);

// another way to declear a string ... with crating object of Srting;
console.log("by creating an object of String");

const gameName = new String('abhishek');

// There are many method in the string ;

console.log("How to get the length of the string");
console.log(gameName.length);

console.log("how to get acces an element in the string")
console.log(gameName[0]);

console.log("how to make uppercase of all string")
console.log(gameName.toUpperCase());
// NOTE :- it cannot changes our original value because it variables and constat stores in stack memory and stack memory makes copy of const. and vars. but not try to touch original const and vars.
console.log(gameName)

console.log("How to get acces the particular element by charAt()");
console.log(gameName.charAt(3));


console.log("How to get acces the particular index by indexOf()");
console.log(gameName.indexOf('a'));

console.log("How to divide into substring using substring method in string");
console.log(gameName.substring(0,5));

console.log("How to divide into substring circularly it means it starts from reverse using slice method in string");
console.log(gameName.slice(-3, 8));

console.log("How to trim the spaces in the string");
const name1 = "  abhishek    " 
console.log(name1);
console.log(name1.trim());   

console.log("Replace the character in the String");
const url = "https://abhishe.com/abhishek%20srivastava"
console.log(url)
// we want to remove space which is written asa %20;

console.log("after replacement");

console.log(url.replace('%20','_' ));


console.log("How to check substring or some word are present in the String by using .includes() method");
console.log(url.includes("hishek"));
console.log(url.includes("ackeska"));

console.log("How to convert an string into an array based on any particular character like dash( ), (_) or anything");
console.log(gameName.split(" "));
console.log(url.split("/"));
















