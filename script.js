const addNewTask = document.querySelector("#addTaskBtn");
const newTask = document.querySelector("#taskinput");
const tasksContainer = document.querySelector(".task-container");

const tasksLimitModal = document.querySelector("#tasksLimit");
const tasksLimitButton = document.querySelector("#tasksLimitBtn");

const searchInput = document.querySelector("#searchTask");


let tasksList = [];


function errorMenssages(container, message, duration = 2000) {

    /*verificando se uma mensagem de erro já está na tela*/

    const firstErrorMsg = document.querySelector(".errorMsg");

    if (!firstErrorMsg) {

        const errorAlert = document.createElement("p");
        errorAlert.innerText = message;
        errorAlert.classList.add("errorMsg");

        container.appendChild(errorAlert);


    /*removendo a mensagem de erro depois de alguns segundos*/    

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

    /*Verificando se o taskList atingiu o limite máximo*/

       if (tasksList.length >= 5) {

        tasksLimitModal.classList.toggle("modal");

        return;

       } 


    /*criando a div task, onde o nome da tarefa será exibida junto com os botões*/

        const task = document.createElement("div");
        task.classList.add("task");

    /*criando o paragrafo*/

        const taskName = document.createElement("p");
        taskName.innerText = newTask.value;

    /*adicionando icones pelo DOM*/

        const completeTaskIcon = document.createElement("ion-icon");
        completeTaskIcon.setAttribute("name","checkmark-done-outline");
        completeTaskIcon.setAttribute("id", "completeTaskBtn");

        const editTaskIcon = document.createElement("ion-icon");
        editTaskIcon.setAttribute("name", "create-outline");
        editTaskIcon.setAttribute("id", "editTaskBtn");

        const removeTaskIcon = document.createElement("ion-icon");
        removeTaskIcon.setAttribute("name", "trash-outline");
        removeTaskIcon.setAttribute("id", "removeTaskBtn");

    /*criando div onde os icones vão ficar*/

        const options = document.createElement("div");
        options.classList.add("options");

        options.appendChild(completeTaskIcon)
        options.appendChild(editTaskIcon);
        options.appendChild(removeTaskIcon);
        
    /*adicionando as criações anteriores a div task */
        task.appendChild(taskName);
        task.appendChild(options);

    /*adicionando a div task ao container principal e a tasksList*/

        tasksList.push(task);

        for (let i = 0; i < tasksList.length; i++) {

            tasksContainer.appendChild(tasksList[i])

        }

    /*adicionando eventListener aos botões da task*/


       completeTaskIcon.addEventListener("click", () => {

           taskName.classList.toggle("complete")


       })

       removeTaskIcon.addEventListener("click", () => {

            tasksContainer.removeChild(task)
            
            

       })


    }

    /*limpando o input depois de adicionar uma tarefa*/

    newTask.value = ""

});

/*Exibindo modal de erro quando o 'To do' atingir o limite maximo de tarefas*/

tasksLimitButton.addEventListener("click", () => {


    tasksLimitModal.classList.toggle("modal");

});

/*Filtrando as tarefas por nome*/


function filterTaskByName(filteredTasksList) {

    tasksContainer.innerHTML = ''

    filteredTasksList.forEach((taskName) => {

        tasksContainer.appendChild(taskName);

        console.log(tasksContainer)

    })

   

}


searchInput.addEventListener("input", (e) => {

    let searchTasks = e.target.value.toLowerCase();


    let filteredTasks = tasksList.filter(task => task.innerText.toLowerCase().includes(searchTasks));


    filterTaskByName(filteredTasks);
    

})


