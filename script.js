const playBtn = document.getElementById("playBtn");
const intro = document.getElementById("intro");
const quoteScreen = document.getElementById("quoteScreen");
const audio = document.getElementById("bgMusic");

playBtn.addEventListener("click", async () => {
  console.log("Play button clicked");

  try {
    await audio.play();

    // Add a short delay before switching screen
    setTimeout(() => {
      intro.classList.add("hidden");
      quoteScreen.classList.remove("hidden");
    }, 500);
    
  } catch (error) {
    console.error("Autoplay failed:", error);
    alert("Audio play was blocked. Please try clicking again.");
  }
});
