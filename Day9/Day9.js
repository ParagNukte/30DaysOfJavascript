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

// Task 5: Select an html and remove it from the DOM

document.getElementById("element-delete").remove();

//Task 6: Select an html and delete the last element of that specific element
document.body.lastChild.remove();

//Task 7: Select an HTML and change one of its attribute such as src of an image

document
  .getElementById("image")
  .setAttribute(
    "src",
    "https://media.geeksforgeeks.org/wp-content/uploads/lastchild.png"
  );

//Task 8: Add and remove a CSS class to/from an HTML element

const listit = document.createElement("li");
document.body.appendChild(listit).innerHTML = "I m created";

//Task 9 : Add a event listener to a button that changes the text content of a paragraph

addEventListener("click", function () {
  document.getElementById("paragraph").innerHTML =
    "task 9 executed by clicking on the button";
});

addEventListener("mouseover", function () {
  document.getElementById("paragraph").style.border =
    "1px solid green";
});
