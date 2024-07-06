const userVideo = document.getElementById("user-video");
const startButton = document.getElementById("start-btn");

const state = { media: null };

//record user's media stream and convert it to binary
startButton.addEventListener("click", () => {
  const mediaRecorder = new MediaRecorder(state.media, {
    audioBitsPerSecond: 128000,
    videoBitsPerSecond: 2500000,
    frameRate: 25,
  });

  mediaRecorder.ondataavailable = (event) => {
    console.log("Binary stream available", event.data);
  };

  mediaRecorder.start(25);
});

window.addEventListener("load", async (e) => {
  const media = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  state.media = media;
  userVideo.srcObject = media;
});
