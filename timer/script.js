let countdown;
let timeInSeconds = 0;

document.getElementById("set").addEventListener("click", function () {
    let hours = parseInt(document.getElementById("timeSelect").value);
    timeInSeconds = hours * 3600; // Convert hours to seconds
    updateDisplay(timeInSeconds);
});

document.getElementById("start").addEventListener("click", function () {
    startTimer();
});

function startTimer() {
    clearInterval(countdown); // Stop any existing timer

    countdown = setInterval(() => {
        if (timeInSeconds <= 0) {
            clearInterval(countdown);
            alert("Time is up!");
            return;
        }

        updateDisplay(timeInSeconds);
        timeInSeconds--;
    }, 1000);
}

function updateDisplay(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("timerDisplay").innerText =
        `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
