// In JavaScript, an array is a data structure that is used to store a collection of elements. Arrays in JavaScript can hold various data types, including numbers, strings, objects, and even other arrays. 

// java arrays are resizeable means you can increases the size of the array if needed. and contains a mix of different data  types.

// Creating an empty array
let emptyArray = [];

// Creating an array with elements in different ways;
let fruits = ['apple', 'banana', 'orange'];
let MyArr = [0,234,234,23,43,23];

// Creating by constructor

let arr = new Array(2,23,4,5,2.2);


// How to acces an element of the array in javaScript.

console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(arr[1]);
console.log(MyArr[1]);

// How to print all the elements of the array together;
console.log(fruits);
console.log(MyArr);
console.log(arr);

// find the length of the array

console.log(fruits.length);

// Modifying Elements: You can modify elements in an array by assigning a new value to a specific index:

fruits[2] = 'grape';
console.log(fruits); // Output: ['apple', 'banana', 'grape']


// Method Of Array in JavaScript

// push()

console.log("If We want to add an element in the end of the arrya... just use .push(element)");

MyArr.push(8);
console.log(MyArr);

MyArr.push(459084);
console.log(MyArr);

// pop();

console.log("If We want to remove an element from the end of the arry... just use .pop()");

MyArr.pop();

console.log(MyArr);

// Note Pop() is also for getting the last element of the array.

console.log(MyArr.pop());

// unshift()

console.log("If We want to add an element in the begining of the arrya... just use .unshift(element)");

MyArr.unshift(8);
console.log(MyArr);

MyArr.unshift(459084);
console.log(MyArr);

// shift();

console.log("If We want to remove an element from the begining of the arry... just use .shift()");

MyArr.shift();

console.log(MyArr);

// Note shift() is also for getting the last element of the array.

console.log(MyArr.shift());


// includes(element);

console.log("if we check an element is present in the array or not .... just use .include(element).. it gives booleean answer");

console.log(MyArr.includes(234));
console.log(MyArr.includes(87));

// if we want to get the particular elements's index;

console.log(MyArr.indexOf(234));
console.log(MyArr.indexOf(2));


// Note: console.log(fruits);  Arrays Creats in the form of objects;
console.log(typeof fruits);

// If we want to change the type of fruits(objects) to fruits(String) we use Join();

console.log("If we want to change object to String");

let newArray = MyArr.join();

// original array (object);
console.log(MyArr);
console.log(typeof MyArr);


// Changed array (String);
console.log(newArray);
console.log(typeof newArray);

// Note : In JavaScript, slice() and splice() are two array methods that sound similar but serve different purposes:

// slice() Method: The slice() method returns a shallow copy of a portion of an array into a new array. It does not modify the original array.

let originalArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

let slicedArray = originalArray.slice(1, 4);
console.log(slicedArray); // Output: ['banana', 'orange', 'grape']
console.log(originalArray); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']


// splice() Method : The splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// It modifies the original array and returns an array containing the removed elements.

let originalArray2 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

let removedElements = originalArray2.splice(1, 2);
console.log(removedElements); // Output: ['banana', 'orange']


// and (1 to 2 elments in the array removed from the original array), ther manipulation of original arrays happends;

console.log(originalArray2); // Output: ['apple', 'grape', 'kiwi']

// using For loop 

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}


// NOte : i just skip the aarry part 2 of hitesh sir because we have more task of sharpener so that i just skip only this lecture;



