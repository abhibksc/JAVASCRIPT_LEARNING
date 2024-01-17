// *********************************For_Loop***************************************

console.log("About FoR LooP");

// In Java, a for loop is used to iterate over a range of values or elements. The general syntax of a for loop in Java is as follows:

for (initialization; condition; update) {
    // code to be executed
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


{
    // Ther is a break and continue Keyword which helps to many condition... 
}


{
    // *****************************while_Loop**************************************
}



// In JavaScript, a while loop is used to repeatedly execute a block of code as long as a specified condition is true. The basic syntax of a while loop is as follows:

while (condition) {
    // code to be executed as long as the condition is true
  }
  

  let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}



// ************************************do_While_loop************************************

// In JavaScript, the do-while loop is another type of loop structure that is similar to the while loop
// do-while loop guarantees that the block of code inside the loop is executed at least once before checking the loop condition. 

do {
    // code to be executed
  } while (condition);
  

  let count2 = 1;

do {
  console.log(count2);
  count2++;
} while (count2 <= 5);


// Caution: Infinite Loop
let condition = false;

do {
  console.log("This is an infinite loop!");
} while (condition);






