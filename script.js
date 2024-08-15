// loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader-wrapper");
    const content = document.getElementById("content");

    setTimeout(function () {
      loader.classList.add(
        "opacity-0",
        "pointer-events-none",
        "transition-opacity",
        "duration-500"
      );
      content.classList.remove("hidden");
      content.classList.add("animate-fade-in");
    }, 2000); // Simulating a 2-second load time
  });
  
// Mobile menu toggle
const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// car models carousel/Navigation butttons
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  carousel.classList.add("fade-in");
  setTimeout(() => {
    carousel.classList.remove("fade-in");
  }, 500);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
});