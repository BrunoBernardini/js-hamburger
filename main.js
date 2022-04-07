const hamburgerBtn = document.querySelector(".header-right > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerBtn.addEventListener('click',function(){
  hamburgerMenu.classList.add('active');
});