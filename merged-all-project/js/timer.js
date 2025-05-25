
//Timer
let countdown;
let timeInSeconds = 0;

document.getElementById("set").addEventListener("click", function () {
    timeInSeconds = parseInt(document.getElementById("timeSelect").value);
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
            document.getElementById("timerDisplay").style.backgroundColor = "green";
            document.getElementById("timerDisplay").style.color = "white"; 
            alert("Time is up!");
            return;
        }

        updateDisplay(timeInSeconds);
        timeInSeconds--;
    }, 1000);
}

function updateDisplay(seconds) {
    let mins = Math.floor(seconds  / 60);
    let secs = seconds % 60;

    document.getElementById("timerDisplay").innerText =
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
//Done