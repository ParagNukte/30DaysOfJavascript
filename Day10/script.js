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

const task1Element = document.getElementById("task1");
task1Element.addEventListener("mouseout", function () {
  task1Element.style.backgroundColor = "white";
});

document.getElementById("task5").addEventListener("keydown", function (event) {
  let word = event.target.value;
  console.log(word);
});

document.getElementById("task5").addEventListener("keyup", function (event) {
  let word = event.target.value;
  if (event.key === "ArrowUp") {
    document.getElementById("input-display").innerHTML = word;
  } else {
    document.getElementById("input-display").innerHTML = null;
  }
});

const form = document.getElementById("myform");
form.addEventListener("submit", function (event) {
  
  event.preventDefault();
  let name = document.getElementById("formname")
  let number = document.getElementById("formnumber")
  console.log(`name: ${name.value}, number: ${number.value}`);
  name.value= "";
  number.value = "";

});
