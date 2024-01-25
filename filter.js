// const myNums2 = [1,2,3,4,5,6,7,8,9];

// const value = myNums2.forEach((num) => {
//     console.log(num);
//     // but it cant return any value;
// })

// console.log(value);

// NOte ForEach cant return any value;


// Now there comes filter ,map, reduce function instead of forEach

// *******************************************************************************Filter**********************************************************************


// so that we can use Filter function to iterate in the Array and it returns some value;


// In JavaScript, the term "filter" typically refers to the filter method, which is available on arrays. The filter method is used to create a new array with all elements that pass a certain test implemented by the provided function.

// The filter method is a powerful tool for working with arrays in JavaScript, allowing you to selectively manipulate and extract elements based on specific conditions.


const myNums = [1,2,3,4,5,6,7,8,9];

const i = myNums.filter((num) => {
    return num;
})

console.log(i);


const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]


// Filtering Objects in an Array:

const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 40 }
  ];
  
  const adults = people.filter(person => person.age >= 18);
  
  console.log(adults); // Output: [{ name: 'John', age: 30 }, { name: 'Bob', age: 40 }]
  

//   Removing Falsy Values:

const mixedValues = [0, 1, '', 'hello', false, true, null, undefined];

const truthyValues = mixedValues.filter(Boolean);

console.log(truthyValues); // Output: [1, 'hello', true]


// Filtering based on a Condition:

const temperatures = [22, 25, 30, 18, 35];

const hotTemperatures = temperatures.filter(temp => temp > 25);

console.log(hotTemperatures); // Output: [30, 35]

