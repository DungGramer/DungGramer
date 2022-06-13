function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function jsx(type, config) {
  if (typeof type === 'function') {
    return type(config);
  }
  const { children = [], ...props } = config;
  const childrenProps = [].concat(children);
  return {
    type,
    props: {
      ...props,
      children: childrenProps.map((child) => (typeof child === 'object' ? child : createTextElement(child))),
    },
  };
}

function render(element, container) {
  const dom = element.type === 'TEXT_ELEMENT'
    ? container.ownerDocument.createTextNode('')
    : container.ownerDocument.createElement(element.type);
  const isProperty = (key) => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });
  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
}

const dom = (name, props, ...children) => {
  const elem = document.createElement(name);
  Object.keys(props || {}).forEach((key) => {
    if (key === 'style') {
      Object.keys(props[key]).forEach((styleKey) => {
        elem.style[styleKey] = props[key][styleKey];
      });
    } else {
      elem[key] = props[key];
    }
  });

  const addChild = (child) => {
    if (Array.isArray(child)) {
      child.forEach((c) => addChild(c));
    } else if (typeof child === 'object') {
      elem.appendChild(child);
    } else {
      elem.appendChild(document.createTextNode(child));
    }
  };

  (children || []).forEach(c => addChild(c));

  return elem;
};

export { jsx, render, dom };
