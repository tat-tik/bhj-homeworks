const taskList = document.getElementById('tasks__list');
const taskInput = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");
const taskRemove = document.querySelectorAll(".task__remove")

function addTask() {
    const html = `
    <div class="task">
    <div class="task__title">${taskInput.value.trim()}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>
    `;
    taskList.insertAdjacentHTML('beforeEnd', html);
    taskInput.value = '';
};


const handler = (e) => {
	e.preventDefault();
    if (taskInput.value.trim() !== '') {   
    	addTask();            
    }
};

btn.addEventListener('click', handler);

const deleteTask = (e) => {
	let task = e.target.closest(".task")
	taskList.removeChild(task);
};
taskList.addEventListener('click', deleteTask)