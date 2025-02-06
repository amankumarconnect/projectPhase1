let seconds = 0, minutes = 0, timer;
let display = document.querySelector(".timer");

function updateTimer() {
    display.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
}

function startStopwatch() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    minutes = 0;
    display.textContent = "0:00";
}

// Start the stopwatch automatically
startStopwatch();
