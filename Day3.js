// Day 3: Control Structures
// Tasks/Activities:
// If-Else Statements:
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

function checkNumber(number) {
  const result =
    number > 0 ? "Is Positive" : number === 0 ? "i=Is Zero" : "Is Negative";
  return result;
}

console.log("Check Number Positive -- ", checkNumber(82));

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function checkEleigibleToVote(personAge) {
  const result = personAge >= 18 ? "Eligible to vote" : "Not Elegible to vote";
  return result;
}

console.log("Person Eligible to Vote --", checkEleigibleToVote(32));

// Nested If-Else Statements:
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

function LargestOfThreeNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log("Largest of three numbers-- ", LargestOfThreeNumbers(7, 14, 14));

// Switch Case:
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;
    default:
      return "Invalid Day Number";
      break;
  }
}
console.log(getDayOfWeek(3));
// Task 5: Write a program that uses a switch case to assign a grade (‘A’, ‘B’, ‘C’, ‘D’, ‘F’) based on a score and log the grade to the console.

function GetGrade(score) {
  let category = 0;
  if (score >= 80) category = 1;
  if (score >= 70 && score < 80) category = 2;
  if (score >= 50 && score < 70) category = 3;
  if (score < 50 && score >= 35) category = 4;
  if (score < 35) category = 5;
  switch (category) {
    case 1:
      return "A";
      break;
    case 2:
      return "B";
      break;
    case 3:
      return "C";
      break;
    case 4:
      return "D";
      break;
    case 5:
      return "F";
      break;
    default:
      return "Invalid Score";
      break;
  }
}
console.log("Grade :: ", GetGrade(75));
// Conditional (Ternary) Operator:
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

function checkOddEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log("Odd or Even :: ", checkOddEven(7));

// Combining Conditions:
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function CheckLeapYear(year) {
  return(
    year % 4 === 0 || (year % 400 === 0 && year % 100 === 0)
      ? "LeapYear"
      : "Not Leap Year"
  );
}
console.log("Is Leap Year :: ",CheckLeapYear(2020))

// Feature Requests:
// Number Check Script:
// Create a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// Voting Eligibility Script:
// Develop a script to check if a person is eligible to vote based on their age and log the result.
// Day of the Week Script:
// Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// Grade Assignment Script:
// Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// Leap Year Check Script:
// Write a script that checks if a year is a leap year using multiple conditions and logs the result.
// Achievement:
// By the end of these activities, students will:

// Implement and understand basic if-else control flow.
// Use nested if-else statements to handle multiple conditions.
// Utilize switch cases for control flow based on specific values.
