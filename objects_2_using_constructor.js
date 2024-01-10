
// Basics

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "ABhishek kumar"
tinderUser.isLogin = false;

console.log(tinderUser);

// now we put one or more objects in an object like nested objects;

const abhishek = {
    profileName : "Abhishek kumar",
    Dob : "03/02/2001",
    Age : "24",
    bank : {
        Holder_Name : "ABhishek KUmar",
        Account_Num : "157283489572",
        Branch : "Vishanpur",
        Nomine_details : {
            Name : "rajkishor lal",
        }
    }
}

// we have to access Nominie Name; we use (.) in nested objects;
console.log(abhishek.bank.Nomine_details.Name);


// if we want to merge or combine two  or more object in a sinle object ;

const obje1 = {1:"a", 2:"b", 3:"c"};
const obje2 = {4:"a", 5:"b", 6:"c"};
const obje3 = {7:"a", 8:"b", 9:"c"};

// now ther are three way to combine all object in a single object;

const single_object = {
    obje1, obje2, obje3
}

console.log(single_object);


// 2nd way
console.log("2nd way");

const single_object2 = Object.assign({}, obje1, obje2, obje3);
console.log(single_object2);

// 3rd way .. we generally use this method in the industry
console.log(" 3rd way .. we generally use this method in the industry");

const single_object3 = {...obje1, ...obje2, ...obje3};
console.log(single_object3);

// now, here we can make array of the objects means we have many object .. we simpley put all objects in the array;
[
    // this Bracket is the symbol of an Array;
]

{
    // if we directly use this symble ..it means it is a JSON which is generally use in APIs. and it is also a symbol of object;
}

const name = [
    {
        username:"abs",
        id:"ajkda234",
    },

    {
        username: " ",
        id: " "
    },

    {
        // This Bracket is the symbol of object
    },

    {


    }
]

// now we have to print some id and name of an array of objects;

console.log(name[0].username);
console.log(name[0].id);


// now if we want to print only all keys of an object which in obviously  print in Arrays.
console.log(" now if we want to print only all keys of an object which in obviously  print in Arrays.");

console.log(tinderUser);

console.log("all keys");
console.log(Object.keys(tinderUser));

// now if we want to print only all values of an object which in obviously  print in Arrays.
console.log(" now if we want to print only all Values of an object which in obviously  print in Arrays.");

console.log(tinderUser);

console.log("all keys");
console.log(Object.values(tinderUser));

// we use entries() to put every keys and value in an arrays in the arrray;
console.log("we use entries() to put every keys and value in an arrays in the arrray;");
console.log(Object.entries(tinderUser));

console.log("Check the particular object has the particular key or not using hasOwnProperty(value name)");
console.log(tinderUser.hasOwnProperty('fullname'));
console.log(tinderUser.hasOwnProperty('id'));


// Destructuring an object;

// suppose we have an object and have keys and value and we want to print only putting key;

const course = {
    coursename : "Abhs",
    price : "999",
    courceInstructor : "Abhishe Kumar"
}

// general way to print:
console.log("general way to print:");
console.log(course.coursename);

console.log("another way to print with only using the key;");

const{coursename} = course;

console.log(coursename);

// we can change the name of coursename into any name ;

// const(coursename:abhisehkname) = course;
// console.log(abhishekname);











