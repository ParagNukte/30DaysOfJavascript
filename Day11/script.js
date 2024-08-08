// Understanding Promises:
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 1 :: Promise resolved after 2 seconds!");
  }, 2000);
}).then((message) => {
  console.log(message);
});

// Task 2: Create a promise that rejects with a message after a 2-second timeout and log the message to the console.

const rejPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Task 2 :: This is rejectd and caught!");
  }, 3000);
});
rejPromise.catch((err) => {
  console.log("Task 2 :: This is an error", err);
});
// Chaining promises
//Task 3: Create a sequence of the promises that simulate fetching data from the server. Chain the promises to log messages in a specific sequence.

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Task 3 :: Promise 1 executed"), 3000);
});
const secPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Task 3 :: Promise 2 executed"), 4000);
});
const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Task 3 :: Promise 3 executed"), 5000);
});

firstPromise.then((message) => console.log(message));
secPromise.then((message) => console.log(message));
thirdPromise.then((message) => console.log(message));

//Using Async/Await
//Task 4 : Write an async function that waits for the promise to resolve and then logs the resolved value;

const display = async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => resolve("Task 4 :: Promise Resolved in display function"), 9000);
  });
  console.log(response);
};
display();

//Task 5 : Write an async fucntion that wait for the promise to rejct and then handles it using try catch and log the error in console.

const handleError = async () => {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(
        () => reject("Task 5 :: The promise is rejected in handle function "),
        10000
      );
    });
  } catch (err) {
    console.log(err);
  }
};

handleError();

//Fetching data from API;
//Task 6: Use the fetch APi to get the data from a public API and log the response data to the console using promises

const fetchDataPromise = () => {
  return new Promise((resovle, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/8").then((response) => {
      if (!response.ok) {
        reject("Task 6 :: Network response was not ok");
        return;
      }
      response.json().then((data) => {
        console.log("Task 6 :: Response fetched by Promise ", data);
      });
    });
  });
};

fetchDataPromise();

//Task 7: Use the fetch APi to get the data from a public API and log the response data to the console using async/await

const fetchDataAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("Task 7 :: Response fetched by Async/Await ", data);
  } catch (error) {
    console.log("Task 7 :: Error in task 6 fetching data");
  }
};

fetchDataAsync();

//Concurrent Promises
//Task 8: Use Promise.all to wait for multiple promises to complete and log alll there values

const PromiseAllOne = new Promise((resolve, reject) => {
  setTimeout(() => resolve("PromiseAllOne executed"), 1000);
});
const PromiseAllSec = new Promise((resolve, reject) => {
  setTimeout(() => resolve("PromiseAllSec executed"), 2000);
});
const PromiseAllThird = new Promise((resolve, reject) => {
  setTimeout(() => resolve("PromiseAllThird executed"), 3000);
});

Promise.all([PromiseAllOne, PromiseAllSec, PromiseAllThird])
  .then((data) => {
    console.log("Task 8 :: All Promises Resolved :: ");
    console.log(data);
  })
  .catch((err) => {
    console.log("Task 8 :: All the Promises Failed");
  });


//Task 9: Use Promise.race to log the value of the first promise that resolvesa among multiple promise


const PromiseRaceOne = new Promise((resolve, reject) => {
    setTimeout(() => resolve("PromiseRaceOne executed"), 10000);
  });
  const PromiseRaceSec = new Promise((resolve, reject) => {
    setTimeout(() => resolve("PromiseRaceSec executed"), 12000);
  });
  const PromiseRaceThird = new Promise((resolve, reject) => {
    setTimeout(() => resolve("PromiseRaceThird executed"), 13000);
  });
  
  Promise.race([PromiseRaceOne, PromiseRaceSec, PromiseRaceThird])
    .then((data) => {
      console.log("Task 9 :: Race Promises Resolved :: ");
      console.log(data);
    })
    .catch((err) => {
      console.log("Task 9 :: Race the Promises Failed", err);
    });
  