const projectsElement = document.getElementById('projects');
const projectsItemsElement = document.querySelectorAll('.projects__item');
const borderElement = document.getElementById('border-projects');
const arrowElement = document.querySelectorAll('.draw-arrow');

const borderProjects = () => {
  borderElement.classList.add('border--projects-show');
  if (borderElement.classList.contains('border--projects-show')) {
    borderElement.classList.remove('border--projects-show');
  }
};
const arrowDraw = ev => {
  arrowElement.forEach(element => {
    element.classList.add('draw-arrow--show');
  });
};
const arrowUnDraw = ev => {
  arrowElement.forEach(element => {
    if (ev.classList.contains('draw-arrow--show')) {
      element.classList.add('draw-arrow--unshow');
    }
  });
};

const projectsShow = () => {
  projectsElement.classList.add('projects--show');
  projectsElement.addEventListener(
    'transitionend',
    () => {
      borderProjects();
      arrowDraw();
    },
    { once: true }
  );
};

const projectsUnShow = ev => {
  projectsItemsElement.forEach(element => {
    if (element.classList.contains('projects__item--css')) {
      element.classList.add('projects__item-unshow');
    } else {
      element.classList.add('projects__item--js-unshow');
    }
    borderProjects();
  });
};

export {
  projectsShow,
  borderProjects,
  arrowElement,
  arrowUnDraw,
  projectsElement,
  projectsUnShow
};
