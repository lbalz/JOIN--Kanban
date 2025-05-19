let checkboxClicked = false;

function toggleCheckbox() {
    const checkbox = document.getElementById('checkboxIcon');
    checkboxClicked = !checkboxClicked;
    
    if (!checkboxClicked) {
        checkbox.src = '../assets/icons/default/checkbox_default.svg';
    } else {
        checkbox.src = '../assets/icons/default/checkbox_checked.svg';
    }
}