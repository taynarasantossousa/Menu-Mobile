const mobileMenuButton = document.querySelector('.mobile-menu-icon');
const nav = document.querySelector('.main-nav');

mobileMenuButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});