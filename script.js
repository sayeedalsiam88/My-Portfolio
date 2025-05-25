// script.js

// Wait for the page content to fully load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Fade-in animation for selected elements
  const fadeElements = document.querySelectorAll('h3, p, img, footer, a');
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 1s ease-in-out';
  });

  setTimeout(() => {
    fadeElements.forEach(el => {
      el.style.opacity = 1;
    });
  }, 200);

  // 2. Dark Mode toggle with localStorage persistence
  const body = document.body;
  const toggleBtn = document.getElementById('darkModeToggle');

  // Load saved mode
  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }

  function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }

  // 3. Scroll to top button logic
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
