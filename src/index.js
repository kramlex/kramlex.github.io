import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

let elementById = document.getElementById('site-wrapper');
ReactDOM.render(
    <App /> ,
  elementById
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
