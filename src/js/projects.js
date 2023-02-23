const projectsElement = document.getElementById('projects');
const projectsCssElement = document.getElementById('projects-css');
const projectsJsElement = document.getElementById('projects-js');
const projectsItemsElement = document.querySelectorAll('.projects__item');
const borderProjectsElement = document.getElementById('border-projects');
const arrowElement = document.querySelectorAll('.draw-arrow');
const borderElement = document.getElementById('border');

const borderProjects = () => {
  if (borderProjectsElement.classList.contains('border--projects-show')) {
    borderProjectsElement.classList.remove('border--projects-show');
  } else {
    borderProjectsElement.classList.add('border--projects-show');
  }
};

const borderGrey = ev => {
  borderElement.classList.add('border--grey');
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
  borderProjects();
  borderGrey();
};

const projectsShow = () => {
  if (!projectsElement.classList.contains('projects--show')) {
    projectsElement.classList.add('projects--show');
  } else {
    projectsElement.classList.add('projects--unshow');
  }
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
    projectsShow();
  });
};

const projectsListShow = ev => {
  if (ev.classList.contains('projects__item--css')) {
    projectsCssElement.classList.add('projects-list-container--show');
  } else {
    projectsJsElement.classList.add('projects-list-container--show');
  }
};

export {
  projectsShow,
  borderProjects,
  arrowElement,
  arrowUnDraw,
  projectsElement,
  projectsUnShow,
  borderGrey,
  projectsListShow,
  projectsCssElement
};
