let timer;                // variable to hold setInterval
let seconds = 0;          // seconds count
let minutes = 0;          // minutes count
let hours = 0;            // hours count
let running = false;      

const timeDisplay = document.getElementById("time");

// Start button
document.getElementById("start-btn").addEventListener("click", () => {
  if (!running) {
    running = true;
    timer = setInterval(updateTime, 1000);  // every 1 second
  }
});

// Stop button
document.getElementById("stop-btn").addEventListener("click", () => {
  clearInterval(timer);
  running = false;
});

// Reset button
document.getElementById("reset-btn").addEventListener("click", () => {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});

// Function to update time
function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

// Function to show time in human format
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timeDisplay.textContent = `${h}:${m}:${s}`;
}
