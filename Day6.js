// ### Day 6: Arrays

// Tasks/Activities:

// **Activity 1: Array Creation and Access**
// 1. Use the `.push()` method to add a number of items from 1 to 10 to the array.

let baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 232, 1231, 432, 23, 9, 10];
baseArray.push(17);
console.log(baseArray);

// 2. Access the first element of the array and log it in the console.
console.log("First Element : Base Array :: ", baseArray[0]);
// **Activity 2: Array Methods**
// 1. Use the `.pop()` method to remove the last element from the array and log the updated array.
baseArray.pop();
console.log("Updated Array : Pop Used : ", baseArray);
// 2. Use the `.shift()` method to remove the first element from an array and log this updated array.
baseArray.shift();
console.log("Updated Array : Shift used :: ", baseArray);
// 3. Use `.unshift()` method to add a new number to the end of this list after using `.shift()`.
baseArray.unshift(1);
console.log("Updated Array : Unshift used :: ", baseArray);
// **Activity 3: More Array Methods (Intermediate)**
// 1. Use `.filter()` method to create an array with only numbers under or equaling double digits.

let filteredArray = baseArray.filter((element) => element < 100);
console.log("Updated Array : Filter used :: ", filteredArray);

// 2. Use `.reduce()` method to calculate the total sum of all numbers in an array and log the result.
const totalOfArray = baseArray.reduce(
  (accumulator, element) => accumulator + element
);
console.log("Total Sum : Base Array ::", totalOfArray);
// **Activity 4: Multi-dimensional Arrays**
// 1. Log out information about each item in each row into the console.
let multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
  [19, 20, 21],
  [22, 23, 24],
];

for (let i = 0; i < multiArray.length; i++) {
  for (let j = 0; j < multiArray[0].length; j++) {
    console.log("Multi-Array : ", multiArray[i][j]);
  }
}
// #### Feature Requests:

// **Array Manipulation Methods**
// 1. Create a script that demonstrates the creation of an array, adding, and removing elements with `.push()`, `.pop()`, `.shift()`, `.unshift()`.
// 2. Demonstrate how arrays can be used for data storage by creating several arrays that represent different types of data (e.g., strings, numbers).
// 3. Create a script that demonstrates effective use and manipulation of two-dimensional arrays.
