const playBtn = document.getElementById("playBtn");
const intro = document.getElementById("intro");
const quoteScreen = document.getElementById("quoteScreen");
const audio = document.getElementById("bgMusic");

playBtn.addEventListener("click", () => {
  console.log("Play button clicked");
  audio.play()
    .then(() => {
      intro.classList.add("hidden");
      quoteScreen.classList.remove("hidden");
    })
    .catch(error => {
      console.log("Audio play failed:", error);
      alert("Autoplay blocked. Please try clicking again.");
    });
});
