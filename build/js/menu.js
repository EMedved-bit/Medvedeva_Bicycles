const menuOpenButton = document.querySelector(".header-nav__toggle");
const navMenu = document.querySelector(".header-nav__list");

if(menuOpenButton && navMenu) {
  menuOpenButton.addEventListener("click",function() {
    if(menuOpenButton.classList.contains("header-nav__toggle--opened")) {
      menuOpenButton.classList.remove("header-nav__toggle--opened");
      navMenu.classList.remove("header-nav__list--opened");
    } else {
      menuOpenButton.classList.add("header-nav__toggle--opened");
      navMenu.classList.add("header-nav__list--opened");
    }
  })
}
