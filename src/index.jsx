// Conditionally load polyfills only for legacy browsers (IE6-11)
// Modern browsers skip polyfills for better performance
import './polyfill/polyfills-loader';

import App from './App';
import { render } from 'jsx-mini';
import './style.css';

render(<App />, document.getElementById('root'));
