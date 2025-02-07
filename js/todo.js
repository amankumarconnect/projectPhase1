//Aman

function addTask(){
    let taskInput = document.querySelector("taskInput");
    let taskText = taskInput.value.trim();

    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Done";
    deleteBtn.onclick = () => {
        li.remove();
        saveTasks();
    }
    li.appendChild(deleteBtn);
    let span = document.createElement("span");
    span.textContent = " " + taskText;
    li.appendChild(span);
    let taskList = document.getElementById("taskList");
    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();
}

function saveTasks(){
    let tasks = Array.from(document.querySelectorAll("taskList li span"))
        .map(span => span.textContent);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Done";
        deleteBtn.onclick = () => {
            li.remove();
            saveTasks();
        }
        li.appendChild(deleteBtn);
        let span = document.createElement("span");
        span.textContent = " " + taskText;
        li.appendChild(span);
        taskList.appendChild(li);
    });
}

loadTasks();