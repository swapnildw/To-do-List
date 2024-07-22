// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskUl = document.getElementById('task-ul');

        const taskLi = document.createElement('li');
        taskLi.textContent = taskText;

        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';

        const completeButton = document.createElement('button');
        completeButton.className = 'complete';
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => {
            taskLi.classList.toggle('complete');
        };

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            taskUl.removeChild(taskLi);
        };

        taskButtons.appendChild(completeButton);
        taskButtons.appendChild(deleteButton);
        taskLi.appendChild(taskButtons);

        taskUl.appendChild(taskLi);

        taskInput.value = '';
    }
}
