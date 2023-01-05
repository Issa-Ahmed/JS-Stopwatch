"use strict";

// Selecting elements
const hourLabel = document.getElementById("hours");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const milliSecondsLabel = document.getElementById("milliseconds");

const pauseBtn = document.querySelector(".pause");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");

// State variables
let interval;
let milSec = 1;
let sec = 1;
let min = 1;
let hour = 1;

// Functions
const resetText = (label) => {
  label.textContent = "00";
};

const startTimer = function () {
  milliSecondsLabel.textContent = `${milSec++}`.padStart(2, "0");
  if (milSec > 100) {
    resetText(milliSecondsLabel);
    secondsLabel.textContent = `${sec++}`.padStart(2, "0");
    milSec = 1;
  }
  if (sec > 60) {
    resetText(secondsLabel);
    minutesLabel.textContent = `${min++}`.padStart(2, "0");
    sec = 1;
  }
  if (min > 60) {
    resetText(minutesLabel);
    hourLabel.textContent = `${hour++}`.padStart(2, "0");
    min = 1;
  }
};

// Event handlers
startBtn.addEventListener("click", function () {
  clearInterval(interval);
  startBtn.textContent = "Start";
  interval = setInterval(startTimer, 10);
});

pauseBtn.addEventListener("click", function () {
  startBtn.textContent = "Resume";
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  startBtn.textContent = "Start";
  clearInterval(interval);
  hour = 1;
  min = 1;
  sec = 1;
  milSec = 1;
  resetText(hourLabel);
  resetText(minutesLabel);
  resetText(secondsLabel);
  resetText(milliSecondsLabel);
});
