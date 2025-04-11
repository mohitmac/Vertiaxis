// Toggle mobile menu
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

// Close menu on nav link click or outside tap
document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('#nav-menu a');
  const menuToggle = document.querySelector('.menu-toggle');

  // Close menu on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('active') &&
      !navMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      navMenu.classList.remove('active');
    }
  });
});

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide scroll-to-top button
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  btn.style.display =
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
      ? "block" : "none";
};
