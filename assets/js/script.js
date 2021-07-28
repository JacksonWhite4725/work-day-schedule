/* Access elements from index.html */
let dateDisplay = document.getElementById("currentDay");
let timeBlockContainer = document.getElementById("time-container");

/* Develop functions */
// Run functions when page loads
function pageStart() {
    setDate();
    createTimeBlocks();
    checkHour();
}

// Set date and assign value to timeDisplay
function setDate() {
    let date = new Date();
    let day = date.toDateString();
    dateDisplay.textContent = day;
}

// Creates the time blocks that display all working hours, allow for inputs, and creates save buttons.
function createTimeBlocks() {
    let timeTable = document.createElement("table");
    timeTable.id = "time-table";
    timeBlockContainer.appendChild(timeTable);
    for (let i = 0; i <= 8; i++) {
        let newRow = document.createElement("tr");
        newRow.classList.add("row");
        if (i <= 3) {
            let timeStamp = i + 9;
            for (let i = 0; i < 3; i++) {
                if (i === 0) {
                    let newItem = document.createElement("td");
                    newItem.classList.add("hour");
                    newItem.textContent = timeStamp;
                    newRow.appendChild(newItem);
                } else if (i === 1) {
                    let newItem = document.createElement("input");
                    newItem.classList.add("time-block");
                    newRow.appendChild(newItem);
                } else {
                    let newItem = document.createElement("button");
                    newItem.classList.add("saveBtn");
                    newItem.textContent = "Save";
                    newRow.appendChild(newItem);
                }
            }
        } else {
            let timeStamp = i - 3;
            for (let i = 0; i < 3; i++) {
                if (i === 0) {
                    let newItem = document.createElement("td");
                    newItem.classList.add("hour");
                    newItem.textContent = timeStamp;
                    newRow.appendChild(newItem);
                } else if (i === 1) {
                    let newItem = document.createElement("input");
                    newItem.classList.add("time-block");
                    newRow.appendChild(newItem);
                } else {
                    let newItem = document.createElement("button");
                    newItem.classList.add("saveBtn");
                    newItem.textContent = "Save";
                    newRow.appendChild(newItem);
                }
            }
        }
        timeTable.appendChild(newRow);
    }
}

function checkHour() {
    let hour = document.getElementsByClassName("hour");
    let hourArray = [];
    for (let i = 0; i < hour.length; i++) {
        if (parseInt(hour[i].textContent) > 5) {
            hourArray.push(parseInt(hour[i].textContent));
        } else {
            hourArray.push(parseInt(hour[i].textContent) + 12)
        }
    }
    let date = new Date();
    let currentHour = date.getHours();
    for (let i = 0; i < hourArray.length; i++) {
        if (hourArray[i] < currentHour) {
            console.log("Past hour");
        } else if (hourArray[i] === currentHour) {
            console.log("Current hour");
        } else {
            console.log("Future hour");
        }
    }
}

pageStart()