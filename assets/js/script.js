/* Access elements from index.html */
let dateDisplay = document.getElementById("currentDay");
let timeBlockContainer = document.getElementById("time-container");

/* Develop functions */
// Run functions when page loads
function pageStart() {
    setDate();
    createTimeBlocks();
}

// Set date and assign value to timeDisplay
function setDate() {
    let date = new Date();
    let day = date.toDateString();
    dateDisplay.textContent = day;
}

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
                let newItem = document.createElement("td");
                if (i === 0) {
                    newItem.classList.add("hour");
                    newItem.textContent = timeStamp;
                    newRow.appendChild(newItem);
                } else if (i === 1) {
                    newItem.classList.add("time-block");
                    newItem.textContent = "MAKE THIS A TEXT INPUT";
                    newRow.appendChild(newItem);
                } else {
                    newItem.classList.add("saveBtn");
                    newItem.textContent = "Save";
                    newRow.appendChild(newItem);
                }
            }
        } else {
            let timeStamp = i - 3;
            for (let i = 0; i < 3; i++) {
                let newItem = document.createElement("td");
                if (i === 0) {
                    newItem.classList.add("hour");
                    newItem.textContent = timeStamp;
                    newRow.appendChild(newItem);
                } else if (i === 1) {
                    newItem.classList.add("time-block");
                    newItem.textContent = "MAKE THIS A TEXT INPUT";
                    newRow.appendChild(newItem);
                } else {
                    newItem.classList.add("saveBtn");
                    newItem.textContent = "Save";
                    newRow.appendChild(newItem);
                }
            }
        }
        timeTable.appendChild(newRow);
    }
}

pageStart()