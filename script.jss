const playBtn = document.getElementById("playBtn");
const intro = document.getElementById("intro");
const quoteScreen = document.getElementById("quoteScreen");
const audio = document.getElementById("bgMusic");

playBtn.addEventListener("click", () => {
  audio.play();
  intro.classList.add("hidden");
  quoteScreen.classList.remove("hidden");
});
