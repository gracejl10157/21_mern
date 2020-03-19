import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
