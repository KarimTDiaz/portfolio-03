// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { click } from './cursor.js';
import { homeUnshow } from './home.js';

const menuIconElement = document.getElementById('menu-icon');

click();

menuIconElement.addEventListener('click', ev => {
  homeUnshow();
});
document.onmousemove = function (e) {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
};
