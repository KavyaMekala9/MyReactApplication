import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//imported below two libraries manually:
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
//adding Routing, install using npm command- "npm i react-router-dom@4.3.1" :
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
