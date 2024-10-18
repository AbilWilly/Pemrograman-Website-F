const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
