const render = (element, selector) => {
  if (!element) {
    return;
  }

  if (!selector) {
    document.body.appendChild(element);
  } else {
    if (typeof element === 'string') {
      element = document.createTextNode(element);
    }
    selector.appendChild(element);
  }
};

export default render;
