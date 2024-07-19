// DAY 4: LOOPS

// Task #1: Write a program to print numbers from 1 to 5 using a for loop.
function PrintNumbers(from, to) {
  for (let i = from; i <= to; i++) {
    console.log(i);
  }
}
PrintNumbers(1, 5);
// Task #2: Write a program to print the multiplication table of 5 using a for loop.

function PrintMulti(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number, " * ", i, " = ", number * i);
  }
}

PrintMulti(5);
// Task #3: Write a program to print numbers from 10 to 1 using a while loop.
function PrintReverseOrder(from, to) {
  let i = from;
  while (i >= to) {
    console.log(i);
    i--;
  }
}
PrintReverseOrder(10, 1);
// Task #4: Write a program to calculate the sum of numbers from 1 to n using a while loop.

function SumOfNumbers(number) {
  let sum = 0;
  let i = 1;
  while (number >= i) {
    sum += i;
    i++;
  }
  console.log(sum);
}

SumOfNumbers(5888);

// Task #5: Write a program to calculate the factorial of n using a while loop.

function Factorial(number) {
  if (number === 0) return 1;
  let i = 1;
  let factorial = 1;
  while (number >= i) {
    factorial *= i;
    i++;
  }
  return factorial;
}
console.log(Factorial(3));
// Task #7: Write a program to print pattern (ignore color)
// *
// **
// ***
// ****
// *****
// ******
// *******
function PrintStarPattern(rows) {
  for (let i = 0; i < rows; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
PrintStarPattern(5, 5);

//Task 8 : Write a program to print numbers from 1 to 10 but skip the number 5 with continue statement;

function PrintNumberWithOutSkipNumber(toNumber, skipNumber) {
  let string = "";
  for (let i = 1; i <= toNumber; i++) {
    if (i === skipNumber) continue;
    string += i;
  }
  console.log(string);
}
PrintNumberWithOutSkipNumber(10, 5);

// Task 9: Write a program to print numbers from 1 to 10 but break the loop when  the number 5  appears for loop
function breakLoop(toNumber, breakNumber) {
  for (let i = 0; i <= toNumber; i++) {
    if (i === breakNumber) break;
    console.log(i);
  }
}
breakLoop(10, 8);
