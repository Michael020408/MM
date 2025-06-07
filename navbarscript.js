document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  // find the nav-links inside the same <nav> as the hamburger
  const navLinks  = hamburger.parentElement.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});