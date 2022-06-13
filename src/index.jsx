import { dom } from './runtime/jsx-runtime';

import App from './App';
import './style.css';

// render(<App />, document.getElementById('root'));
document.getElementById('root').appendChild(<App />);