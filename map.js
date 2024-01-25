const myNums2 = [1,2,3,4,5,6,7,8,9];

const value = myNums2.forEach((num) => {
    console.log(num);
    // but it cant return any value;
})

console.log(value);
// undefined

// NOte ForEach cant return any value;


// Now there comes filter ,map, reduce function instead of forEach

// **************************************************Map**********************************************************************


// It return value;

// In JavaScript, the map method is another array method that allows you to create a new array by applying a provided function to each element of an existing array. The key characteristic of map is that it transforms each element of the original array without modifying the original array.

// The map method is useful when you need to create a new array with transformed elements, and it's a concise way to apply a function to each element of an array.

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function (number) {
  return number ** 2;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// Using ES6 arrow functions:

const number1 = [1, 2, 3, 4, 5];

const squaredNumber1 = numbers.map(number => number1 ** 2);

console.log(squaredNumber1); // Output: [1, 4, 9, 16, 25]


// Doubling Each Element:

const number3 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number3 * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]



// Mapping Objects to Specific Properties:

const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 40 }
  ];
  
  const names = people.map(person => person.name);
  
  console.log(names); // Output: ['John', 'Alice', 'Bob']
  


//   Converting Strings to Uppercase:

const fruits = ['apple', 'banana', 'orange'];

const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(uppercaseFruits); // Output: ['APPLE', 'BANANA', 'ORANGE']



const numbers8 = [1, 2, 3, 4, 5];

// In filter if the condition is true it returns that conditionl things ; else it return null array;
const evenNumbers = numbers8.filter(number => {
    return number % 2 == 0;
});

// Example using map to square each number
const squaredNumbers8 = numbers8.map(number => number * 2);

console.log("Original Numbers Array:", numbers);
console.log("Filtered Even Numbers:", evenNumbers);
console.log("Squared Numbers:", squaredNumbers8);



// chaining :-  means map().map().filter() .anything;

const newar = numbers8.map((num) => {
    return num * 2;
}).map((num) => {
    return num + 1;
})

console.log(newar)
