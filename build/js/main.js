const MAP_COORDS_DEFAULT = {
  lat: 59.938635,
  lng: 30.323118,
};
const MAP_ZOOM_DEFAULT = 17;
const LAYER_TEMPLATE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const L = window.L;
const map = L.map('map');
const layer = L.tileLayer(LAYER_TEMPLATE, {
  attribution: ATTRIBUTION,
});
const nojsElements = document.querySelectorAll('.nojs');
const menuOpenButton = document.querySelector('.header-nav__toggle');
const navMenu = document.querySelector('.header-nav__list');
const menuLinks = document.querySelectorAll('.header-nav__link');
const phoneInput = document.querySelector('#phone');
const iMask = window.IMask;

nojsElements.forEach((element) => {
  element.classList.remove('nojs');
});

if (menuOpenButton && navMenu) {
  menuOpenButton.addEventListener('click', function () {
    if (menuOpenButton.classList.contains('header-nav__toggle--opened')) {
      menuOpenButton.classList.remove('header-nav__toggle--opened');
      navMenu.classList.remove('header-nav__list--opened');
      document.body.style.overflowY = 'visible';
    } else {
      menuOpenButton.classList.add('header-nav__toggle--opened');
      navMenu.classList.add('header-nav__list--opened');
      document.body.style.overflowY = 'hidden';
    }
  });
  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      menuOpenButton.classList.remove('header-nav__toggle--opened');
      navMenu.classList.remove('header-nav__list--opened');
      document.body.style.overflowY = 'visible';
    });
  });
}

iMask(phoneInput, {
  mask: '+{7}(000)000-00-00'
});

layer.addTo(map);

map
  .setView(MAP_COORDS_DEFAULT, MAP_ZOOM_DEFAULT);
