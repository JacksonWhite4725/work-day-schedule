/* Access elements from index.html */

var timeDisplay = document.getElementById("currentDay");

/* Develop functions */

// Run functions when page loads
function pageStart() {
    setDate();
}

// Set date and assign value to timeDisplay
function setDate() {
    var date = new Date();
    var day = date.toDateString();
    timeDisplay.textContent = day;
}

setDate();