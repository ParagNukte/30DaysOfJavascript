//Error Handeling
//Basic Error Handeling with try catch block
//Task 1 : Write a function that intenationally thorws an error and use a try-catch block to handle the error and log the appropriate msg on the console.

function throwErrorTask1() {
  try {
    throw new Error("Task 1 :: Error thrown");
  } catch (error) {
    console.log("Task 1 :: Error thrown", error);
  }
}
throwErrorTask1();

//Task 2 : Write a funtion that divides two numbers and throws an error if the denominator is zero. Handle the error with try catch block and log the appropriate msg on the console

function divideTwoNumberTask2(numerator, denominator) {
  try {
    if (denominator === 0) throw new Error();
    const result = numerator / denominator;
    console.log("Task 2 :: DivideTwoNumberTask ::", result);
  } catch (error) {
    console.log("Task 2 :: Error thrown :: Deniminator Zero", error);
  }
}
divideTwoNumberTask2(12, 0);

//Finally Block;
//Task 3: Write a function that includes the try, catch and finally block. Log msg in the try, catch and finally block and observe the execution flow.

function observeFinallyTask3() {
  try {
    console.log("Task 3 :: Try block");
    throw new Error();
  } catch (error) {
    console.log("Task 3 :: Error thrown ", error);
  } finally {
    console.log("Task 3 :: Finally Block");
  }
}

observeFinallyTask3();

//Custom Error Objects
//Task 4 : Create a custom error class that extends the built in error class. Throw an instance of this custom error in a funciton and handle it using try catch block;

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.message;
  }
}
function DisplayCustomErrorTask4() {
  try {
    throw new CustomError("Task 4 :: Custom Error thrown using ");
  } catch (error) {
    if (error instanceof CustomError) {
      console.log("Task 4 :: Error thrown using Custom Error :: ", error);
    } else {
      console.log("an unexpected error occured in DisplayCustomErrorTask4");
    }
  }
}
DisplayCustomErrorTask4();

//Task 5 : Write a function that Validates the user input (eg. checking id the string is not empty ) and throws the custom error if the validation fails. Handle the custom error using the try catch block

function ValidateUserInputTask5(inputString) {
  try {
    if (inputString.length === 0) {
      throw new CustomError(
        "Task 5 :: ValidateUserInputTask :: Validation Failed :: String is empty"
      );
    }
    return true;
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(error);
    } else {
      console.log("an unexpected error occured in ValidateUserInputTask5");
    }
    return false;
  }
}
const result = ValidateUserInputTask5("");
console.log("Validation of the String ::", result);

//Error handling in Promises
//Task 6 : Create a promise that randomly resolves or rejects. Use .catch method to handle rejection and log the appropriate message in the console.

const PromiseTask6n7 = new Promise((resolve, reject) => {
  let randomNumber = Math.random() * 1000;
  if (randomNumber > 500) {
    resolve(` :: Promise resolved ${randomNumber}`);
  }
  reject(` :: Promise rejected ${randomNumber}`);
});

PromiseTask6n7.then((message) => {
  console.log("Task 6", message);
}).catch((error) => {
  console.log("Task 6", error);
});

//Task 7 : Use try catch inside asysn fucntion to handle errors from a promise that randomly resolves or rejects, and log a message in the console whether the promise resolves or rejects.

async function PrintPromiseTask7() {
  try {
    const message = await PromiseTask6n7;
    console.log("Task 7", message);
  } catch (error) {
    console.log("Task 7", error);
  }
}
PrintPromiseTask7();

const invalidUrl = "https://invalid.url/endpoint";

//Task 8:
fetch(invalidUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Task 8 :: Data received:", data);
  })
  .catch((error) => {
    console.log("Task 8 :: Fetch error:", error.message);
  });

//Task 9:
async function FetchDataTask9() {
  const url = "https://invalid-url.com/data"; // Invalid URL
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Task 9 :: HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Task 9 :: ", error.message);
  }
}

FetchDataTask9();
