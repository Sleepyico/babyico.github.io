//* Clickable pic and audio settings.

var audio = document.getElementById("song");
audio.volume = 0.2;

const logoId = document.getElementById("logoId");

logoId.addEventListener("click", () => {
  audio.play();
});

//* Nots

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");

  // Show the popup
  popup.style.display = "block";

  // Hide the popup after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
});
