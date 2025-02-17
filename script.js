const addNewTask = document.querySelector("#addTaskBtn");
const newTask = document.querySelector("#taskinput");
const tasksContainer = document.querySelector(".task-container");



addNewTask.addEventListener("click", (e) => {

    /*prevent default*/

    e.preventDefault();

    /*verificação de input vazio*/

    if (newTask.value.trim() === "") {

        const errorMessage = document.createElement("p");
        errorMessage.innerText = 'Por favor, insira uma tarefa';
        errorMessage.classList.add("errorMsg");
        tasksContainer.appendChild(errorMessage);

        setTimeout(() => {

            tasksContainer.removeChild(errorMessage);

        }, 2000);

        return;

    /*começo da inserção das tarefas*/    

    } else {

        const task = document.createElement("div");
        task.classList.add("task");
        const taskName = document.createElement("p");
        taskName.innerText = newTask.value;

        const editTaskIcon = document.createElement("ion-icon");
        editTaskIcon.setAttribute("name", "create-outline");
        editTaskIcon.setAttribute("id", "editTaskBtn");

        const removeTaskIcon = document.createElement("ion-icon");
        removeTaskIcon.setAttribute("name", "trash-outline");
        removeTaskIcon.setAttribute("id", "removeTaskBtn");

        const options = document.createElement("div");
        options.classList.add("options");

        options.appendChild(editTaskIcon);
        options.appendChild(removeTaskIcon);
    
        task.appendChild(taskName);
        task.appendChild(options);
        tasksContainer.appendChild(task);

    }


    newTask.value = ""



})