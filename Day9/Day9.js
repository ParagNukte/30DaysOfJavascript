// Task 1 : change the text content using id of the HTML element
document.getElementById("title").innerHTML = "Day 9 in practice";

//Tasl 2: change the background color by class of a HTML element

const elements = document.getElementsByClassName("bgChange");
elements[0].style.backgroundColor = "green"; // need to write in array form as there can be many classes with same name

// Creating and Appending Elements
// Task 3 : Creat a new element div with some text content and append it to the body

const newDiv = document.createElement("div");
newDiv.innerHTML = "Day 9 Task 3 finished successfully";
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add to the existing ul list

const newLi = document.createElement("li");
newLi.innerHTML = "Item 4";

document.getElementById("myList").appendChild(newLi);
// Task 5: Change the font size of a paragraph element by class
