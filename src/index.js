import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title={"Curiosity can kill you"} />, document.getElementById('root'));
registerServiceWorker();
