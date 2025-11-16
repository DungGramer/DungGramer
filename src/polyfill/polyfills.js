/**
 * Manual polyfills for IE6/IE8 and legacy browsers
 * These polyfills provide basic functionality for older browsers
 */

// Console polyfill for IE6/IE7/IE8
if (!window.console) {
  window.console = {
    log: function () {},
    warn: function () {},
    error: function () {},
    info: function () {},
    debug: function () {},
    trace: function () {},
    dir: function () {},
    group: function () {},
    groupEnd: function () {},
    time: function () {},
    timeEnd: function () {},
    assert: function () {},
    clear: function () {},
  };
}

// addEventListener polyfill for IE6/IE7/IE8
if (!Element.prototype.addEventListener) {
  Element.prototype.addEventListener = function (event, handler) {
    const element = this;
    element.attachEvent(`on${event}`, function () {
      handler.call(element, window.event);
    });
  };
}

if (!Element.prototype.removeEventListener) {
  Element.prototype.removeEventListener = function (event, handler) {
    this.detachEvent(`on${event}`, handler);
  };
}

// Event.preventDefault polyfill for IE6/IE7/IE8
if (window.Event && !Event.prototype.preventDefault) {
  Event.prototype.preventDefault = function () {
    this.returnValue = false;
  };
}

// Event.stopPropagation polyfill for IE6/IE7/IE8
if (window.Event && !Event.prototype.stopPropagation) {
  Event.prototype.stopPropagation = function () {
    this.cancelBubble = true;
  };
}

// XMLHttpRequest polyfill for IE6
if (!window.XMLHttpRequest) {
  window.XMLHttpRequest = function () {
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
    } catch (e1) {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (e2) {
        try {
          return new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e3) {
          try {
            return new ActiveXObject('Microsoft.XMLHTTP');
          } catch (e4) {
            throw new Error('This browser does not support XMLHttpRequest.');
          }
        }
      }
    }
  };
}

// document.querySelector polyfill for IE6/IE7
if (!document.querySelector) {
  document.querySelector = function (selector) {
    const elements = document.querySelectorAll(selector);
    return elements.length > 0 ? elements[0] : null;
  };
}

// document.querySelectorAll polyfill for IE6/IE7
if (!document.querySelectorAll) {
  document.querySelectorAll = function (selector) {
    const doc = document;
    const head = doc.documentElement.firstChild;
    const styleTag = doc.createElement('STYLE');
    head.appendChild(styleTag);
    doc.__qsaels = [];

    styleTag.styleSheet.cssText = `${selector}{x:expression(document.__qsaels.push(this))}`;
    window.scrollBy(0, 0);

    const elements = [];
    for (let i = 0; i < doc.__qsaels.length; i++) {
      elements.push(doc.__qsaels[i]);
    }
    doc.__qsaels = [];
    head.removeChild(styleTag);
    return elements;
  };
}

// document.getElementsByClassName polyfill for IE6/IE7/IE8
if (!document.getElementsByClassName) {
  document.getElementsByClassName = function (className) {
    const allElements = document.getElementsByTagName('*');
    const results = [];
    for (let i = 0; i < allElements.length; i++) {
      if (
        allElements[i].className &&
        allElements[i].className.indexOf(className) !== -1
      ) {
        results.push(allElements[i]);
      }
    }
    return results;
  };
}

// Element.classList polyfill for IE6/IE7/IE8/IE9
if (!('classList' in document.createElement('_'))) {
  (function (view) {
    if (!('Element' in view)) return;

    const classListProp = 'classList';
    const protoProp = 'prototype';
    const elemCtrProto = view.Element[protoProp];
    const objCtr = Object;
    const strTrim =
      String[protoProp].trim ||
      function () {
        return this.replace(/^\s+|\s+$/g, '');
      };
    const arrIndexOf =
      Array[protoProp].indexOf ||
      function (item) {
        let i = 0;
        const len = this.length;
        for (; i < len; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }
        return -1;
      };

    const DOMTokenList = function (elem) {
      const classes = strTrim.call(elem.getAttribute('class') || '');
      const tokens = classes ? classes.split(/\s+/) : [];
      let i = 0;
      const len = tokens.length;

      for (; i < len; i++) {
        this.push(tokens[i]);
      }
      this._updateClassName = function () {
        elem.setAttribute('class', this.toString());
      };
    };
    const classListProto = (DOMTokenList[protoProp] = []);
    const classListGetter = function () {
      return new DOMTokenList(this);
    };

    DOMTokenList[protoProp].item = function (i) {
      return this[i] || null;
    };
    DOMTokenList[protoProp].contains = function (token) {
      token += '';
      return arrIndexOf.call(this, token) !== -1;
    };
    DOMTokenList[protoProp].add = function () {
      const tokens = arguments;
      let i = 0;
      const l = tokens.length;
      let token;
      let updated = false;
      do {
        token = `${tokens[i]}`;
        if (arrIndexOf.call(this, token) === -1) {
          this.push(token);
          updated = true;
        }
      } while (++i < l);

      if (updated) {
        this._updateClassName();
      }
    };
    DOMTokenList[protoProp].remove = function () {
      const tokens = arguments;
      let i = 0;
      const l = tokens.length;
      let token;
      let updated = false;
      let index;
      do {
        token = `${tokens[i]}`;
        index = arrIndexOf.call(this, token);
        while (index !== -1) {
          this.splice(index, 1);
          updated = true;
          index = arrIndexOf.call(this, token);
        }
      } while (++i < l);

      if (updated) {
        this._updateClassName();
      }
    };
    DOMTokenList[protoProp].toggle = function (token, force) {
      token += '';

      const result = this.contains(token);
      const method = result ? (force !== true && 'remove') : (force !== false && 'add');

      if (method) {
        this[method](token);
      }

      if (force === true || force === false) {
        return force;
      }
      return !result;
    };
    DOMTokenList[protoProp].toString = function () {
      return this.join(' ');
    };

    if (objCtr.defineProperty) {
      const classListPropDesc = {
        get: classListGetter,
        enumerable: true,
        configurable: true,
      };
      try {
        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
      } catch (ex) {
        if (ex.number === -0x7ff5ec54) {
          classListPropDesc.enumerable = false;
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        }
      }
    } else if (objCtr[protoProp].__defineGetter__) {
      elemCtrProto.__defineGetter__(classListProp, classListGetter);
    }
  })(window);
}

// JSON polyfill for IE6/IE7
if (!window.JSON) {
  window.JSON = {
    parse: function (sJSON) {
      return eval(`(${sJSON})`);
    },
    stringify: (function () {
      const toString = Object.prototype.toString;
      const hasOwnProperty = Object.prototype.hasOwnProperty;
      const isArray =
        Array.isArray ||
        function (a) {
          return toString.call(a) === '[object Array]';
        };
      const escMap = {
        '"': '\\"',
        '\\': '\\\\',
        '\b': '\\b',
        '\f': '\\f',
        '\n': '\\n',
        '\r': '\\r',
        '\t': '\\t',
      };
      const escFunc = function (m) {
        return (
          escMap[m] || `\\u${(m.charCodeAt(0) + 0x10000).toString(16).substr(1)}`
        );
      };
      const escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        }
        if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        }
        if (typeof value === 'boolean') {
          return value.toString();
        }
        if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          }
          if (isArray(value)) {
            let res = '[';
            for (let i = 0; i < value.length; i++)
              res += (i ? ', ' : '') + stringify(value[i]);
            return `${res}]`;
          }
          if (toString.call(value) === '[object Object]') {
            const tmp = [];
            for (const k in value) {
              if (hasOwnProperty.call(value, k))
                tmp.push(`${stringify(k)}: ${stringify(value[k])}`);
            }
            return `{${tmp.join(', ')}}`;
          }
        }
        return `"${value.toString().replace(escRE, escFunc)}"`;
      };
    })(),
  };
}

// getComputedStyle polyfill for IE6/IE7/IE8
if (!window.getComputedStyle) {
  window.getComputedStyle = function (element) {
    this.element = element;
    this.getPropertyValue = function (prop) {
      const re = /(\-([a-z]){1})/g;
      if (prop === 'float') prop = 'styleFloat';
      if (re.test(prop)) {
        prop = prop.replace(re, function () {
          return arguments[2].toUpperCase();
        });
      }
      return element.currentStyle[prop] || null;
    };
    return this;
  };
}

// Date.now polyfill for IE6/IE7/IE8
if (!Date.now) {
  Date.now = function () {
    return new Date().getTime();
  };
}

// window.pageXOffset/pageYOffset polyfill for IE6/IE7/IE8
if (window.pageXOffset === undefined) {
  Object.defineProperty(window, 'pageXOffset', {
    get: function () {
      return document.documentElement.scrollLeft || document.body.scrollLeft;
    },
  });
}

if (window.pageYOffset === undefined) {
  Object.defineProperty(window, 'pageYOffset', {
    get: function () {
      return document.documentElement.scrollTop || document.body.scrollTop;
    },
  });
}

// Element.textContent polyfill for IE6/IE7/IE8
if (Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, 'textContent') && !Object.getOwnPropertyDescriptor(Element.prototype, 'textContent').get) {
  (function () {
    const innerText = Object.getOwnPropertyDescriptor(Element.prototype, 'innerText');
    Object.defineProperty(Element.prototype, 'textContent', {
      get: function () {
        return innerText.get.call(this);
      },
      set: function (s) {
        return innerText.set.call(this, s);
      },
    });
  })();
}
