// Typewriter Effect for Welcome Message
const welcomeMessage = "Welcome to your birthday surprise!";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < welcomeMessage.length) {
    document.getElementById("welcome-message").innerHTML += welcomeMessage.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Image Carousel
const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
});

// Surprise Reveal
document.getElementById("reveal-btn").addEventListener("click", () => {
  const message = document.getElementById("hidden-message");
  message.classList.toggle("hidden");
});
