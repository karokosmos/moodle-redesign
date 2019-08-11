const nav = document.querySelector('.nav');
const toggleBtn = nav.querySelector('.nav__toggle-btn');
const toggleIcon = nav.querySelector('.nav__toggle-icon');

// Toggle show/hide for the side navigation
toggleBtn.addEventListener('click', _ => {
  nav.classList.toggle('nav-is-hidden');
  toggleIcon.classList.toggle('rotate-icon');
});