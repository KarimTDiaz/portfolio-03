// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { click } from './cursor.js';
import { homeUnshow } from './home.js';
import { menuShow, menuItemsElement } from './menu';

const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');
click();

menuIconElement.addEventListener('click', ev => {
  homeUnshow();
});
menuElement.addEventListener('click', ev => {
  if (
    ev.target.classList.contains('menu__link') ||
    ev.target.classList.contains('menu__item')
  ) {
    menuShow();
  }
});

document.onmousemove = function (e) {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
};
