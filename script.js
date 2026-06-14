const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container')
const addButton=document.getElementById('add-button');

function createTaskItem(taskText){
    const li=document.createElement('li');

    const textSpan=document.createElement('span');
    textSpan.className='task-text';
    textSpan.textContent=taskText;

    const editButton=document.createElement('button');
    editButton.type='button';
    editButton.className='edit-btn';
    editButton.textContent='Edit';

    const deleteButton=document.createElement('button');
    deleteButton.type='button';
    deleteButton.className='delete-btn';
    deleteButton.textContent='\u00d7';

    li.append(textSpan, editButton, deleteButton);
    return li;
}

function normalizeTaskItem(listItem){
    if(listItem.querySelector('.task-text') && listItem.querySelector('.edit-btn') && listItem.querySelector('.delete-btn')){
        return listItem;
    }

    const taskText=listItem.textContent.replace(/\u00d7/g,'').trim();
    const normalizedItem=createTaskItem(taskText);

    if(listItem.classList.contains('checked')){
        normalizedItem.classList.add('checked');
    }

    listItem.replaceWith(normalizedItem);
    return normalizedItem;
}

function addTask(){
    if(inputBox.value===''){
        alert('You must enter a task');
    }
    else{
        listContainer.appendChild(createTaskItem(inputBox.value));
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener('click',function(e){
    const listItem=e.target.closest('li');
    if(!listItem){
        return;
    }

    const taskItem=normalizeTaskItem(listItem);

    if(e.target.classList.contains('delete-btn')){
        taskItem.remove();
        saveData();
        return;
    }

    if(e.target.classList.contains('edit-btn')){
        const taskText=taskItem.querySelector('.task-text');
        const isEditing=taskItem.classList.contains('editing');

        if(isEditing){
            const input=taskItem.querySelector('.edit-input');
            const updatedValue=input.value.trim();

            if(updatedValue===''){
                alert('Task cannot be empty');
                input.focus();
                return;
            }

            taskText.textContent=updatedValue;
            taskItem.classList.remove('editing');
            e.target.textContent='Edit';
            saveData();
            return;
        }

        const currentValue=taskText.textContent;
        taskText.innerHTML=`<input class="edit-input" type="text" value="${currentValue.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}">`;
        taskItem.classList.add('editing');
        e.target.textContent='Save';
        taskText.querySelector('.edit-input').focus();
        return;
    }

    if(e.target.classList.contains('task-text') || e.target.tagName==='LI'){
        taskItem.classList.toggle('checked');
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data') || '';
    Array.from(listContainer.children).forEach(function(listItem){
        normalizeTaskItem(listItem);
    });
}
showTask();