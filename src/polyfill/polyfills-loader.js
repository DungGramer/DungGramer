/**
 * Polyfills Loader
 * Conditionally loads polyfills only for legacy browsers (IE6-11)
 * Modern browsers skip all polyfills for better performance
 */

(function () {
  // Detect if browser needs polyfills
  const needsPolyfills = (function () {
    // Check for modern features
    const hasModernFeatures =
      'Promise' in window &&
      'Map' in window &&
      'Set' in window &&
      'Symbol' in window &&
      Array.prototype.includes &&
      Object.assign &&
      String.prototype.includes;

    // Check for IE (all versions)
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;

    // Check for very old browsers
    const isVeryOld = !window.addEventListener || !document.querySelector;

    return !hasModernFeatures || isIE || isVeryOld;
  })();

  // Only load manual polyfills for legacy browsers
  // Babel with useBuiltIns: 'usage' will automatically inject core-js polyfills
  // only for features that are actually used in the code
  if (needsPolyfills) {
    // Log for debugging
    if (window.console && window.console.log) {
      console.log('Legacy browser detected - loading manual polyfills...');
    }

    // Import manual polyfills for IE6/IE7/IE8
    // These are not handled by Babel/core-js
    require('./polyfills');

    // IE6 CSS polyfills (JavaScript-based CSS fixes)
    require('./ie6-css-polyfills');

    if (window.console && window.console.log) {
      console.log('Manual polyfills loaded successfully');
      console.log('Core-js polyfills will be auto-injected by Babel as needed');
    }
  } else {
    // Modern browser - no manual polyfills needed
    // Babel will still inject minimal polyfills for features not supported
    if (window.console && window.console.log) {
      console.log('Modern browser detected - skipping manual polyfills');
    }
  }
})();
