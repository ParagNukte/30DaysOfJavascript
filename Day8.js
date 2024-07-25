// ES-6 + features

// Task/Activities

// Activity 1:
// -Task 1: Use template literals to create a string that inclues persons name and age and log the string to the console.

let name = "Khushi";
let age = "20";
let result = `The name of the persone is ${name} and the age of ${age}`;
console.log(result);

//Task 2: Create a multi-line string using the template literals and log it to the console.

let multilineString = `This is a multi-line string.
It can span multiple lines.
And it can contain ${name} and ${age} variables.`;
console.log(multilineString);

//Activity 2: Destructuring
// Task 3: Use array destructuring to extrat the first  and second element from an array of the number and log them to the console.

let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(`First Element : ${first} and Second Element : ${second}`);

// Task 4: Use object destructuring to extract the author name and title from the book object and log them to the console.
const book = {
  title: "Half Way of Life",
  author: "Haruki Murakami",
};

const { title, author } = book;
console.log(`Book title : ${title} and Author : ${author}`);

// Activity 3: Spread Operator and Rest Operators;
// Task5: Use the spread operatorto create a new array that includes all the elements of the existing array  plus addictional elements and console log the new array.

let newArray = [...numbers, 23, 32];
console.log(`New Array : ${newArray}`);

// Task 6: Use the rest operator in the fucntion to accept any number of arguments and sum them and retrun the result

function restSum(...args) {
  return args.reduce((args, b) => args + b);
}

console.log(`Sum of Arguments : ${restSum(1, 2, 3, 4, 5, 3)}`);

// Activity 4: Default Parameters
// Task7: write a fucntion that takes two parameters and returns there product, witht eh secodnd parameter having default value of 1. log the result of the calling function with and without the second parameter

function defaultParameter(number, defaultNumber = 1) {
  return number * defaultNumber;
}
console.log("Without second Parameter", defaultParameter(3));

console.log("With second Parameter", defaultParameter(3, 2));

//Activity 5: Enhanced object literals
//Task 8: Use enhanced object literals to create an objects with methods and properties  and log the result to the console

const person = {
  name: "John Doe",
  age: 30,
  greet() {
    return { message: `Hello Its ${name} ` };
  },
};

console.log(person.greet());

//Task 9: Create an object with computer property names based on the variables and log them to the console

let key1 = "name";
let key2 = "processor";

let computer = {
    [key1]: "Dell Inspiron",
    [key2]: "Intel Core i7",

}

console.log(computer);