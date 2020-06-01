/**************************************** 
************* SET UI VARIABLES **********
****************************************/

// get input field label for new task input
const taskLabel = document.querySelector('#new_input_form label');

// get new task input
const newTaskInput = document.getElementById('new_task');

// get new task complete <form>
const newTaskForm = document.getElementById('new_input_form');

// get main task list <ul>
let currentTaskList = document.querySelector('.tasks');

// get add task button
const addBtn = document.querySelector('.btn');


/********************************** 
************ CHECK BOXES **********
***********************************/

// function to set listeners on task list entries & handle checking & deleting
function cboxListeners(element) {
    element.addEventListener('click', e => {
        switch (e.target.className) {

            // unticked circle selected so tick
            case "tick far fa-circle":
                e.target.className = "tick fas fa-check-circle";
                break;

            // ticked circle selected so untick
            case "tick fas fa-check-circle":
                e.target.className = "tick far fa-circle";
                break;

            // delete selected so trigger hide animation then delete from dom
            case "delete fas fa-minus-circle":
                e.target.parentNode.style.animationPlayState = 'running';
                setTimeout(function() {
                    e.target.parentNode.remove();
                }, 500);       
        };
    });
};

// set listeners on all tasks in task list at initial page load
document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('click', cboxListeners(task));
});


/**************************************************
************* NEW TASK LABEL MOVE & SYNC **********
**************************************************/

function moveLabelUp() {
    taskLabel.style.animationName = 'shift_up';
    setTimeout(function() {
        newTaskInput.style.outline = '2px solid var(--sec-color--)';
        newTaskInput.style.borderBottom = 'none';
        newTaskInput.focus();
    }, 100); 
};


function moveLabelDown() { 
    if (newTaskInput.value === "") {
        newTaskInput.style.outline = 'none';
        newTaskInput.style.borderBottom = '2px solid var(--sec-color--)';
        taskLabel.style.animationName = 'shift_down';
    };
};


taskLabel.addEventListener('click', moveLabelUp);
newTaskInput.addEventListener('click', e => {
    moveLabelUp();
});

newTaskInput.addEventListener('blur', e => {
    moveLabelDown();
});


/*********************************************************** 
******** DISABLE ADD TASK BTN IF FORM INPUT BLANK **********
***********************************************************/

function setButton() {
    switch (newTaskInput.value.length > 0) {
        case true:
            addBtn.disabled = false;
            addBtn.style.backgroundColor = 'var(--pri-color--)';
            addBtn.style.borderColor = 'var(--pri-color--)';
            addBtn.style.color = 'whitesmoke';
            break;
        
        case false:
            addBtn.disabled = true;
            addBtn.style.backgroundColor = 'var(--sec-color--)';
            addBtn.style.borderColor = 'var(--sec-color--)';
            addBtn.style.color = 'whitesmoke';
            break;
    };
};


addBtn.onmouseenter = () => {
    addBtn.style.cursor = 'pointer';
    if (newTaskInput.value.length > 0) {
        addBtn.style.backgroundColor = 'white';
        addBtn.style.color = 'var(--pri-color--)';
    };
};

addBtn.onmouseleave = () => {
    addBtn.style.cursor = 'default';
    setButton();
};

newTaskInput.onkeyup = () => {
    setButton();
};


/******************************** 
************* ADD TASK **********
********************************/

newTaskForm.addEventListener('submit', e => {

    e.preventDefault();
    
    // create new li to insert into HTML (Tasks) list
    const li = document.createElement('li');
    li.className = 'task';

    // create & append unchecked tick icon as child
    const checkIcon = document.createElement('i');
    checkIcon.className = 'tick far fa-circle';
    li.appendChild(checkIcon);

    // create & append <p> tag with user input from newTaskInput as child
    const para = document.createElement('p');
    para.innerHTML = newTaskInput.value;
    li.appendChild(para);

    // create & append delete icon as child
    const delIcon = document.createElement('i');
    delIcon.className = 'delete fas fa-minus-circle';
    li.appendChild(delIcon);

    // add new li to the current task list
    currentTaskList.appendChild(li);

    // clear new task input field & add event listner
    newTaskInput.value = "";
    setButton();
    cboxListeners(li);
});