
var video = document.getElementById("video");
var currentVideo = "video1.mp4";
var switchTimer = null;

// preload videos in the background
var preloadVideo1 = new Image();
preloadVideo1.src = "video1.mp4";
var preloadVideo2 = new Image();
preloadVideo2.src = "video2.mp4";

function startSwitchTimer() {
    switchTimer = setInterval(function() {
        switchVideo();
    }, 1000); // set the timer threshold to 1 second
}

function stopSwitchTimer() {
    if (switchTimer !== null) {
        clearInterval(switchTimer);
        switchTimer = null;
    }
}

function switchVideo() {
    if (currentVideo == "video1.mp4") {
        currentVideo = "video2.mp4";
        video.src = currentVideo;
        video.play();
    } else {
        currentVideo = "video1.mp4";
        video.src = currentVideo;
        video.play();
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "t") {
        event.preventDefault();
        switchVideo();
    }
});

var container = document.getElementById("container");
container.addEventListener("touchstart", function(event) {
    startSwitchTimer();
});

container.addEventListener("touchend", function(event) {
    stopSwitchTimer();
    if (switchTimer === null) {
        switchVideo();
    }
});
