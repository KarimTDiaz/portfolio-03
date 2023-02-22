const projectsElement = document.getElementById('projects');
const projectsItemsElement = document.querySelectorAll('.projects__item');
const borderElement = document.getElementById('border-projects');
const arrowElement = document.querySelectorAll('.draw-arrow');

const borderProjects = () => {
  if (borderElement.classList.contains('border--projects-show')) {
    borderElement.classList.remove('border--projects-show');
  } else {
    borderElement.classList.add('border--projects-show');
  }
};

const borderYellow = ev => {};

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
  borderProjects();
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

const projectsCssShow = () => {};

export {
  projectsShow,
  borderProjects,
  arrowElement,
  arrowUnDraw,
  projectsElement,
  projectsUnShow,
  borderYellow
};
