
// why we use arrow function?

// Conciseness: Arrow functions provide a more compact syntax for writing functions, especially when the function body consists of a single expression. This can make the code cleaner and easier to read.

// No binding of arguments: Arrow functions do not have their own arguments object. This can be an advantage in some cases where you want to avoid confusion or unexpected behavior related to the arguments object.






function chai2(){
    let user = "abhisehk ";
    console.log(this.user);
    // It will prints undefined because it this. works only on objects not functions Note it.
}

chai2();


// Arrow function;--->    syntx: () => {}

const chai3 = () => {
    let username = "abhishek kumar"
    console.log(this);
    // In Arrow function it prints empty object;
    // but In general function or noraml function it prints many different type of value which represents the global object of the Node.js Environment;
}

chai3();

// Basics syntex ::::::   () => {}

// Basics;

const addTwo = (num1,num2) => {
    return num1 + num2;
}

console.log(addTwo(5,5));

// another way which is called implicit return it means we assume we have only one line code so that we can use this ;
//  In JavaScript, if an arrow function has only one statement, you can ignore the curly braces {} and the return keyword. 

const addthreeNumber = (num1, num2, num3) => num1 + num2 + num3;

console.log(addthreeNumber(4,5,7));

// Note : we dont ignor if we put {} crly braces in anywhere. we have to put the return keyword there. must it. 
// and we can  ignor if we put () parenthises in anywhere. we dont have to put return keyword/


// dusri baat!!

// If we want to return any object then what we have to do in arrow function;

const MyName = (num5, num6) => ({username : "Abhishek" , email : "abhishek@gmail.com"})

console.log(MyName(5 , 5));

// another eg.
// must wrap the object literals in the parenthesis;



const createPerson = () => ({
    name: "John",
    age: 30,
    job: "Developer"
});

const person = createPerson();

console.log(person);


console.log("***************************************************************");

function Example() {
    this.value = 10;
  
    // Regular function
    this.regularFunction = function() {
      setTimeout(function() {
        console.log(this.value); // undefined (in a browser) or throws an error (in Node.js)
      }, 1000);
    };
  
    // Arrow function
    this.arrowFunction = () => {
      setTimeout(() => {
        console.log(this.value); // 10
      }, 1000);
    };
  }
  
  const example = new Example();
  example.regularFunction(); // Unwanted behavior
  example.arrowFunction();   // Desired behavior
  

//   Lexical this: Arrow functions do not have their own this context; instead, they inherit the this value from the surrounding scope. This behavior can be advantageous in certain situations, especially when dealing with callback functions and avoiding the need for binding.




