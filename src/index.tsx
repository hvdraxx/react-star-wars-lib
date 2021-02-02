import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store'
import './styles/index.css';
import './styles/animations.css';

ReactDOM.render(
  <Provider store={store}>
    <App show loading/>
  </Provider>, 
  document.getElementById('root')
);