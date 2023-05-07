// Get the videos and set the initial state
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
let currentVideo = video1;
let switchTimer = null;
let currentTime = 0;

// Start the switch timer on touchstart
document.addEventListener('touchstart', (event) => {
  event.preventDefault();
  startSwitchTimer();
});

// Stop the switch timer and switch videos on touchend
document.addEventListener('touchend', (event) => {
  event.preventDefault();
  stopSwitchTimer();
  if (switchTimer === null) {
    switchVideo();
  }
});

// Switch videos on 'T' key press
document.addEventListener('keydown', (event) => {
  if (event.key === 't') {
    event.preventDefault();
    switchVideo();
  }
});

function startSwitchTimer() {
  switchTimer = setTimeout(() => {
    switchVideo();
  }, 1000); // set the timer threshold to 1 second
}

function stopSwitchTimer() {
  if (switchTimer !== null) {
    clearTimeout(switchTimer);
    switchTimer = null;
  }
}

function switchVideo() {
  // Switch to the other video
  currentVideo.pause(); // Pause the current video
  currentTime = currentVideo.currentTime;
  currentVideo.style.display = 'none'; // Hide the current video
  if (currentVideo === video1) {
    currentVideo = video2;
  } else {
    currentVideo = video1;
  }
  currentVideo.currentTime = currentTime;
  currentVideo.style.display = 'block'; // Show the other video
  currentVideo.play(); // Play the other video
}
