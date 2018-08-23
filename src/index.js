import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
if(sessionStorage.getItem('id') !== null){
  ReactDOM.render(<App id = {sessionStorage.getItem('id')}/>, document.getElementById('root'));
}else{
  ReactDOM.render(<App id = {null} />, document.getElementById('root'));
}

registerServiceWorker();
