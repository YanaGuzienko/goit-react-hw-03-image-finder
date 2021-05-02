import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.scss';
// import './App.scss';

ReactDOM.render(
  <React.StrictMode>
    <App className={App} />
  </React.StrictMode>,
  document.getElementById('root')
);
