const mainNav = document.getElementById('js-menu');
const navBar = document.querySelector('#navbar');
const navBtn = document.getElementById('js-navbar-toggle');
const closeBtn = document.querySelector('.close');

navBtn.addEventListener('click', function openMenu() {
  mainNav.style.visibility = 'visible';
});

closeBtn.addEventListener('click', function closeMenu() {
  mainNav.style.visibility = 'hidden';
});

document.addEventListener('scroll', function navDark() {
  navBar.classList.add('bg-dark');
});
