// **Day 5: Functions**

// **Tasks/Activities:**

// **Activity 1: Function Declaration**
// 1. Task 1: Write a function to check if a number is even or odd and log the result to the console.
function CheckOddEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log("Given Number :: ", CheckOddEven(22));
// 2. Task 2: Write a function to calculate the square of a number and return the result.

function CalculateSquare(number) {
  return number * number;
}
console.log("Sqaure Of Number ::", CalculateSquare(4));

// **Activity 2: Function Expression**
// 1. Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function CalculateMax(num1, num2) {
  return num1 > num2
    ? `${num1} :: is Max`
    : num1 === num2
    ? "Both number are equal"
    : `${num2} :: is Max`;
}

console.log("Max Of Two Numbers ::", CalculateMax(11, 10));

// 2. Task 4: Write a function expression to concatenate two strings and return the result.
function ConcatStrings(string1, string2) {
  return string1 + string2;
}
console.log("Concatenated Strings ::", ConcatStrings("Hello ", "World"));
// **Activity 3: Arrow Functions**
// 1. Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(sumOfNumbers(10, 23));

// 2. Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkCharaterInString = (string, character) => {
  //method 1

  if (string.indexOf(character) > -1) return true;
  else return false;

  //method 2

  /*   return string.includes(character); */

  //method 3

  /*   for (let i = 0; i < string.length; i++) {
      if (string[i] === character) return true;

    }
    return false; */
};

console.log(checkCharaterInString("Hello World", "y"));

// **Activity 4: Function Parameters and Default Values**
// 1. Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function ProductOfNumbers(num1, num2 = 4) {
  return num1 * num2;
}
console.log(ProductOfNumbers(3));

// 2. Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function GreetingsMsg(name, age = 24) {
  return `Hello ${name}, you are ${age} years old`;
}

console.log(GreetingsMsg("John Doe"));
// **Activity 5: Higher-Order Functions**
// 1. Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function HigherOrderFun(printNumber, number) {
  for (let i = 1; i <= number; i++) {
    printNumber(i);
  }
}
function printNumber(number) {
  console.log(number);
}
HigherOrderFun(printNumber, 10);

// 2. Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function HigherOrderThreeFun(fun1, fun2, value) {
  const result = fun1(value);
  console.log(result);
  const result2 = fun2(result);
  return result2;
}
function add(value) {
  return value + value;
}
function multiply(value) {
  return value * value;
}
console.log(HigherOrderThreeFun(add, multiply, 10));
// **Feature Request:**
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

// **Achievement:**
// By the end of these activities, students will:
