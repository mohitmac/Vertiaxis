// script.js

// Scroll-to-top button
const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "⬆";
document.body.appendChild(topBtn);

window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar ul");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
