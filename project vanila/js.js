document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("taskInput");
  let addButton = document.getElementById("addTaskButton");
  let taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((element) => {
    renderTask(element);
  });

  addButton?.addEventListener("click", () => {
    let taskText = input?.value.trim();
    if (taskText === "") return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    tasks.push(newTask);
    saveTasks();
    input.value = "";
    renderTask(newTask);
  });
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `<span>${task.text}</span> <button class="delete-btn">Delete</button>`;
    li.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        tasks = tasks.filter((t) => t.id !== task.id);
        saveTasks();
        li.remove();
      }
    });
    taskList.appendChild(li);
  }
});
