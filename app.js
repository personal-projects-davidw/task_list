
// ********** CHECKBOXES **********

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