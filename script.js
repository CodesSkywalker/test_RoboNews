const navbarToggle = document.querySelector('[data-collapse-toggle]');
const navbarMenu = document.querySelector('#navbar-default');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('hidden');
  navbarMenu.classList.toggle('block');
});