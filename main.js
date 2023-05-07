var video1 = new Image();
video1.src = "video1.mp4";

var video2 = new Image();
video2.src = "video2.mp4";

var currentVideo = "video1.mp4";
var switchTimer = null;

function startSwitchTimer() {
  switchTimer = setTimeout(function () {
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
  if (currentVideo === "video1.mp4") {
    currentVideo = "video2.mp4";
  } else {
    currentVideo = "video1.mp4";
  }
  video1.currentTime = video2.currentTime;
  video2.currentTime = video1.currentTime;
  var videoElement = document.getElementById("video");
  videoElement.src = currentVideo;
  videoElement.play();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "t") {
    event.preventDefault();
    switchVideo();
  }
});

var container = document.getElementById("container");
container.addEventListener("touchstart", function (event) {
  event.preventDefault();
  startSwitchTimer();
});

container.addEventListener("touchend", function (event) {
  event.preventDefault();
  stopSwitchTimer();
  if (switchTimer === null) {
    switchVideo();
  }
});
