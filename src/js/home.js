import { menuShow } from './menu.js';
const homeElement = document.getElementById('home');

const homeUnshow = () => {
  homeElement.classList.add('home--unshow');
  homeElement.addEventListener(
    'transitionend',
    () => {
      menuShow();
    },
    { once: true }
  );
};

export { homeUnshow };
