
const navButton = document.getElementById('navbar-button');
const navbarMenu = document.getElementById('navbar-menu');
const openBtn = document.querySelector('.navbar__bars--hamburger');
const closeBtn = document.querySelector('.navbar__bars--close');

navButton.addEventListener('click',()=>{
  openBtn.classList.toggle('is-active');
  closeBtn.classList.toggle('is-active');
  navbarMenu.classList.toggle('active');
})