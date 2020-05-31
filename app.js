
// ********** SET UI VARIABLES **********

// get input field label for new task input
const taskLabel = document.querySelector('#new_input_form label');

// get new task input
const newTaskInput = document.getElementById('new_task');

// get new task input
const newTaskForm = document.getElementById('new_input_form');

let currentTaskList = document.querySelector('.tasks');


/********************************** 
************ CHECK BOXES **********
***********************************/

function cboxListeners(element) {
    element.addEventListener('click', e => {
        // function to switch classname and therefore icon from uncheckd => check & vice-versa
        switch (e.target.className) {
            case "tick far fa-circle":
                e.target.className = "tick fas fa-check-circle";
                break;
            case "tick fas fa-check-circle":
                e.target.className = "tick far fa-circle";
                break;
        }
    });
}

// convert existing from HTML collection to array
tickBoxes = Array.from(document.getElementsByClassName('tick'));

// Iterate over each element adding click event listener
tickBoxes.forEach(element => { 
    cboxListeners(element);
});


/**************************************************
************* NEW TASK LABEL MOVE & SYNC **********
**************************************************/

function moveLabelUp() {
    taskLabel.style.animationDuration = '0.1s';
    taskLabel.style.animationTimingFunction = 'linear';
    taskLabel.style.animationFillMode = 'forwards';
    taskLabel.style.animationName = 'shift_up';
    setTimeout(function() {
        newTaskInput.style.outline = '2px solid var(--sec-color--)';
        newTaskInput.style.borderBottom = 'none';
        newTaskInput.focus();
    }, 100); 
}

function moveLabelDown() { 
    if (newTaskInput.value === "") {
        taskLabel.style.animationDuration = '0.1s';
        taskLabel.style.animationTimingFunction = 'linear';
        taskLabel.style.animationFillMode = 'forwards';
        taskLabel.style.animationName = 'shift_down';
        setTimeout(function() {
            newTaskInput.style.outline = 'none';
            newTaskInput.style.borderBottom = '2px solid var(--sec-color--)';
        }, 100); 
    }
}

taskLabel.addEventListener('click', moveLabelUp);
newTaskInput.addEventListener('click', e => {
    moveLabelUp();
});

newTaskInput.addEventListener('blur', e => {
    moveLabelDown();
});


/******************************** 
************* ADD TASK **********
********************************/

newTaskForm.addEventListener('submit', e => {

    e.preventDefault();
    
    if (newTaskInput.value === "") {
        alert("You need to enter a task.");
    } 

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
    console.log(typeof li);

    // clear new task input field & add event listner
    newTaskInput.value = "";
    cboxListeners(li);
});