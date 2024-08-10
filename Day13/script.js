// main.js
import { person } from "./main.js";

import { add, subtract, multiply, divide } from "./main.js";

import greeting from "./main.js";
//Task 1
const result = add(5, 3);
console.log(`Task 1 :: The result is: ${result}`);

//Task 2
person.greet(person);
person.celebrateBirthday(person);

//Task 3

// main.js

const num1 = 10;
const num2 = 5;

console.log(`Add :: Task 3 :: ${add(num1, num2)}`); // Output: Add: 15
console.log(`Subtract :: Task 3 :: ${subtract(num1, num2)}`); // Output: Subtract: 5
console.log(`Multiply :: Task 3 :: ${multiply(num1, num2)}`); // Output: Multiply: 50
console.log(`Divide :: Task 3 :: ${divide(num1, num2)}`); // Output: Divide: 2

//Task 4 :

const message = greeting("Alice");
console.log("Task 4 :: ", message);

//TAsk 5:
// main.js

import * as utilities from "./main.js";

console.log(`Task 5 :: PI : ${utilities.PI}`); // Output: PI: 3.14159
console.log(`Task 5 :: E :  ${utilities.E}`); // Output: E: 2.71828

const number1 = 10;
const number2 = 5;

console.log(`Task 5 :: Add: ${utilities.addNumbers(number1, number2)}`); // Output: Add: 15
console.log(
  `Task 5 :: Subtract: ${utilities.subtractNumbers(number1, number2)}`
); // Output: Subtract: 5
console.log(
  `Task 5 :: Multiply: ${utilities.multiplyNumbers(number1, number2)}`
); // Output: Multiply: 50
console.log(`Task 5 :: Divide: ${utilities.divideNumbers(number1, number2)}`); // Output: Divide: 2

//Task 6 : Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import _ from "lodash";

let taskArray = [2, 34, 2, 5, 36, 6, 7, 85, 46];
const chunkedArray = _.chunk(taskArray, 3);
console.log("Task 6 :: Chunk Array", chunkedArray);

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

// Make a GET request
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
