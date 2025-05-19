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
function getFormData() {
    const formData = {
        name: document.getElementById('signupName').value,
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPassword').value,
        confirmPassword: document.getElementById('signupConfirmedPassword').value,
        checkbox: checkboxClicked,
    };

    return formData;
}

function clearForm() {
    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('signupConfirmedPassword').value = '';
    checkboxClicked = false;
    document.getElementById('checkboxIcon').src = '../assets/icons/default/checkbox_default.svg';
}

function checkPasswordIsEmpty() {
    // Check ob das pw input feld leer ist, wenn ja zeige lock.svg
}

function checkPasswordLength() {
    // Check ob pw length + 1 > 0 also 1+ stellen lang ist, wenn ja zeige auge zu
     
}
// Onclick auf img soll checken ob checkPasswordIsEmpty() false & checkPasswordLength() > 0 + 1 ist, wenn ja wechselt das bild beim click, sonst kommt ein alert idealerweise mit dem was noch passieren muss damit die onclick ausführbar ist
function checkPasswordVisibility() {
    const passwordInput = document.getElementById('signupPassword');
    const confirmPasswordInput = document.getElementById('signupConfirmedPassword');
    const passwordIcon = document.querySelector('.lock-icon');

    if (passwordInput.value.length + 1 > 0) {
        if (passwordInput.type === 'password') {
            passwordIcon.src = '../assets/icons/default/visibility_off.svg';
        } else if (passwordInput.value.length + 1 === 0) {
            passwordIcon.src = '../assets/icons/default/lock.svg';
        }
    }
}

function togglePasswordVisibility() {

}

function signupUser() {
    const formData = getFormData();

    if (formData) {
        const { name, email, password, confirmPassword, checkbox } = formData;

        if (name && email && password && confirmPassword && checkbox) {
            if (password === confirmPassword) {
                console.log('User signed up:', formData);
            } else {
                alert('Passwords do not match');
            }
        } else if (!checkboxClicked) {
            alert('Please accept the terms and conditions');
        }
        
        else {
            alert('Please fill in all fields');
        }
    }

    clearForm();

    setTimeout(() => {
        // Signup successfull banner animation here
    }, 1000);
}