// Immediately Invoked Function Expression (IIFE)


// basics

function chai() {
    console.log(`DB `);
}

chai();
// Here Function Invoked .. Invoked means properly function called.


// Now we want to Immediately Invoked The function  by which things are not polute form the global;

// what is IIFE?


// ans :  IIFE stands for Immediately Invoked Function Expression. It's a JavaScript design pattern where a function is defined and executed immediately after being created. 

// The primary reason for using IIFE in JavaScript is to create a new scope for variables, helping to avoid polluting the global scope.

// Creation of IIFE;

(function chai7() {
    // It it called Named IIFE because it has name chai7;
    console.log(`chai is forever`);
})();


// localVar is not accessible here.. we alwasys use semicolon ; in the end of the IIFE;
// It is used to avoid the declearation or variable or whatever pollution in the global scope .. 

// with arrow function

(() => {
    var localVar = "I am a local variable";
    console.log(localVar);
})();

// also one thing as a function;

((name) => {
    console.log(`DB connected two ${name}`);
})('abhishek');

// we can call this function with argument but we direcltly use this in the end wala parenthesis;


