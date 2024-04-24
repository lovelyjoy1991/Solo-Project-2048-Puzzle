import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.jsx';

const root = createRoot(document.getElementById('app'));
root.render(
  // <Provider store={store}>
  <App />
  // </Provider>,
);
