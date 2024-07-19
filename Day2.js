// Day 2: Operators
// Tasks/Activities:
// Arithmetic Operations:
// Task 1: Write a program to add two numbers and log the result to the console.
function addNumbers() {
  let num1 = 10;
  let num2 = 20;
  console.log("Addition of the given Numbers is - ", num1 + num2);
}
// Task 2: Write a program to subtract two numbers and log the result to the console.
function subtractNumbers() {
  let num1 = 10;
  let num2 = 20;
  console.log("Subtraction of the given numbers is - ", num1 - num2);
}
// Task 3: Write a program to multiply two numbers and log the result to the console.
function multiplyNumbers() {
  let num1 = 10;
  let num2 = 20;
  console.log("Multiplication of the given number is - ", num1 * num2);
}
// Task 4: Write a program to divide two numbers and log the result to the console.
function divideNumbers() {
  let num1 = 10;
  let num2 = 20;
  if (num2 === 0) return "invalid division";
  console.log("Division of the given number is - ", num1 / num2);
}
// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
function findRemainder() {
  let num1 = 10;
  let num2 = 3;
  console.log(
    "Remainder of the division operator on the given numbers is - ",
    num1 % num2
  );
}
// Assignment Operators:
// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let assignmentSum = 0;
assignmentSum += 1;
console.log("Output : Assignment Add :: ", assignmentSum);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let assignmentSubtract = 0;
assignmentSubtract -= 1;
console.log("Output : Assignment Subtract :: ", assignmentSubtract);
// Comparison Operators:
// Task 8: Write a program to compare two numbers using > and < and log the result as true/false based on the condition.

function CompareNumbers(num1, num2) {
  const result = num1 > num2 ? true : num1 === num2 ? 0 : false;
  return result;
}
console.log("Output : Compare Numbers ::  ", CompareNumbers(3, 4));
// Task 9: Write a program to compare two numbers using >= and <= and log the result as true/false based on the condition.

function CompareNumbersWithEqual(num1, num2) {
  const result = num1 >= num2 ? true : false;
  return result;
}

console.log(
  "Output : Compare with Equal ::  ",
  CompareNumbersWithEqual(42, 55)
);

// Task 10: Write a program to compare two numbers using == and != and log the result as true/false based on the condition.

function numberEqual(num1, num2) {
  const result = num1 == num2 ? true : false;
  return result;
}
console.log("Output : Number Equals :: ", numberEqual(4, 5));

// Logical Operators:
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

function andCondition() {
  let result = CompareNumbers() && CompareNumbersWithEqual();
  return result;
}
console.log("Output : And Condition :: ", andCondition());

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

function orCondition() {
  let result = CompareNumbers() || numberEqual();
  return result;
}
console.log("Output : Or Condition ::", orCondition());

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

function notCondition() {
    let morning = true;
    return !morning; //it is night
}

console.log("Output : Not Condition :: ", notCondition())

// Feature Requests:
// Arithmetic Operations Course:
// Create a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
// Comparison and Logical Operators Script:
// Develop a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
// Ternary Operator Script:
// Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
