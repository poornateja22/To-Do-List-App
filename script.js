const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')

function addTask() {
    if(inputBox.value == ' ') {
        alert('Write something');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        li.classList.add('task-item'); 

        let editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.className = 'edit';
        li.appendChild(editButton);

        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.classList.contains('edit')) {
        const li = e.target.parentElement;
        const currentText = li.firstChild.textContent;
        const newInput = prompt("Edit your task", currentText);
        if (newInput !== null && newInput.trim() !== '') {
            li.firstChild.textContent = newInput;
            saveData();
        }
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();