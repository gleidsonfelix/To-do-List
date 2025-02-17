const addNewTask = document.querySelector("#addTaskBtn");
const newTask = document.querySelector("#taskinput");
const tasksContainer = document.querySelector(".task-container");


addNewTask.addEventListener("click", (e) => {

    e.preventDefault();

    if (newTask.value.trim() === "") {

        alert("Por favor, insira uma tarefa");

        return;

    } else {

        const task = document.createElement("div");
        task.classList.add("task");
        const taskName = document.createElement("p");
        taskName.innerText = newTask.value;
    
        const options = document.createElement("div");
    
        task.appendChild(taskName);
        tasksContainer.appendChild(task);

    }


    newTask.value = ""



})