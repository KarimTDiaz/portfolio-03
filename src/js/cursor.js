const clickableElements = document.querySelectorAll('.clickable');
const click = () => {
  clickableElements.forEach(elm => {
    elm.addEventListener('mouseover', () => {
      document.body.classList.add('cursor-hovered');
    });
    elm.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hovered');
    });
  });
};

export { click };
