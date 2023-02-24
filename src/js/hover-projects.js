const projectImageHoverCssElement =
  document.getElementById('project-image--css');
const projectImageHoverJsElement = document.getElementById('project-image--js');

const projectImageHover = dataset => {
  projectImageHoverCssElement.src = `assets/images/desktop/hover-img-${dataset}.png`;
  projectImageHoverJsElement.src = `assets/images/desktop/hover-img-${dataset}.png`;
};
export { projectImageHover };
