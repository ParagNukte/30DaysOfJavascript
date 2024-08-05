//Task 1: Add a event listner to the button that will change the content of the paragraph

const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", function () {
  document.getElementById("task1").innerHTML =
    "Task 1 executed by clicking on the button";
});

// Task 2: Add a event listner to the button that will toggle its visibility
const task2 = document.getElementById("task2");
task2.addEventListener("dblclick", function () {
  task2.style.display = "none";
});

// Task 3 : Add a mousover event listener that changes its background color

const mouseoverEvent = document.getElementById("task1");

mouseoverEvent.addEventListener("mouseover", function () {
  mouseoverEvent.style.backgroundColor = "green";
});
//Task 4: Add a mouseout event listener and reset its background color
const task1Element = document.getElementById("task1");
task1Element.addEventListener("mouseout", function () {
  task1Element.style.backgroundColor = "white";
});
//Task 5: Add a keydown event listener to an input field that displays key pressed on the console
document.getElementById("task5").addEventListener("keydown", function (event) {
  let word = event.target.value;
  console.log(word);
});
//Task 6: Add a keyup event listener to an input field that displays the current value in the paragraph
document.getElementById("task5").addEventListener("keyup", function (event) {
  let word = event.target.value;
  if (event.key === "ArrowUp") {
    document.getElementById("input-display").innerHTML = word;
  } else {
    document.getElementById("input-display").innerHTML = null;
  }
});
//Task 7: Add a submit event  to a form that prevents the default submission and log the form data to the console.
const form = document.getElementById("myform");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("formname");
  let number = document.getElementById("formnumber");
  console.log(`name: ${name.value}, number: ${number.value}`);
  name.value = "";
  number.value = "";
});
//Task 8: Add a change event listener on a dropdown and display the selected option on the paragraph
const dropDisplay = document.getElementById("drop-display");
const display = document.getElementById("display-drop");
dropDisplay.addEventListener("change", function () {
  const displayCountry = dropDisplay.value;
  display.innerHTML = displayCountry;
});

//Event Delegation:
// Task 9: Add a event listener to a list that logs the text content of the clicked list item using event delgation

const listItem = document.getElementById("list-items");
listItem.addEventListener("click", function (event) {
  console.log(event.target.innerText);
});

// Task 10: Add a event listener to a parent element that listens for the events from dynamically addded child elements

const parentDiv = document.querySelector('#parent-div');

// Add an event listener to the parent element
parentDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        // Handle the event for dynamically added buttons
        console.log('Button clicked:', event.target.innerText);
    }
});