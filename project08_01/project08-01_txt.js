"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Amit Jaggernauth
      Date:   10/21/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}


timer.prototype.runPause = function(timer, minBox, secBox) {
  function countdown() {
    if (timer.seconds > 0) {
      timer.seconds--;
    } else if (timer.minutes > 0) {
      timer.minutes--;
      timer.seconds = 59;
    } else {
      clearInterval(timer.timeID);
      timer.timeID = null;
    }
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }

  if (timer.timeID) {
    clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = setInterval(countdown, 1000);
  }
};

window.onload = function() {
  let minBox = document.getElementById("minutesBox");
  let secBox = document.getElementById("secondsBox");
  let runPauseTimer = document.getElementById("runPauseButton");

  const myTimer = new timer(parseInt(minBox.value), parseInt(secBox.value));

  minBox.onchange = function() {
    myTimer.minutes = parseInt(minBox.value);
  };

  secBox.onchange = function() {
    myTimer.seconds = parseInt(secBox.value);
  };

  runPauseTimer.onclick = function() {
    myTimer.runPause(myTimer, minBox, secBox);
  };
};


