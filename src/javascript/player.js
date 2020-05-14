let video = document.querySelector(".player__video");
let progressColor = document.querySelector(".controls__progressbarColor");
let playBtn = document.getElementById("play-pause");

const togglePlayPause = () => {
  if (video.paused) {
    if (playBtn.classList.contains("pause")) {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
    }

    video.play();
  } else {
    if (playBtn.classList.contains("play")) {
      playBtn.classList.contains("play");
      playBtn.classList.add = "pause";
    }

    video.pause();
  }
};

playBtn.addEventListener("click", togglePlayPause);

video.addEventListener("timeupdate", () => {
  let progressPos = video.currentTime / video.duration;
  progressColor.style.width = progressPos * 100 + "%";
  if (video.ended) {
    playBtn.className = "play";
  }
});
