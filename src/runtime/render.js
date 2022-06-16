function transformElement(element) {
  if (!element) return;

  switch (typeof element) {
    case 'string':
      return document.createTextNode(element);
    case 'function':
      return element();
    default:
      return element;
  }
}

const render = (element, selector) => {
  if (!element) return;

  const transformedElement = transformElement(element);

  if (!selector) {
    document.body.appendChild(transformedElement);
    return;
  }

  selector.appendChild(transformedElement);
};

export default render;
