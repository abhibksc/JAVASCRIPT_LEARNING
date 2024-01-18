

// There Are Three Main Loops IN JAvaScript. which are arrays and object specific loops;


// *******************************************************For Of Loop********************************************************************************

// 1>. for of :- 
// for (const iterator of object) {
    // here objects are anything .. arrays, object, string, map, etc
    // for of loop 
// }

// Iterating Over Arrays:

const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}


// Iterating Over Strings:

const message = 'Hello';

for (const char of message) {
  console.log(char);
}


// Iterating Over Maps:

const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}


// Iterating Over Sets:

const mySet = new Set([1, 2, 3]);

for (const value of mySet) {
  console.log(value);
}


// Iterating Over Typed Arrays:

const typedArray = new Uint8Array([10, 20, 30]);

for (const value of typedArray) {
  console.log(value);
}


// NOTE : Here objects are not iterable through for of loop.



// ************************************************************************For In loop**********************************************************************



// for In loop : The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It iterates over all the enumerable properties of an object, including properties inherited from its prototype chain.

// Recommended loop for specially Objects;

// for (const variable in object) {
//     // code to be executed for each property
//   }



// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }



const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (const key in person) {
    const value = person[key];
    console.log(`${key}: ${value}`);
  }


//   Lets check in Arrray;


const arr = ["abhishek" , "Kumar" , "Rohit" , "Nithish" , "Mith"];

for (const val in arr) {
    // It Will Print indexs bcoz in arrays the indexs is key and the value is their element;
    console.log(val)
    // Now It Will print the value;
    console.log(arr[val])

}


// *****************************************************************For Each LOOP*********************************************************************

// For Each LOOP : it's an array method in JavaScript used for iterating over the elements of an array. The forEach method provides a more concise and expressive way to perform actions on each element of an array.

// forEach is specifically designed for arrays and can only be used with iterable objects. It's not suitable for iterating over object properties.

// The function provided as an argument to forEach is the callback function. It is called for each element in the array.


// array.forEach(function(element, index, array) {
//     // code to be executed for each element
//   });


// element: The current element being processed in the array.
// index: The index of the current element being processed.
// array: The array on which forEach was called.


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
    // Here call back function is used;
  console.log(`Index ${index}: ${number}`);
});

// Arrow Function Syntax:

numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
  });

//   Objects In the array;

const mycoding = [
    {
        languageName : "JavaScript",
        fileName : "Progragmming"

    },
    {
        name : "abhisek kumar",
        roll : "23"
    },

    {
        name : "rohit kumar",
        roll : "34"
    },
    {
        name: "abhishek kumar",
        roll : "84"
    },
    {
        name: "Nitish Kumar", 
        roll: "82"
    },
    {
        name: "ujwal kumar",
        roll : "92"
    }
]


mycoding.forEach(function(item){
    console.log(item.languageName);
})

  





  
  