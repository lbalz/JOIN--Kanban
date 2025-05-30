let checkboxClicked = false;
let passwordVisibility = false;
let confirmPasswordVisibility = false;

// Checks if the pw length is 6 or higher
function passwordLengthValidation(element) {
    if (element.value.length + 1 < 7) {
        element.classList.add("error");
    } else {
        element.classList.remove("error");
    }
}

// Checks if the confirmed pw is the same as the normal pw
function confirmPasswordFormValidation(element) {
    const pwInput = document.getElementById('signupPassword');

    if (element.value.length + 1 < 7) {
        element.classList.add("error");
    } else {
        if (pwInput.value === element.value) {
            element.classList.remove("error");
        } else {
            element.classList.add("error");
            console.log("passwörter nicht gleich")
        }
    }
}

//TODO: Privacy Policy Check -> show error msgs -> send data -> show popup

// Toggles Privacy Policy checkbox img
function toggleCheckbox() {
    const checkbox = document.getElementById('checkboxIcon');
    checkboxClicked = !checkboxClicked;

    if (!checkboxClicked) {
        checkbox.src = '../assets/icons/default/checkbox_default.svg';
    } else {
        checkbox.src = '../assets/icons/default/checkbox_checked.svg';
    }
}

// Gets all form Data to send it to DB for e.g.
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

// Clears the form values to ''
function clearForm() {
    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('signupConfirmedPassword').value = '';
    checkboxClicked = false;
    document.getElementById('checkboxIcon').src = '../assets/icons/default/checkbox_default.svg';
}

// Helper function to toggle the icon in password input
function passwordInputImgCheck() {
    const pwInput = document.getElementById('signupPassword');
    const pwInputIcon = document.getElementById('passwordIcon');

    if (pwInput.value.length > 0) {
        pwInputIcon.src = "../assets/icons/default/visibility_off.svg";
        pwInputIcon.style.cursor = "pointer";
        passwordVisibility = true;
    } else {
        pwInputIcon.src = "../assets/icons/default/lock.svg";
        pwInputIcon.style.cursor = "default";
        passwordVisibility = false;
    }
}

// Helper function to toggle the icon in confirm password input
function confirmPasswordInputImgCheck() {
    const pwConfInput = document.getElementById('signupConfirmedPassword');
    const pwConfInputIcon = document.getElementById('confirmPasswordIcon');

    if (pwConfInput.value.length > 0) {
        pwConfInputIcon.src = "../assets/icons/default/visibility_off.svg";
        pwConfInputIcon.style.cursor = "pointer";
        confirmPasswordVisibility = true;
    } else {
        pwConfInputIcon.src = "../assets/icons/default/lock.svg";
        pwConfInputIcon.style.cursor = "default";
        confirmPasswordVisibility = false;
    }
}

// Toggle password & confirm password icons
function togglePwInputImg() {
    passwordInputImgCheck();
    confirmPasswordInputImgCheck();
}

// Toggle the text visibility of password input
function togglePasswordVisibility() {
    const pwInput = document.getElementById('signupPassword');
    const pwInputIcon = document.getElementById('passwordIcon');
    
    if (passwordVisibility) {
        pwInputIcon.src = "../assets/icons/default/visibility.svg";
        passwordVisibility = false;
        pwInput.attributes.type.value = "text";
    } else {
        pwInputIcon.src = "../assets/icons/default/visibility_off.svg";
        passwordVisibility = true;
        pwInput.attributes.type.value = "password";
    }
}

// Toggle the text visibility of confirm password input
function toggleConfirmPasswordVisibility() {
    const pwConfInput = document.getElementById('signupConfirmedPassword');
    const pwConfInputIcon = document.getElementById('confirmPasswordIcon');

    if (confirmPasswordVisibility) {
        pwConfInputIcon.src = "../assets/icons/default/visibility.svg";
        confirmPasswordVisibility = false;
        pwConfInput.attributes.type.value = "text";
    } else {
        pwConfInputIcon.src = "../assets/icons/default/visibility_off.svg";
        confirmPasswordVisibility = true;
        pwConfInput.attributes.type.value = "password";
    }
}

//TODO: Form Validation extra für hier nochmal am ende
// Signup new user and send him to login page
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