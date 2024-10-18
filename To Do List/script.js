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

    // Membuat span untuk teks tugas
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Membuat tombol Delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    // Membuat tombol Edit
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.onclick = function () {
        const newTask = prompt('Edit your task:', taskSpan.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            taskSpan.textContent = newTask;
        }
    };

    // Membuat div untuk tombol-tombol
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '5px'; // Jarak antar tombol

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    // Menambahkan span dan tombol ke li
    li.appendChild(taskSpan);
    li.appendChild(buttonContainer);

    // Menambahkan li ke taskList
    taskList.appendChild(li);

    // Mengosongkan input
    taskInput.value = '';
}

// Menambahkan event listener pada tombol Add
addButton.addEventListener('click', addTask);

// Menambahkan event listener untuk Enter key
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
