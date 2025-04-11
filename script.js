// Toggle the navigation menu (for mobile)
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

// Auto-close nav on link click (for mobile)
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#nav-menu a');
  const navMenu = document.getElementById('nav-menu');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });
});

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide scroll-to-top button
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  btn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
};
