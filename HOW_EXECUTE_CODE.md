Here we talk about execute code it is easy for interview purpuse

question :- How JavaScript Code Execute??

answer :-  There is the concept "" JavaScript Execution Context "" it means How javaScript execute the code or run the code.

Note :- whenever we give the code to javaScript.. there "Global Execution Context" creates automatically. and "this" variable it he reference of that "GEC".  means  that "GEC" goes into the "this" variable.


There is difference between the browser's Global Ecx. context and the node js or etc.
so  in the browser ... if we console ('this') .. that gives window which is an object.



There are three typs of JavaScript Execution Context.


1>. Global Execution Context:

The default or outermost execution context.
Represents the execution of code outside of any function.
Associated with the global object (e.g., window in a browser environment).
Created when the script is executed.

2>. Function Execution Context:

Created for each invocation of a function.
Includes the function's parameters, local variables, a reference to the outer (enclosing) execution context (lexical environment), and a new scope.
Each function call results in the creation of a new function execution context.


3.> Eval Function Execution Context (rarely used):

Created when code is executed inside the eval() function.
Shares its execution context with the calling context.


----->>>> JavaScript runs or execute the code in two phase.

Note: javaScript is a single threaded.



There are two phase by which the code executed in javaSCript.

1>. Memory Creation Phase

whatever variable we decleared .. for that ..only memory allocates for that variables not execute ;
In Memory Creation Phase the value of all variable show undefined in the stack memory.
and if there is any function .. then that's value becomes defintiaon;

2.> Execution Phase

The JavaScript engine starts executing the code line by line during the execution phase.
In this phase.. It takes variable values.

In this phase.. If we face any function.. to jis line se funtion start ho rha aur jaha tak wo khatm ho rha waha tak uska koi role nhi .. then uske baad yehi kahee pe bhi koi v funtion call hua then for that function a new execution starts "(new variable environment + execution thread)" that new execution called as "new execution context " or "New Global execution Context" ;

It means ki Execution Phase me yedi koi function call hote mil jata hai to fir  wo function ke liye at that time whi pe or "New Global execution Context" or new execution context create ho jata hai .. jisme ki fir se Memory Creation phase and Execution Phase hota hai..us particular function ke liye.

Matlb global execution to ek baar declear hogaya but execution phase me jab jab funciton call hua milta hai tav tav fir se Children global execution context banta hai then uske liye memory creation phase and execute phase chalta hai.

and jab wo function kuch return karta hai to wo (main gobal execution context) parent "Global Execution Context" me jaakr Store hojata hai.

and jab wo funtion ka "New execution context create hota hai then uska kaam hojaane ke baad khud he wo automatically delete vbhi ho jata hai.



Function calls result in the creation of new execution contexts, and the call stack keeps track of these contexts.

*** Summary ***

so whenever we run or execute the code there are one thing always happens..
Automatically "Global Execution Context" created. and "this" keyword reffers it.

then if we decleared variable in global scope. according to that "Memory Creation Phase" Works.
means memory will allocated in the stack Memory.

then "Execution Phase" Works . line by line.

********************************* this is how the javaScript code runs**********************************

In the Execution Phase.. if there is funtion so "Function Execution Context" works there.














