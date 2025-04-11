// Toggle the navigation menu (for mobile)
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active');
}

// Automatically close the nav menu when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav-menu').classList.remove('active');
    });
  });
});

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the "scroll to top" button based on scroll position
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  btn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
};
