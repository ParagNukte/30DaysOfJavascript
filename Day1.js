//Activity 1: Variable Declarations
//Task 1 : Declare a variable using var and assign it a number and console log it.
var number = 10;
console.log(number);
//Task 2 : Declare a variable using let and assign it a string and console log it
let string = "Hello world";
console.log(string);

//Activity 2: COnstant Declarations
//Task 3: Declare a var using const assing a boolean value and console log it.

const flag = true;
console.log(flag);

//Activity 3: Data Types
//Task 4: Create variables of different types and log them with there type using typeof operator
let myObj = { name: "Parag" };
let Arr = [9, 2, 4, 4];

console.log(typeof myObj);
console.log(typeof Arr);

//Activity 4 : Reassinging variables
// Task 5 : Declare a variable using let assign it a value, reassign it a new value and console log both values
let myInitialValue = 19;
myInitialValue = 21;
console.log(myInitialValue);

//Activity 5 : Understanding Const
// Task 6: Try reassignig the variable with const and try obsering the error
const firstValue = 19;
// firstValue = 22;// reassigning the value to a constant can not be done.
console.log(firstValue);

//Feature Request
//Variable Types console logs: create variabls with different types and log the variable and there types along

let newNumber = 10;
let newName = "jonney";
let newFlag = true;
let Array = [12, 3, 2, 4, 2, 3];
console.log(newNumber, typeof newNumber);
console.log(newName, typeof newName);
console.log(newFlag, typeof newFlag);
console.log(Array, typeof Array);
