let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let p = document.getElementById("myPara");
  p.textContent = "Button Clicked!";
});

let list = document.getElementById("list");
let listButton = document.getElementById("listButton");
listButton.addEventListener("click", function () {
  let hold = document.getElementById("list");
  hold.firstElementChild.classList.add("highlight");
  // hold.lastElementChild.classList.add("highlight");
  //hold.children[1].classList.add("highlight");
});
let tasks = document.getElementById("tasks");
let taskButton = document.getElementById("taskButton");
taskButton.addEventListener("click", function () {
  let newTask = document.createElement("li");
  newTask.textContent = "New Task Added";
  tasks.appendChild(newTask);
});

let removeButton = document.getElementById("remove");

removeButton.addEventListener("click", function () {
  let tasks = document.getElementById("tasks");
  if (tasks.lastElementChild) {
    tasks.removeChild(tasks.lastElementChild);
  }
});
