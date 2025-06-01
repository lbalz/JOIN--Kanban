function renderGuestGreeting() {
    const greetingDiv = document.getElementById('greetingContainer');
    greetingDiv.innerHTML = guestGreetingTemplate();
}


function guestGreetingTemplate() {
    return '<h3 class="guest-greeting-text">Good morning</h3>';
}


//! loggedin render functions missing

let loggedIn = false;
function checkLoginStatus() {
    if (loggedIn) {

    } else {
        renderGuestGreeting();
    }
}

function getCurrentDate() {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
}


function loadDateInUrgentContainer() {
    const currentDate = getCurrentDate();
    const urgentCurrentDateContainer = document.getElementById('urgentCurrentDateContainer');

    urgentCurrentDateContainer.innerHTML = dateTemplate(currentDate);
}


function dateTemplate(date) {
    return `<p class="urgent-date">${date}</p>`;
}


function loadSummaryContent() {
    checkLoginStatus();
    loadDateInUrgentContainer();

    console.log(getCurrentDate());
}