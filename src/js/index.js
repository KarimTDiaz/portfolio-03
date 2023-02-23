// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { click } from './cursor.js';
import { homeUnshow } from './home.js';
import { menuShow, menuItemsElement } from './menu';
import {
  projectsShow,
  borderProjects,
  arrowElement,
  arrowUnDraw,
  projectsElement,
  projectsUnShow,
  borderGrey,
  projectsListShow,
  projectsCssElement
} from './projects.js';

const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');
click();
const menuHomeElement = document.getElementById('menu-home');
const menuProjectsElement = document.getElementById('menu-projects');
const menuAboutElement = document.getElementById('menu-about');
const menuContactElement = document.getElementById('menu-contact');

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
menuProjectsElement.addEventListener('click', ev => {
  projectsShow();
});
projectsElement.addEventListener('click', ev => {
  arrowUnDraw(ev.target);
  projectsUnShow();
  projectsListShow(ev.target);
});

projectsCssElement.addEventListener('mouseover', ev => {
  console.log(ev.target);
});

document.onmousemove = function (e) {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
};
