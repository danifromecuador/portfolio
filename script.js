const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  hamburger.classList.toggle('hidden');
});