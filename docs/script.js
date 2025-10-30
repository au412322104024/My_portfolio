// Toggle menu on mobile
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scroll handled by CSS (scroll-behavior)

