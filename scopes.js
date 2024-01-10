// In JavaScript, scope refers to the context in which variables are declared and the rules that govern how they are accessed by the program. 

// It defines the visibility and accessibility of variables at different parts of the code.

// There are two main types of scope in JavaScript: global scope and local (or function) scope.

// 1.Global scope;
// 2. Local Scope;

{
    // under this curli brackets we can say this is scop it comes with function or if else statment for loop etc. except object. 
}




// *Global Scope:
console.log("Global Scope:")

//* Variables declared outside of any function or block have global scope.
//* They can be accessed from anywhere in the code, both inside and outside functions.
//* Global variables are accessible throughout the entire program

let globalVar = 10; // Global scope

function exampleFunction1() {
    console.log(globalVar); // Accessing global variable
}

// exampleFunction(); 
// Outputs: 10



// Block Scope: or local scope.
console.log("Block Scope: or local scope.");

// Variables declared inside a function or a block have local scope.
// They are only accessible within that specific function or block.
// Local variables are typically created when a function is invoked and destroyed when the function completes.


function exampleFunction2() {
    let localVar = 5; // Local scope
    console.log(localVar);
}

// exampleFunction2(); 
// Outputs: Error ..because we cant accces localVar outside the block;

// Trying to access localVar outside the function will result in an error
// console.log(localVar); // ReferenceError: localVar is not defined


if (true) {
    let blockVar = 42; // Block scope
    console.log(blockVar);
}

// Trying to access blockVar outside the block will result in an error
// console.log(blockVar); // ReferenceError: blockVar is not defined



// Nested SCope:
console.log("Nested SCope:");

// It Not work think logicallyl;

// function one(){
//     const userName = "Abhishek Kumar"

//     function two(){
//         const website = "Youtube"
//         console.log(userName);
//     }

//     console.log(website);

//     two();
// }

// one();

// It works think logicallyl;

function one(){
    const userName = "Abhishek Kumar"

    function two(){
        const names = "Youtube"
        console.log(userName);
    }

    // console.log(names);

    two();
}

one();







