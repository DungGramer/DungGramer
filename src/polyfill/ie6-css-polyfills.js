/**
 * IE6 CSS Polyfills
 * JavaScript-based polyfills for CSS features not supported in IE6
 */

(function () {
  // Only run in IE6 and below
  const isIE6 = !window.XMLHttpRequest || navigator.userAgent.indexOf('MSIE 6') > -1;

  if (!isIE6) {
    return;
  }

  /**
   * PNG Transparency Fix for IE6
   * Using DD_belatedPNG approach (improved AlphaImageLoader)
   */
  function fixPNG() {
    if (navigator.platform === 'Win32' && navigator.appName === 'Microsoft Internet Explorer') {
      const arVersion = navigator.appVersion.split('MSIE');
      const version = parseFloat(arVersion[1]);

      if (version >= 5.5 && version < 7) {
        const images = document.getElementsByTagName('img');
        const backgrounds = [];

        // Fix PNG images
        for (let i = 0; i < images.length; i++) {
          const img = images[i];
          if (img.src && img.src.toLowerCase().indexOf('.png') > -1) {
            const src = img.src;
            img.style.filter = `progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${src}', sizingMethod='scale')`;
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
          }
        }

        // Fix PNG backgrounds
        const allElements = document.getElementsByTagName('*');
        for (let i = 0; i < allElements.length; i++) {
          const elem = allElements[i];
          const bgImg = elem.currentStyle ? elem.currentStyle.backgroundImage : null;

          if (bgImg && bgImg.indexOf('.png') > -1) {
            const src = bgImg.replace(/url\(['"]?/g, '').replace(/['"]?\)/g, '');
            elem.style.filter = `progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${src}', sizingMethod='crop')`;
            elem.style.backgroundImage = 'none';
          }
        }
      }
    }
  }

  /**
   * Hover Fix for non-anchor elements in IE6
   * IE6 only supports :hover on <a> elements
   */
  function fixHover() {
    const hoverClass = 'hover';
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];

      if (elem.tagName.toLowerCase() !== 'a') {
        elem.onmouseover = function () {
          this.className += ` ${hoverClass}`;
        };
        elem.onmouseout = function () {
          this.className = this.className.replace(new RegExp(`\\s?${hoverClass}`, 'g'), '');
        };
      }
    }
  }

  /**
   * Min/Max Width and Height Fix for IE6
   */
  function fixMinMaxDimensions() {
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      const style = elem.currentStyle;

      if (!style) continue;

      // Min-width fix
      if (style.minWidth && style.minWidth !== 'auto') {
        const minWidth = parseInt(style.minWidth, 10);
        if (elem.offsetWidth < minWidth) {
          elem.style.width = `${minWidth}px`;
        }
      }

      // Max-width fix
      if (style.maxWidth && style.maxWidth !== 'none') {
        const maxWidth = parseInt(style.maxWidth, 10);
        if (elem.offsetWidth > maxWidth) {
          elem.style.width = `${maxWidth}px`;
        }
      }

      // Min-height fix
      if (style.minHeight && style.minHeight !== 'auto') {
        const minHeight = parseInt(style.minHeight, 10);
        if (elem.offsetHeight < minHeight) {
          elem.style.height = `${minHeight}px`;
        }
      }

      // Max-height fix
      if (style.maxHeight && style.maxHeight !== 'none') {
        const maxHeight = parseInt(style.maxHeight, 10);
        if (elem.offsetHeight > maxHeight) {
          elem.style.height = `${maxHeight}px`;
        }
      }
    }
  }

  /**
   * Position Fixed Fix for IE6
   * IE6 doesn't support position: fixed
   */
  function fixPositionFixed() {
    const fixedElements = [];
    const allElements = document.getElementsByTagName('*');

    // Find all fixed positioned elements
    for (let i = 0; i < allElements.length; i++) {
      const elem = allElements[i];
      const position = elem.currentStyle ? elem.currentStyle.position : null;

      if (position === 'fixed') {
        fixedElements.push(elem);
        elem.style.position = 'absolute';
      }
    }

    // Update positions on scroll
    function updateFixedPositions() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

      for (let i = 0; i < fixedElements.length; i++) {
        const elem = fixedElements[i];
        const top = parseInt(elem.style.top || 0, 10);
        const left = parseInt(elem.style.left || 0, 10);

        elem.style.top = `${scrollTop + top}px`;
        elem.style.left = `${scrollLeft + left}px`;
      }
    }

    window.attachEvent('onscroll', updateFixedPositions);
    window.attachEvent('onresize', updateFixedPositions);
  }

  /**
   * Inline-block Fix for IE6
   * IE6 doesn't support display: inline-block properly
   */
  function fixInlineBlock() {
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      const display = elem.currentStyle ? elem.currentStyle.display : null;

      if (display === 'inline-block') {
        elem.style.display = 'inline';
        elem.style.zoom = 1;
      }
    }
  }

  /**
   * Child Selector Fix for IE6
   * IE6 has limited support for child selectors (>)
   */
  function fixChildSelectors() {
    // Add a class to first children
    const allElements = document.getElementsByTagName('*');

    for (let i = 0; i < allElements.length; i++) {
      const elem = allElements[i];

      if (elem.children && elem.children.length > 0) {
        // Add first-child class
        const firstChild = elem.children[0];
        if (firstChild.className) {
          firstChild.className += ' first-child';
        } else {
          firstChild.className = 'first-child';
        }

        // Add last-child class
        const lastChild = elem.children[elem.children.length - 1];
        if (lastChild.className) {
          lastChild.className += ' last-child';
        } else {
          lastChild.className = 'last-child';
        }
      }
    }
  }

  /**
   * Multiple Class Selector Fix for IE6
   * IE6 only reads the last class in CSS selectors with multiple classes
   */
  function fixMultipleClassSelectors() {
    // This is handled better in CSS by using single class names
    // or by using JavaScript to apply specific classes
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      const classes = elem.className ? elem.className.split(' ') : [];

      if (classes.length > 1) {
        // Add a combined class name for easier targeting
        const combinedClass = classes.join('-');
        elem.className += ` ${combinedClass}`;
      }
    }
  }

  /**
   * Attribute Selector Fix for IE6
   * IE6 doesn't support attribute selectors
   */
  function fixAttributeSelectors() {
    // Add classes based on common attributes
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];

      // Add class for required inputs
      if (elem.tagName === 'INPUT' && elem.getAttribute('required')) {
        elem.className += ' required-input';
      }

      // Add class for disabled elements
      if (elem.disabled) {
        elem.className += ' disabled-elem';
      }

      // Add class for elements with specific attributes
      if (elem.getAttribute('data-type')) {
        elem.className += ` data-type-${elem.getAttribute('data-type')}`;
      }
    }
  }

  /**
   * Box Sizing Fix for IE6
   * IE6 uses content-box model, this helps simulate border-box
   */
  function fixBoxSizing() {
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      const style = elem.currentStyle;

      if (!style) continue;

      // If box-sizing: border-box is intended
      const boxSizing = elem.style.boxSizing || elem.style['-moz-box-sizing'] || elem.style['-webkit-box-sizing'];

      if (boxSizing === 'border-box') {
        const width = parseInt(style.width, 10);
        const height = parseInt(style.height, 10);
        const paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        const paddingRight = parseInt(style.paddingRight, 10) || 0;
        const paddingTop = parseInt(style.paddingTop, 10) || 0;
        const paddingBottom = parseInt(style.paddingBottom, 10) || 0;
        const borderLeft = parseInt(style.borderLeftWidth, 10) || 0;
        const borderRight = parseInt(style.borderRightWidth, 10) || 0;
        const borderTop = parseInt(style.borderTopWidth, 10) || 0;
        const borderBottom = parseInt(style.borderBottomWidth, 10) || 0;

        if (width) {
          elem.style.width = `${width - paddingLeft - paddingRight - borderLeft - borderRight}px`;
        }
        if (height) {
          elem.style.height = `${height - paddingTop - paddingBottom - borderTop - borderBottom}px`;
        }
      }
    }
  }

  /**
   * Initialize all polyfills
   */
  function init() {
    // Wait for DOM to be ready
    function domReady(callback) {
      if (document.readyState === 'complete') {
        callback();
      } else {
        window.attachEvent('onload', callback);
      }
    }

    domReady(function () {
      try {
        fixPNG();
        fixHover();
        fixMinMaxDimensions();
        fixPositionFixed();
        fixInlineBlock();
        fixChildSelectors();
        fixMultipleClassSelectors();
        fixAttributeSelectors();
        fixBoxSizing();

        // Re-run some fixes on window resize
        window.attachEvent('onresize', function () {
          fixMinMaxDimensions();
        });

        // Log that IE6 polyfills are loaded
        if (window.console && window.console.log) {
          window.console.log('IE6 CSS polyfills loaded successfully');
        }
      } catch (e) {
        // Silently fail if any polyfill has errors
        if (window.console && window.console.error) {
          window.console.error('IE6 CSS polyfill error:', e);
        }
      }
    });
  }

  // Initialize polyfills
  init();
})();
