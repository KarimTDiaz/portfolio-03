const clickableElements = document.querySelectorAll('.clickable');
const click = () => {
  clickableElements.forEach(elm => {
    elm.addEventListener('mouseover', function () {
      document.body.classList.add('cursor-hovered');
    });
    elm.addEventListener('mouseleave', function () {
      document.body.classList.remove('cursor-hovered');
    });
  });
};

export { click };
