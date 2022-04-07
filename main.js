const hamburgerBtn = document.querySelector(".header-right > a");
const closeBtn = document.querySelector(".hamburger-menu > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerBtn.addEventListener("click", function(){
  hamburgerMenu.classList.add("active");
});
closeBtn.addEventListener("click", function(){
  hamburgerMenu.classList.remove("active");
});