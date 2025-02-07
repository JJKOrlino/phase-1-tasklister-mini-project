document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

  taskForm.addEventListener('submit', (e) => { //anon function using arrow instead of ("submit", function(e) { });
    e.preventDefault()
    const newTask = document.querySelector("#new-task-description").value
    const taskItem = document.createElement("li")
    taskItem.innerText = newTask
    taskList.appendChild(taskItem)
    taskForm.reset()
  })
});
