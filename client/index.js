import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import styles from './css/styles.css';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
