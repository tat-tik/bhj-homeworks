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

const handler1 = (e) => {
    if (e.key === 'Enter' && taskInput.value.trim() !== '') {  
    	addTask();             
    }
};
const handler2 = (e) => {
	e.preventDefault();
    if (taskInput.value.trim() !== '') {   
    	addTask();            
    }
};
taskInput.addEventListener('keydown', handler1);
btn.addEventListener('click', handler2);

const deleteTask = (e) => {
	let task = e.target.closest(".task")
	taskList.removeChild(task);
};
taskList.addEventListener('click', deleteTask)