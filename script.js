// Toggle nav menu visibility
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
}

// Close nav menu on link click (for mobile)
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('nav-menu');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  });
});

// Close menu when clicking outside (mobile only)
document.addEventListener('click', (event) => {
  const menu = document.getElementById('nav-menu');
  const toggle = document.querySelector('.menu-toggle');

  if (
    menu.classList.contains('active') &&
    !menu.contains(event.target) &&
    !toggle.contains(event.target)
  ) {
    menu.classList.remove('active');
  }
});

// Scroll-to-top button logic
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
  const btn = document.getElementById('topBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
};
