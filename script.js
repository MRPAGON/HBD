// Typewriter Effect for Welcome Message
const welcomeMessage = "  مسا يا رورو اتمني تعجبك ";
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

// Surprise Reveal with Animation
document.getElementById("reveal-btn").addEventListener("click", () => {
  const message = document.getElementById("hidden-message");
  message.classList.toggle("hidden");

  // Add confetti animation
  if (!message.classList.contains("hidden")) {
    showConfetti();
  }
});

// Fun Facts Reveal
let factIndex = 0;
const facts = [
  "هتلاقيها من اكتر الناس الحنينه و مش حابه حد يكرهها",
  "صوتها في الغنا من مستوي تاني و حلو اوي ",
  "واخده مبدا انها تفضح نفسها علشان محدش يعرف يدوسلها علي طرف و هي لو عايزه ممكن توديه ورا الشمس",
  "ممكن تتكلم شهر كامل منغير ما توقف لو اتكلمت في حاجه هي بتحبها",
];

document.getElementById("reveal-facts-btn").addEventListener("click", () => {
  if (factIndex < facts.length) {
    const factContainer = document.getElementById("fun-facts-container");
    const fact = document.createElement("p");
    fact.textContent = facts[factIndex];
    fact.className = "fact";
    factContainer.appendChild(fact);
    factIndex++;
  }
});

// Moving Stars Background
const createStar = () => {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = Math.random() * 5 + 3 + "s";
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 8000);
};

setInterval(createStar, 500);

// Confetti Animation
function showConfetti() {
  const confettiCount = 50;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
// Reveal Gallery on Button Click
document.getElementById("reveal-gallery-btn").addEventListener("click", () => {
  const gallery = document.getElementById("gallery-content");
  gallery.classList.toggle("hidden");
});