const projectsElement = document.getElementById('projects');
const borderElement = document.getElementById('border-projects');
const arrowElement = document.querySelectorAll('.draw-arrow');

const borderProjects = () => {
  borderElement.classList.add('border--projects-show');
};
const arrowDraw = () => {
  arrowElement.forEach(element => {
    element.classList.add('draw-arrow--show');
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

export { projectsShow, borderProjects };
