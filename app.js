
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
        console.log('clicked');
        // function to switch classname and therefore icon from uncheckd => check & vice-versa
        switch (e.target.className) {
            case "tick far fa-circle":
                e.target.className = "tick fas fa-check-circle";
                break;
            case "tick fas fa-check-circle":
                e.target.className = "tick far fa-circle";
                break;
            case "delete fas fa-minus-circle":
                console.log(e.target.parentNode);
                e.target.parentNode.style.animationPlayState = 'running';
        };
    });
};


// convert existing tasks from HTML collection to array
//tasks = Array.from(currentTaskList);
console.log(typeof currentTaskList);

// Iterate over each object element adding click event listener
Object.keys(currentTaskList).forEach((element) => {
    console.log(element);
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
};


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
    };
};


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
    } else {
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
        cboxListeners(li);
        
        //NEED TO SELECT DELETE ICON
        console.log()
    };
});


/*********************************** 
************* DELETE TASK **********
***********************************/

