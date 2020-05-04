const mainNav = document.getElementById('js-menu');
const navBar = document.querySelector('#navbar');
const navBtn = document.getElementById('js-navbar-toggle');
let deskMatch = window.matchMedia('min-width:801px');
let scrollPosition = window.scrollY;

navBtn.addEventListener('click', openMenu);
window.addEventListener('scroll', closeMenu);
deskMatch.addEventListener('scroll', navDark);

function openMenu() {
  mainNav.style.visibility = 'visible';
  mainNav.style.opacity = 1;
}

function closeMenu() {
  mainNav.style.visibility = 'hidden';
  mainNav.style.opacity = 0;
}

function navDark() {
  scrollPosition = window.scrollY;
  if (scrollPosition >= 30) {
    navBar.classList.add('bg-dark');
  } else {
    navBar.classList.remove('bg-dark');
  }
}
