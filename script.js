const addNewTask = document.querySelector("#addTaskBtn");
const newTask = document.querySelector("#taskinput");
const tasksContainer = document.querySelector(".task-container");


function errorMenssages(container, message, duration = 2000) {

    const firstErrorMsg = document.querySelector(".errorMsg");

    if (!firstErrorMsg) {

        const errorAlert = document.createElement("p");
        errorAlert.innerText = message;
        errorAlert.classList.add("errorMsg");

        container.appendChild(errorAlert);

    setTimeout(() => {

        container.removeChild(errorAlert);

    }, duration);

  }
}


addNewTask.addEventListener("click", (e) => {

    /*prevent default*/

    e.preventDefault();

    /*verificação de input vazio*/

    if (newTask.value.trim() === "") {


        /*chamada de função para mostrar mensagem de erro*/

        errorMenssages(tasksContainer, 'Por favor, insira uma tarefa');

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