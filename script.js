const menuButton = document.querySelector('.flex button[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  mobileMenu.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
  hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');

  // Отримуємо елемент <html>
  const html = document.querySelector('html');

  // Забороняємо/дозволяємо прокручування сторінки
  if (mobileMenu.classList.contains('open')) {
    html.style.overflow = 'hidden';
  } else {
    html.style.overflow = '';
  }
});
