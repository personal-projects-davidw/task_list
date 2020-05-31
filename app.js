
function moveLabelUp() {
    taskLabel.style.animationDuration = '0.1s';
    taskLabel.style.animationTimingFunction = 'linear';
    taskLabel.style.animationFillMode = 'forwards';
    taskLabel.style.animationName = 'shift_up';
    setTimeout(function(){
        newTaskInput.style.outline = '2px solid var(--sec-color--)';
        newTaskInput.style.borderBottom = 'none';
        newTaskInput.focus();
    }, 100); 
}

function moveLabelDown() {
    taskLabel.style.animationDuration = '0.1s';
    taskLabel.style.animationTimingFunction = 'linear';
    taskLabel.style.animationFillMode = 'forwards';
    taskLabel.style.animationName = 'shift_down';
    setTimeout(function(){
        newTaskInput.style.outline = 'none';
        newTaskInput.style.borderBottom = '2px solid var(--sec-color--)';
    }, 100); 
}


// ********** CHECK BOXES **********

// get all current list tickbox elements
let tickBoxes = document.getElementsByClassName('tick');
// convert from HTML collection to array
tickBoxes = Array.from(tickBoxes);
// Iterate over each element adding click event listener
tickBoxes.forEach(element => { 
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
    })
});

// ********** NEW TASK LABEL **********

const taskLabel = document.querySelector('.new_input label');
const newTaskInput = document.getElementById('new_task');
console.log(newTaskInput);


taskLabel.addEventListener('click', moveLabelUp);
newTaskInput.addEventListener('click', e => {
    moveLabelUp();
});

newTaskInput.addEventListener('blur', e => {
    moveLabelDown();
});