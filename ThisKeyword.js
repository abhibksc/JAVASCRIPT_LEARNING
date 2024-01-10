// Use Of "this" Keyword

const user = {
    username : "Abhishek kumar",
    price : 999,

    welcome: function(){
        console.log(`${this.username}, welcome to website`);
        // here we use this keyword because when we on the user object and want to print username which is usi ka property hai.. so then we use this keyword ki haan mai jo print karwana chahta hu wo isi obect ka properties hai.
        console.log(this);

        // here it prints all the details of the object;

    }
}

user.welcome()

console.log(this);
// Ther 'this' keyword prints empty ;  If you run this code in a Node.js environment, it will refer to the global object in that environment.


// The output of console.log(this); in JavaScript depends on where it is executed. In a browser environment, it will generally refer to the global object, which is window for browsers

// If you run this code in a Node.js environment, it will refer to the global object in that environment.



function chai(){
    console.log(this);
    // when we print this keyword in the function .. it prints many types of values;
}

chai();

// In the function to print this keyword which represent the global object in a Node.js environment .
// This object includes various properties and functions that are commonly available in Node.js.

// another thing;;;;


function chai2(){
    let user = "abhisehk ";
    console.log(this.user);
    // It will prints undefined because it this. works only on objects not functions Note it.
}

chai2();