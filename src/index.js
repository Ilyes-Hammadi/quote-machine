import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css'

import './style/index.css';
import App from './components/App.jsx';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
