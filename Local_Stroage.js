

// LocalStorage is a web storage technology in web browsers that allows web applications to store data locally within the user's browser. It provides a simple key-value store, where data is stored as strings and persists even when the user closes the browser or navigates away from the page. LocalStorage is a part of the Web Storage API, and it's often used to store small amounts of data (typically less than 5 MB).




// 1. Storing and Retrieving Data:
// LocalStorage allows you to store data as key-value pairs. The data is always stored as strings. To store data, use the setItem method:

localStorage.setItem("key", "value");



// To retrieve data, use the getItem method:

const value = localStorage.getItem("key");
console.log(value);


// Removing Data:
// You can remove an item from LocalStorage using the removeItem method:

localStorage.removeItem("key");


// 3. Clearing All Data:
// To clear all data stored in LocalStorage for the current domain, use the clear method:

localStorage.clear();


// Checking for Support:
// Before using LocalStorage, it's a good practice to check if the browser supports it. You can use the following code:

if (typeof(Storage) !== "undefined") {
    // LocalStorage is supported
    // Your code here
  } else {
    // LocalStorage is not supported
    console.log("Sorry, your browser does not support LocalStorage.");
  }
  


//   5. Data Size Limit:
//   LocalStorage typically has a size limit of 5 MB per domain. It's important to keep this limit in mind when storing data.


// 6. Data Type Limitations:
// LocalStorage can only store strings. If you want to store other data types, you need to convert them to strings before storing and parse them when retrieving.


// Storing data
localStorage.setItem("username", "John Doe");

// Retrieving data
const username = localStorage.getItem("username");
console.log("Username:", username);

// Removing data
localStorage.removeItem("username");

// Clearing all data
localStorage.clear();


// Remember that LocalStorage is synchronous and blocking. It's a simple and convenient way to store small amounts of data locally, but for more advanced use cases, you might want to explore other storage options like IndexedDB for larger datasets.


// *************************************store objects in localStorage**********************************************************

// When you store an object or an array in LocalStorage, you need to convert it to a string first because LocalStorage can only store strings. 

// you can use :
JSON.stringify();
// to convert the object or Array to a JSON-Formatted String Before Storing it.

// We know Local Storage is a WebStorage ApI and Every ApI formated in JSON.

// Similarly, when retrieving the data, you use
 JSON.parse() 
//to convert the stored string back into an object or array.


// Storing an object
const user = {
    name: "John Doe",
    age: 25,
    email: "john@example.com"
  };
  
  localStorage.setItem("user", JSON.stringify(user));
  
  // Retrieving the object
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);
  






