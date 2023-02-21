const menuItemsElement = document.querySelectorAll('.menu__item');

const menuShow = () => {
  let delay = 0.2;
  menuItemsElement.forEach((element, index) => {
    if (element.classList.contains('menu__item--show')) {
      element.classList.remove('menu__item--show');
    } else {
      element.classList.add('menu__item--show');
    }
    element.style.transitionDelay = (delay * index) / 2 + 's';
  });
};

export { menuShow, menuItemsElement };
