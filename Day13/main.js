//Task 1 : Create a module that exports a function to add the two numbers. import and use this scropt in another script
export const add = (a, b) => a + b;

//Task 2 : create a module that exports a object represents person with properties and methods .IMport and use this module in another script. write all code according to es6 format .
// personModule.js

export const person = {
  name: "John Doe",
  age: 30,
  greet(person) {
    console.log(`Task 2 :: Person.name} and I am ${person.age} years old.`);
  },
  celebrateBirthday(person) {
    person.age += 1;
    console.log(`Task 2 :: Happy Birthday! I am now ${person.age} years old.`);
  },
};

// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

// mathFunctions.js

// export function add(a, b) {
//     return a + b;
// }

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Division by zero is not allowed.");
  }
}

//Task 4 : Create a module that exports a single function using default export. Import and use this function in another script.
export default function greeting(name) {
  return `Hello, ${name}!`;
}

//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

// utilities.js

export const PI = 3.14159;
export const E = 2.71828;

export function addNumbers(a, b) {
  return a + b;
}

export function subtractNumbers(a, b) {
  return a - b;
}

export function multiplyNumbers(a, b) {
  return a * b;
}

export function divideNumbers(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Division by zero is not allowed.");
  }
}
