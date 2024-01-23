// a function is a block of reusable code that performs a specific task or set of tasks.

function functionName(parameters) {
    // code to be executed
    // return statement (optional)
  }


  // with parameters;

  function addNumbers(a, b) {
    var sum = a + b;
    return sum;
  }
  
  var result = addNumbers(5, 3);
  console.log(result); // Output: 8
  

  // without parameters;

  function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
  }

  // Now we can print many time "ABHISHEK" just writting sayMyName();

  sayMyName();
  sayMyName();

  // NOTE : var result = addNumbers(5, 3); Here we passing arguments ;
  // and here  function addNumbers(a, b) .. we giving parameters to the function.


  function loginUserMessage(username = "MIN"){
    if(!username){
      console.log("Pleases enter a username");
      return;
    }
    return `${username} just logged in`
  }

  // here we put passed userName = "MIN" means yedi koi bhi argument pass nahi kar rhe ho to ye default me MIN print kardega

 
  // Theses three cases are important;

  console.log(loginUserMessage(""));
  console.log(loginUserMessage("Abhishek kumar"));
  console.log(loginUserMessage());

  // one more common probelm will occur when i create a shopping websites .when users add items every times ... we dont know what was the total price or what was the total arguments come.. 

  // suppose

  function calculateCartPrice(num1){
    return num1
  }

  console.log(calculateCartPrice(200));

  // here number of price of the item passess only one. 

  // Now we want if user come to website and add item and according to item . every item's price passes in argument so that it can added
  // so we have to make that type of function in which we passes only one paramenter  and they calculate how much price come to argument;

  // There is rest or spread operator (...) which used generally; it means pack the all item price in one variable which is putted in parameter;


  // There is rest or spread operator (...) 

  function calculateCartPrice2(...num1){
    return num1
  }

  console.log(calculateCartPrice2(200,422,455,644));
  // it will print in a bundle or array ;


  // NOTE::::::::::::;

  function calculateCartPrice2(val1, val2, ...num1){
    return num1
  }

  console.log(calculateCartPrice2(200,422,455,644));

  // Now there print only 455,644 because 200 went to val1, and 422 wents to val2. samjh rahe ho!!! 
  // it will print in a bundle or array ;




// Now we want to pass any object in the parameter of a function what happend that time;

// crate a objec

const user = {
  username : "Abhishek",
  price : 199
}

function handleObjects(anyobject){
  console.log(`user name : ${anyobject.username} Price: ${anyobject.price}`);
}

handleObjects(user);


// ************************************For Interview Purpose***********************************************************

// function Statement

// function Expression

// function Declaration

// Anonymous Function

// Named Function Expression

// Difference Between Parameters & Arguments

// First Class Functions

// Arrow function




  