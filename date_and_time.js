// In JavaScript, the Date object is used to work with dates and times. It provides methods for creating, manipulating, and formatting dates. You can create a new Date object using the new Date() constructor.

let currentDate = new Date();

// Type
console.log(typeof currentDate);

console.log(currentDate);

// There are some mthods::::

// Convert to string
console.log(currentDate.toString());

// used to obtain a human-readable string representation of the date portion of the Date object
console.log(currentDate.toDateString());

// used to obtain a string representation of the date and time, formatted according to the locale and options specified.
console.log(currentDate.toLocaleString());

// how to speify or declear own date;

let mycreatedDate = new Date(2023, 0 , 23, 5, 3)
console.log(mycreatedDate.toLocaleDateString());

// how to change or specify my own formate of date

let mycreatedDate2 = new Date("2023-01-14")
console.log(mycreatedDate2.toLocaleString());

// time;

let myTimeStamp = Date.now();
console.log(myTimeStamp);

// method for mili seconds;
console.log(mycreatedDate.getTime());

// to take cuurent date in miliseconds

console.log(Date.now());

// convert it into second;

console.log(Math.floor(Date.now()/1000));

// we want to know day, full year, Hours , Miliseconds , months, seconds time ...... all have .get..();

let newDate = new Date();

console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getDate());
console.log(newDate.getDay());

// One More Method where we define objects;

newDate.toLocaleString('default',
{
    // WE can customize the date() object. 
    weekday: "long",
     timeZone: " ",
     

})





