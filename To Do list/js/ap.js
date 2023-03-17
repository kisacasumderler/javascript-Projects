let push, newTask, tasks; 

push = document.querySelector("#push");
newTask = document.querySelector("#newTask input");
tasks = document.querySelector("#tasks")

push.onclick = function() {
    if(newTask.value.length == 0) {
        alert("Please enter a task");
    }
    else {
        tasks.innerHTML += `<div class="task">
        <span id="taskName">${newTask.value}
        </span>
        <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>`;

        let remove_task = document.querySelectorAll(".delete");

        remove_task.forEach((e)=>{
            e.onclick = function () {
                this.parentNode.remove();
            }
        });

        let task = document.querySelectorAll(".task");

        task.forEach(e=>{
            e.onclick = function() {
                this.classList.toggle('completed');
            }
        });

        newTask.value = "";
    }
}
