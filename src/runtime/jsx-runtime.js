const flatten = (arr) =>
  arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );

// eslint-disable-next-line no-multi-assign
exports.jsxs = exports.jsx = (tag, { ref, children, ...props } = {}) => {
  if (typeof tag === 'string') {
    const element = document.createElement(tag);

    Object.keys(props).forEach((key) => {
      if (props[key]) {
        if (typeof props[key] === 'function') {
          element[key] = props[key];
        } else {
          element.setAttribute(key, props[key]);
        }
      }
    });

    if (children) {
      children = Array.isArray(children) ? flatten(children) : [children];
      console.log(`📕 children - 25:jsx-runtime.js \n`, children);

      children.forEach((child) => {
        if (child) {
          if (typeof child === 'string') {
            child = document.createTextNode(child);
          }
          element.appendChild(child);
        }
      });
    }

    if (ref) {
      if (typeof ref === 'function') {
        ref(element);
      } else {
        element.setAttribute('ref', ref);
      }
    }

    return element;
  }
  if (typeof tag === 'function') {
    return tag({ ref, children, ...props });
  }
  console.error('Invalid tag type', tag);
};

exports.Fragment = ({ children } = {}) => {
  const element = document.createDocumentFragment();

  if (children) {
    children = Array.isArray(children) ? flatten(children) : [children];

    children.forEach((child) => {
      if (child) {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        element.appendChild(child);
      }
    });
  }

  return element;
};


// function createTextElement(text) {
//   return {
//     type: 'TEXT_ELEMENT',
//     props: {
//       nodeValue: text,
//       children: [],
//     },
//   };
// }

// function jsx(type, config) {
//   if (typeof type === 'function') {
//     return type(config);
//   }
//   const { children = [], ...props } = config;
//   const childrenProps = [].concat(children);
//   return {
//     type,
//     props: {
//       ...props,
//       children: childrenProps.map((child) => (typeof child === 'object' ? child : createTextElement(child))),
//     },
//   };
// }

// function render(element, container) {
//   const dom = element.type === 'TEXT_ELEMENT'
//     ? container.ownerDocument.createTextNode('')
//     : container.ownerDocument.createElement(element.type);
//   const isProperty = (key) => key !== 'children';
//   Object.keys(element.props)
//     .filter(isProperty)
//     .forEach((name) => {
//       dom[name] = element.props[name];
//     });
//   element.props.children.forEach((child) => render(child, dom));
//   container.appendChild(dom);
// }

// const dom = (name, props, ...children) => {
//   const elem = document.createElement(name);
//   Object.keys(props || {}).forEach((key) => {
//     if (key === 'style') {
//       Object.keys(props[key]).forEach((styleKey) => {
//         elem.style[styleKey] = props[key][styleKey];
//       });
//     } else {
//       elem[key] = props[key];
//     }
//   });

//   const addChild = (child) => {
//     if (Array.isArray(child)) {
//       child.forEach((c) => addChild(c));
//     } else if (typeof child === 'object') {
//       elem.appendChild(child);
//     } else {
//       elem.appendChild(document.createTextNode(child));
//     }
//   };

//   (children || []).forEach(c => addChild(c));