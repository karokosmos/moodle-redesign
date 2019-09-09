const nav = document.querySelector('.nav');
const toggleBtn = nav.querySelector('.nav__toggle-btn');
const toggleIcon = nav.querySelector('.nav__toggle-icon');

// Toggle side navigation
toggleBtn.addEventListener('click', e => {
  nav.classList.toggle('nav-is-hidden');
  toggleIcon.classList.toggle('rotate-icon');
});