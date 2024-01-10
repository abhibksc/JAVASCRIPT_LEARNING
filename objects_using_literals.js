// Singleton : when we make any object using constructor then object is called singleton object;

// In JavaScript, objects are a fundamental data type and a key part of the language. They are used to store and organize data using a collection of key-value pairs. 

// Objects can be created using object literals or the Object constructor.


//   Using Object Constructor:
// console.log("Using Object Constructor:");

let person2 = new Object();
person2.name = 'John';
person2.age = 30;
person2.job = 'developer'


// console.log("Object Literals:");
// Object Literals:



let person = {
    name: 'John',
    "Full Name" : "ABhishek kumar",
    age: 30,
    job: 'developer',
   
  };

//   we have a special datatype "Symbol"

let mysym = Symbol("key1");

  let men = {
    name: 'John',
    "Full Name" : "ABhishek kumar",
    age: 30,
    job: 'developer',
    [mysym]: 'key2'
   
  };

//   Accessing Object Properties:

// one way to access;
console.log(men.name); // Output: 'John'

// 2nd way to acces;
console.log(men['age']); // Output: 30

// we have to use 2nd way which is use in difficult cases also.
console.log(men['Full Name']);

console.log(men[mysym]);
console.log(typeof men[mysym]);


// how to change or modify initialized value of objects

men.name = "ABhishek kumar srivastava";
console.log(men.name);

// if I want to lock the object . then we cant modify any key's value;
Object.freeze(men);

// now we check by changing the value;
men.name = "Rishi Kumar"
console.log(men.name);
console.log(men);

men.age = 25;
console.log(men);


// Now we make a function and use that function in the object;

console.log(person);
person.gretting = function(){
    console.log("Hi Their");
}

console.log(person.gretting());

// There we make another greeting there we use "this" keyword because we talk about same object.. 
// if we use an object and in the object we talk about same objects's properties... there we use this keyword;

person.gretting2 = function(){
    console.log(`Hello ${this.name}`);

}

console.log(person.gretting2());
console.log(person);







