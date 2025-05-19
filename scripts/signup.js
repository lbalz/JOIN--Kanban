let checkboxClicked = false;
let passwordVisibility = false;
let confirmPasswordVisibility = false;

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

function togglePwInputImg() {
    passwordInputImgCheck();
    confirmPasswordInputImgCheck();
}

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